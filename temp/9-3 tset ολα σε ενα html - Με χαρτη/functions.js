//CHARACTER


//CLASS


//SKILLS


//PROFILE
function show_Profile(){
	document.getElementById("Map_field").style.display = "none";
	document.getElementById("Battle_field").style.display = "none";
	document.getElementById("Profile_field").style.display = "";
}

//LEVELING
var ex_level = "";
var experience = 0;
function exp_Points(){
	experience = experience + (ex_level*50/* επι  bonus*/);
}
function level_up(){
	player["player_experience"] += experience;
	var lv_x = 0;
	if(player['level'] >= 1 && player['level'] <= 9){
		lv_x = 1;
	}else if(player['level'] >= 10 && player['level'] <= 19){
		lv_x = 2;
	}else if(player['level'] >= 20 && player['level'] <= 29){
		lv_x = 4;
	}else if(player['level'] >= 30 && player['level'] <= 39){
		lv_x = 8;
	}else if(player['level'] >= 40 && player['level'] <= 49){
		lv_x = 16;
	}else if(player['level'] >= 50 && player['level'] <= 59){
		lv_x = 32;
	}else if(player['level'] >= 60 && player['level'] <= 69){
		lv_x = 64;
	}else if(player['level'] >= 70 && player['level'] <= 79){
		lv_x = 128;
	}else if(player['level'] >= 80 && player['level'] <= 89){
		lv_x = 256;
	}else if(player['level'] >= 90 && player['level'] <= 99){
		lv_x = 512;
	}
	if(player["player_experience"] >= lv_x * 1500){
			player['level'] += 1;
			experience = 0;
			player["player_experience"] = experience;
			document.getElementById('level_g').innerHTML = "Level: " + player["level"] + "<br>" + "Experience: " + player["player_experience"] + "/" + lv_x * 1500;
		}
	if(experience != 0){
		document.getElementById('level_g').innerHTML = "Experience gained: " + experience + "<br>" + "Experience: " + player["player_experience"] + "/" + lv_x * 1500;
	}

}

//BATTLE
function show_Battle(){
	document.getElementById("Profile_field").style.display = "none";
	document.getElementById("Map_field").style.display = "none";
	initBattle();
	document.getElementById("Battle_field").style.display = "";
}
function initBattle(){
	battle = "not over";
	round_Moves = 10;
	counter = 1;
	experience = 0;
	
	log = "";
	document.getElementById('battle_log').innerHTML = log; 
	document.getElementById("turn").innerHTML = "Round(s): " + counter;
	
	document.getElementById("battle_buttons").style.visibility = "visible";
	
	document.getElementById("next_Phase_button").style.visibility = "hidden";
	
	document.getElementById('player_info').style.visibility = "visible";
	document.getElementById("current_player_stamina_bar").style.visibility = "visible";
	document.getElementById("current_player_health_bar").style.visibility = "visible";
	document.getElementById("current_player_mana_bar").style.visibility = "visible";
			
	document.getElementById("enemy1_info").style.visibility = "visible";
	document.getElementById("enemy1").style.visibility = "visible";
	document.getElementById("current_enemy1_health_bar").style.visibility = "visible";
	enemylife1 = "alive";
	
	document.getElementById("enemy2_info").style.visibility = "visible";
	document.getElementById("enemy2").style.visibility = "visible";
	document.getElementById("current_enemy2_health_bar").style.visibility = "visible";
	enemylife2 = "alive";
	
	current_player_health = player["health"];
	current_player_stamina = player["stamina"];
	current_player_mana = player["mana"];

	current_enemy1_health = enemy["health"];
	current_enemy1_stamina = enemy["stamina"];
	current_enemy1_mana = enemy["mana"];

	current_enemy2_health = enemy2["health"];
	current_enemy2_stamina = enemy2["stamina"];
	current_enemy2_mana = enemy2["mana"];
	Stats();
	seconds = 60;
}
var player ={name:"Player",attack:50,manaAttack:20,stamina:50,health: 200,mana: 50,level: 1,player_experience: 0};//Αυτά θα ειναι του Αποστόλη
var enemy ={name:"Enemy1",attack:50,manaAttack:20,stamina:50,health: 250,mana: 50,level: 1};//Τυχαία με for/random για πανω απο ενα
var enemy2 ={name:"Enemy2",attack:40,manaAttack:20,stamina:60,health: 400,mana: 50,level: 1};//Δεν θα υπάρχει καθόλου, θα ειναι στο απο πανω με for

var counter = 1;//Rounds
var round_Moves = 10;
var battle = "not over";

var current_player_health = player["health"];// Αντίγραφο που θα αλλάζει
var current_player_stamina = player["stamina"];// Αντίγραφο που θα αλλάζει
var current_player_mana = player["mana"];// Αντίγραφο που θα αλλάζει

var current_enemy1_health = enemy["health"];// Αντίγραφο που θα αλλάζει
var current_enemy1_stamina = enemy["stamina"];// Αντίγραφο που θα αλλάζει
var current_enemy1_mana = enemy["mana"];// Αντίγραφο που θα αλλάζει

var current_enemy2_health = enemy2["health"];// Αντίγραφο που θα αλλάζει
var current_enemy2_stamina = enemy2["stamina"];// Αντίγραφο που θα αλλάζει
var current_enemy2_mana = enemy2["mana"];// Αντίγραφο που θα αλλάζει

function next_Turn(){//Τέλος του γύρου του παίκτη-παίζει AI
	counter++;
	document.getElementById("turn").innerHTML = "Round(s): " + counter;
	if(document.getElementById("enemy1_info").style.visibility != "hidden"){//Αν ζει επιτίθεται. Θελει προσθήκες για να υπολογιζει αν θα κανει attack/mana attack
		current_enemy1_stamina -= 5;
		current_player_health -= enemy["attack"];
	}
	if(document.getElementById("enemy2_info").style.visibility != "hidden"){//Αν ζει επιτίθεται. Θελει προσθήκες για να υπολογιζει αν θα κανει attack/mana attack
		enemy2["stamina"] -= 5;
		current_player_health -= enemy2["attack"];
	}
	if (current_player_health <= 0){
		battle = "over";
		show_Profile();
		//window.location.href = "profile.html";
	}
	end_Round_log();
	damage_dealt = 0;
	seconds = 60;
	secondPassed();
	if (round_Moves <= 20){
		round_Moves += 10;
		if(round_Moves >= 20){
			round_Moves = 20;
		}
	}
	
	//Θελει και if για να μην ξεπερναει το οριο
	current_player_stamina +=  10;//Το νουμερο θα αλλαξει αναλογα με το level
	current_player_mana += 10;//Το νουμερο θα αλλαξει αναλογα με το level
	
	current_enemy1_stamina +=  10;//Το νουμερο θα αλλαξει αναλογα με το level
	current_enemy1_mana += 10;//Το νουμερο θα αλλαξει αναλογα με το level
	
	current_enemy2_stamina +=  10;//Το νουμερο θα αλλαξει αναλογα με το level
	current_enemy2_mana += 10;//Το νουμερο θα αλλαξει αναλογα με το level
	Stats();
}
var log = "";
var damage_dealt = 0;
function end_Round_log(){
	log += "<br>Round: " + (counter-1) + "<br>Damage: " + damage_dealt;
	document.getElementById('battle_log').innerHTML = log; 
}
function Stats(){//Ενημέρωση των στοιχειων στην οθόνη.
	var ph = (200*current_player_health)/player["health"] ;
	var ps = (200*current_player_stamina)/player["stamina"] ;
	var pm = (200*current_player_mana)/player["mana"] ;
	
	document.getElementById('current_player_health_bar').setAttribute("width", ph + "px");
	document.getElementById('current_player_stamina_bar').setAttribute("width", ps + "px");
	document.getElementById('current_player_mana_bar').setAttribute("width", pm + "px");
	
	if(enemylife1 != "dead"){
		var e1h = (200*current_enemy1_health)/enemy["health"] ;
		document.getElementById('current_enemy1_health_bar').setAttribute("width", e1h + "px");
	}else{
		var e1h = 0 ;
		document.getElementById('current_enemy1_health_bar').setAttribute("width", e1h + "px");
	}
	if(enemylife2 != "dead"){
		var e2h = (200*current_enemy2_health)/enemy2["health"] ;
		document.getElementById('current_enemy2_health_bar').setAttribute("width", e2h + "px");
	}else{
		var e2h = 0 ;
		document.getElementById('current_enemy2_health_bar').setAttribute("width", e2h + "px");
	}
	
	var e1stats='<img id= "enemy1_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",enemy["name"]," Level: ",enemy["level"]);
	document.getElementById('enemy1_info').innerHTML=e1stats; 
	 
	var e2stats='<img id= "enemy2_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",enemy2["name"]," Level: ",enemy2["level"]);
	document.getElementById('enemy2_info').innerHTML=e2stats;
	
	var pstats='<img id= "player_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",player["name"]," Level: ",player["level"], " Moves: ",round_Moves);
	document.getElementById('player_info').innerHTML=pstats;
}
var stamina_or_mana = "";
var type_of_attack = "";
var w = 0;

function stamina_Attack(){
	stamina_or_mana = current_player_stamina;
	type_of_attack = player["attack"];
	w = 2;
	damage_Calculation();
	current_player_stamina = stamina_or_mana;
	Stats();
}
function mana_Attack(){
	stamina_or_mana = current_player_mana;
	type_of_attack = player["manaAttack"];
	w = 1;
	damage_Calculation();
	current_player_mana = stamina_or_mana;
	Stats();
}
var enemylife1 = "alive";
var enemylife2 = "alive";

var choice1 = "";
var choice2 = "";
	
function damage_Calculation(){
	if (current_enemy1_health > 0){
		choice1 = document.getElementById("enemy1").checked;
	}
	if (current_enemy2_health > 0){
		choice2 = document.getElementById("enemy2").checked;
	}
	var init_round_Moves = round_Moves;
	if (choice2 != "" && choice1 != ""){
		round_Moves -= 2*w;
	}else{
		round_Moves -= w;
	}
	if (stamina_or_mana <= 0 || round_Moves < 0){
		alert("End Turn")
		round_Moves = init_round_Moves;
	}else{
		round_Moves = init_round_Moves;
		if(choice2 == "" && choice1 == ""){
			alert("Choose an enemy to attack.");
		}
		if(choice1 != ""){
			stamina_or_mana -= 5;
			current_enemy1_health -= type_of_attack;
			damage_dealt += type_of_attack;
			round_Moves -= w;
		}
		if(choice2 != ""){
			stamina_or_mana -= 5;
			current_enemy2_health -= type_of_attack;
			damage_dealt += type_of_attack;
			round_Moves -= w;
		}
		if (current_enemy1_health <= 0 && enemylife1 != "dead"){
			document.getElementById("enemy1_info").style.visibility = "hidden";
			document.getElementById("enemy1").style.visibility = "hidden";
			document.getElementById("current_enemy1_health_bar").style.visibility = "hidden";
			enemylife1 = "dead";
			choice1 = "";
			ex_level = enemy['level'];
			exp_Points();
		}
		if (current_enemy2_health <= 0 && enemylife2 != "dead"){
			document.getElementById("enemy2_info").style.visibility = "hidden";
			document.getElementById("enemy2").style.visibility = "hidden";
			document.getElementById("current_enemy2_health_bar").style.visibility = "hidden";
			enemylife2 = "dead";
			choice2 = "";
			ex_level = enemy2['level'];
			exp_Points();
		}
		if (current_enemy1_health <= 0 && current_enemy2_health <= 0){
			counter++;
			end_Round_log();
			alert("You won. Experience: " + experience);
			battle = "over";
			document.getElementById('player_info').style.visibility = "hidden";
			document.getElementById("current_player_stamina_bar").style.visibility = "hidden";
			document.getElementById("current_player_health_bar").style.visibility = "hidden";
			document.getElementById("current_player_mana_bar").style.visibility = "hidden";
			document.getElementById("battle_buttons").style.visibility = "hidden";
			document.getElementById("next_Phase_button").style.visibility = "visible";
			level_up();
		}
	}
}

function next_Phase(){
	if(traveling == true){
		show_Map();
	}
	else{
		show_Profile();
	}
}
function run_from_Battle(){
	var x = Math.floor((Math.random() * 10) + 1);
	if (((x == 4 || x == 5 || x == 8) && player["stamina"]>=40)||x == 4){
		alert("You fled");
		battle = "over";
		//leaves battle
	}
}
var seconds = 60;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
	var countdown = document.getElementById("countdown").style.display;
	if (countdown  != "hidden") {
		document.getElementById("countdown").innerHTML = minutes + ":" + remainingSeconds;
	}
    if (seconds == 0) {
		if (battle == "not over"){
			//var countdown = document.getElementById('countdown');
			if (countdown != "hidden") {
				next_Turn();
			}
		}
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);

//MAP
/*var newwindow;
	function popup(url)
	{
		newwindow=window.open(url,'name','height=100px', 'width=1000px');
		if (window.focus) {newwindow.focus()}
	}*/
	
function show_Map(){
	document.getElementById("Profile_field").style.display = "none";
	document.getElementById("Battle_field").style.display = "none";
	if(backToX != 0 && backToY != 0)
	{
		playerX = backToX;
		playerY = backToY;
		var elem = document.getElementById("moving_player");
		elem.style.top = playerY + 'px'; 
		elem.style.left = playerX + 'px';
		
		document.getElementById("Map_field").style.display = "";
		myMove(backCountX,backCountY);
	}else{
		document.getElementById("Map_field").style.display = "";
	}
}
//var coor1 = "";
//var coor2 = "";
//var change = 0;
function getMapArray () {
	return [
	//   1 2 3 4 5 6 7 8 9 101112131415161718192021222324252627282930313233343536373839404142434445464748
		[3,3,3,3,3,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,2,2,2,2,2,2,2,2,2,2,2,2,2,11,3,3,3,3,3],//1
		[3,3,3,3,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,2,2,2,2,2,2,2,2,2,2,2,2,2,2,11,3,3,3,3],//2
		[3,3,3,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,2,2,2,2,2,2,2,2,2,2,2,2,2,2,11,3,3,3,3,3],//3
		[3,3,3,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,2,2,2,2,2,2,2,2,2,2,2,2,2,11,11,3,3,3,3,3],//4
		[3,3,3,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,2,2,2,11,11,2,2,2,2,2,2,2,11,3,3,3,3,3,3],//5
		[3,3,3,3,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,2,2,11,3,3,11,2,2,2,2,11,11,3,3,3,3,3,3,3],//6
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,11,3,3,3,3,11,11,11,11,3,3,3,3,3,3,3,3,3],//7
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//8
		[3,3,3,3,3,3,3,3,3,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//9
		[3,3,3,3,3,3,3,1,1,2,2,2,2,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//10
		[3,3,3,3,3,3,1,2,2,2,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//11
		[3,3,3,3,3,1,2,2,2,2,2,6,6,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//12
		[3,3,3,3,1,2,2,2,6,6,6,6,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//13
		[3,3,3,1,2,2,2,2,6,6,6,6,6,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//14
		[3,3,3,3,1,2,2,2,6,6,6,6,6,6,2,2,1,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//15
		[3,3,3,3,1,2,2,2,2,6,6,2,2,2,2,2,2,1,3,3,3,3,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//16
		[3,3,3,3,1,2,2,2,2,2,2,2,1,1,1,2,2,2,1,3,3,3,3,3,3,3,3,3,3,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//17
		[3,3,3,3,3,1,2,2,2,2,2,1,3,3,3,1,2,2,2,1,3,3,3,3,3,3,3,3,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//18
		[3,3,3,3,3,3,1,2,2,2,2,1,3,3,3,3,1,2,2,1,3,3,3,3,3,3,3,3,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//19
		[3,3,3,3,3,3,1,2,2,2,2,2,1,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//20
		[3,3,3,3,3,3,3,1,1,2,2,2,1,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//21
		[3,3,3,3,3,3,3,3,3,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//22
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//23
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3],//24
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,13,13,13],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,2,2,2,2],//
		[14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,13,2,2,2,2,2],//
		[14,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,2,2,2,2,2,2],//
		[4,4,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,2,2,2,2,4,2,2],//
		[4,4,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,2,2,2,4,4,4,2,2],//
		[4,4,4,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,4,4,2,4,4,4,4,4],//
		[2,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,4,4,4,4,4,4,4,4,4],//
		[2,2,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,4,4,4,4,4,4,4,4,4],//
		[2,2,2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,4,4,4,4,4,4,4,4],//
		[4,4,2,2,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,4,4,4,4,4,4,4,4],//
		[4,2,2,2,2,2,2,2,14,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,13,4,4,4,4,4,4,4,4],//
		[2,2,2,2,4,4,2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,13,13,4,4,4,13,13,13,13],//
		[2,2,2,4,4,4,2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,13,13,13,3,3,3],//
		[2,2,4,4,4,2,2,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[4,4,4,4,2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[4,4,2,2,2,2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[4,4,2,2,2,2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[4,4,2,2,2,2,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[4,4,4,2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,4,4,4,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,2,4,4,4,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,2,2,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,2,2,4,4,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,2,2,2,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,2,2,2,2,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,2,2,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,2,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,4,4,4,4,4,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,2,2,2,2,14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,4,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,2,2,2,2,14,3,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,3,3,1,4,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[2,6,6,2,14,3,3,3,3,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[6,6,6,6,14,3,3,3,3,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[6,6,14,14,3,3,3,3,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[6,6,14,3,3,3,3,3,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[14,14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[14,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,2,2,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,2,4,4,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,4,4,4,4,4,4,4,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]//
	//   1 2 3 4 5 6 7 8 9 101112131415161718192021222324252627282930313233343536373839404142434445464748
		];
}

onAllImagesLoaded = function (context) {
	
}
	
function loadMap(){	
	var canvas = document.getElementById("map_canvas");
	var context = canvas.getContext("2d");

	var grass = new Image();
	var sand = new Image();
	var water = new Image();
	var rock = new Image();
	var ice = new Image();
	var dirt = new Image();
				
	grass.src='grass.png';
	sand.src='sand.png';
	water.src='water.png';
	rock.src='rock.png';
	ice.src='ice.png';
	dirt.src='dirt.png';

	var posX=0;
	var posY=0;		
	
	//var coorX = 0;
	//var coorY = 0;
	var mapArray = getMapArray();
	for(var i=0; i < mapArray.length; i++){
		for(var j=0; j < mapArray[i].length; j++){
			if(mapArray[i][j]==2){
				context.drawImage(grass,posX, posY - 2,70, 60);
				//coorX = posX;
				//coorY = posY - 2;
			}
			if(mapArray[i][j]==1 || mapArray[i][j]==11 || mapArray[i][j]==13 || mapArray[i][j]==14){
				context.drawImage(sand,posX,posY,70, 60);
				if(mapArray[i][j]==14)
				{
					//coor += ",("+ i+","+j+")"+"X="+coorX + "Y=" + coorY+ "<br>";
					//if(change == 0)
					//{
					//	coorX = posX -10;
					//	coorY = posY +25;
					//	coor1 += coorX+","+coorY+",";
					//	change = 1;
					//}else if(change == 1)
					//{
					//	coorX = posX +25;
					//	coorY = posY +25;
					//	coor2 = coorX+","+coorY+"," + coor2+",";
					//	change = 0;
					//}
					//coor1 += coorX+","+coorY+",";
				}
			}
			if(mapArray[i][j]==3){
				context.drawImage(water,posX,posY + 10,70, 60);
				//coorX = posX;
				//coorY = posY + 10;
			}
			if(mapArray[i][j]==4){
				context.drawImage(rock,posX,posY - 3,70, 60);
				//coorX = posX;
				//coorY = posY - 3;
			}
			if(mapArray[i][j]==5){
				context.drawImage(ice,posX,posY,70, 60);
				//coorX = posX;
				//coorY = posY;
			}
			if(mapArray[i][j]==6){
				context.drawImage(dirt,posX,posY,70, 60);
				//coorX = posX;
				//coorY = posY;
			}
			//if ((i == 9 && j == 22)||(i == 9 && j == 14)||(i == 12 && j == 17)||(i == 18 && j == 20)||(i == 21 && j == 18)||(i == 22 && j == 12)||(i == 22 && j == 9)||(i == 18 && j == 5)||(i == 14 && j == 4)){
			
			//}
			posX+=20;
		}
		posY+=10;
		posX=0;
	}
	//Coordinates()
}
/*function Coordinates(){
		var coor = coor1; //+ coor2;
		coor = coor.slice(0, -1);
		//var bb = "Coor: " + coor;
		document.getElementById('vtest').innerHTML = coor;
		return coor;
}*/
	
var playerX = 500;
var playerY = 500;
var backToX = 0;
var backToY = 0;
var backCountX =0;
var backCountY = 0;
var traveling = false;
	
function myMove(countryX,countryY) {
	var elem = document.getElementById("moving_player");
	var id = setInterval(frame, 20);
	function frame() {
		if (countryY == playerY && countryX == playerX) {
			backToX = 0;
			backToY = 0;
			traveling = false;
			clearInterval(id);
		} else {
			if(countryX > playerX){
				playerX += 1;
			}else if(countryX < playerX){
				playerX -= 1;
			}
			if(countryY > playerY){
				playerY += 1;
			}else if(countryY < playerY){
				playerY -= 1;
			}
			elem.style.top = playerY + 'px'; 
			elem.style.left = playerX + 'px'; 
			var rBattle = Math.floor((Math.random() * 100) + 1);
			if (rBattle == 2){
				backToX = playerX;
				backToY = playerY;
				backCountX = countryX;
				backCountY = countryY;
				traveling = true;
				show_Battle();
				clearInterval(id);
			}
		}
	}
}
//QUESTS

//CHAT?