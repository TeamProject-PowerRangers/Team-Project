//CHARACTER

function character(name,healthPoints,mana,attackPoints,abilityPoints,stamina,armorPoints,level,experiencePoints,country,god){
	this.name = name;
	this.god = god;
	this.HP = healthPoints;
	this.mana = mana;
	this.attack = attackPoints;
	this.ability = abilityPoints;
	this.stamina = stamina;
	this.armor = armorPoints;
	this.level = level;
	this.XP = experiencePoints;
	this.classAttribute = new classType('',0,0,0,0,0,0,0,0,0);
	this.country = country;
}

function classType(type,healthPoints,mana,attackPoints,abilityPoints,stamina,armorPoints,speed,strength,willPower,intelligence){
	this.Class = type;
	this.HP = healthPoints;
	this.mana = mana;
	this.attack = attackPoints;
	this.ability = abilityPoints;
	this.stamina = stamina;
	this.armor = armorPoints;
	this.speed = speed;
	this.strength = strength;
	this.willPower = willPower;
	this.intelligence = intelligence;
}
//attacks

var player = new character('',0,0,0,0,0,0,0,0,'','');
//character creation
function show_Create_Character()
{
	document.getElementById('Start_of_Game_field').style.display = 'none';
	document.getElementById('Character_creation_field').style.display = '';
	document.getElementById('Country_Selection').style.display = '';
}

function chosen_country(scountry){
	player.country = scountry;
	document.getElementById('Country_Selection').style.display = 'none';
	document.getElementById('God_Selection').style.display = '';
}

function chosen_god(cgod) {
	 player.god = cgod;
	document.getElementById('God_Selection').style.display = 'none';
	document.getElementById('Class_Selection').style.display = '';	 
}

function create_Character(e){
	player.name = document.getElementById('form_name').value;
	
	if (document.getElementById('opt_warrior').checked) {
		player.classAttribute.Class = document.getElementById('opt_warrior').value;
	}else if (document.getElementById('opt_sorcerer').checked) {
		player.classAttribute.Class = document.getElementById('opt_sorcerer').value;
	}else if (document.getElementById('opt_brawler').checked) {
		player.classAttribute.Class = document.getElementById('opt_brawler').value;
	}else if (document.getElementById('opt_healer').checked) {
		player.classAttribute.Class = document.getElementById('opt_healer').value;
	}
	e.preventDefault();
	show_Profile();
}

//PROFILE


function show_Profile(){
	document.getElementById('Start_of_Game_field').style.display = 'none';
	document.getElementById('Character_creation_field').style.display = 'none';
	document.getElementById('Map_field').style.display = 'none';
	document.getElementById('Battle_field').style.display = 'none';
	document.getElementById('Profile_field').style.display = '';
}

var h_seconds = 60;
var s_seconds = 60;
var m_seconds = 60;

function refillBars() {
	var ph = (200*current_player_health)/player.HP ;
	var ps = (200*current_player_stamina)/player.stamina ;
	var pm = (200*current_player_mana)/player.mana ;
	
	if( current_player_stamina == player.stamina){
		document.getElementById("s_countdown").innerHTML = '&#8734;';
	}
	if( current_player_health == player.HP){
		document.getElementById("h_countdown").innerHTML = '&#8734;';
	}
	if( current_player_mana == player.mana){
		document.getElementById("m_countdown").innerHTML = '&#8734;';
	}
	
    var h_minutes = Math.round((h_seconds - 30)/60);
    var h_remainingSeconds = h_seconds % 60;
    if (h_remainingSeconds < 10) {
        h_remainingSeconds = "0" + h_remainingSeconds;  
    }
	var h_countdown = document.getElementById("Profile_field").style.display;
	var h_full = document.getElementById("h_countdown").style.display;
	if (h_countdown  != "none" && h_full != "none") {
		document.getElementById("h_countdown").innerHTML = h_minutes + ":" + h_remainingSeconds;
	}
    if (h_seconds == 0) {
		if( current_player_health < player.HP){
			current_player_health +=  20;
			if(current_player_health > player.HP){
				current_player_health = player.HP;
			}
		}
		if (h_countdown != "none"){
			document.getElementById('profile_health_bar').setAttribute("width", ph + "px");
		}
		h_seconds = 60;
    } else {
        h_seconds--;
    }
	
	var s_minutes = Math.round((s_seconds - 30)/60);
    var s_remainingSeconds = s_seconds % 60;
    if (s_remainingSeconds < 10) {
        s_remainingSeconds = "0" + s_remainingSeconds;  
    }
	var s_countdown = document.getElementById("Profile_field").style.display;
	var s_full = document.getElementById("s_countdown").style.display;
	if (s_countdown  != "none" && s_full != "none") {
		document.getElementById("s_countdown").innerHTML = s_minutes + ":" + s_remainingSeconds;
	}
    if (s_seconds == 0) {
		if( current_player_stamina < player.stamina){
			current_player_stamina +=  10;
			if(current_player_stamina > player.stamina){
				current_player_stamina = player.stamina;
			}
		}
		if (s_countdown != "none"){
			document.getElementById('profile_stamina_bar').setAttribute("width", ps + "px");
		}
		s_seconds = 60;
    } else {
        s_seconds--;
    }
	
	var m_minutes = Math.round((m_seconds - 30)/60);
    var m_remainingSeconds = m_seconds % 60;
    if (m_remainingSeconds < 10) {
        m_remainingSeconds = "0" + m_remainingSeconds;  
    }
	var m_countdown = document.getElementById("Profile_field").style.display;
	var m_full = document.getElementById("m_countdown").style.display;
	if (m_countdown  != "none" && m_full != "none") {
		document.getElementById("m_countdown").innerHTML = m_minutes + ":" + m_remainingSeconds;
	}
    if (m_seconds == 0) {
		if( current_player_mana < player.mana){
			current_player_mana +=  10;
			if(current_player_mana > player.mana){
				current_player_mana = player.mana;
			}
		}
		if (m_countdown != "none"){
			document.getElementById('profile_mana_bar').setAttribute("width", pm + "px");
		}
		m_seconds = 60;
    } else {
        m_seconds--;
    }
	if( current_player_stamina == player.stamina){
		document.getElementById("s_countdown").innerHTML = '&#8734;';
	}
	if( current_player_health == player.HP){
		document.getElementById("h_countdown").innerHTML = '&#8734;';
	}
	if( current_player_mana == player.mana){
		document.getElementById("m_countdown").innerHTML = '&#8734;';
	}
}

var countdownBars = setInterval('refillBars()', 1000);

//LEVELING
var ex_level = "";
var experience = 0;
function exp_Points(){
	experience = experience + (ex_level*67/* επι  bonus*/);
}

function level_up(){
	
	player.experiencePoints += experience;
	var lv_x = 0;
	if(player.level >= 1 && player.level <= 9){
		lv_x = 1;
	}else if(player.level >= 10 && player.level <= 19){
		lv_x = 2;
	}else if(player.level >= 20 && player.level <= 29){
		lv_x = 4;
	}else if(player.level >= 30 && player.level <= 39){
		lv_x = 8;
	}else if(player.level >= 40 && player.level <= 49){
		lv_x = 16;
	}else if(player.level >= 50 && player.level <= 59){
		lv_x = 32;
	}else if(player.level >= 60 && player.level <= 69){
		lv_x = 64;
	}else if(player.level >= 70 && player.level <= 79){
		lv_x = 128;
	}else if(player.level >= 80 && player.level <= 89){
		lv_x = 256;
	}else if(player.level >= 90 && player.level <= 99){
		lv_x = 512;
	}
	document.getElementById('level_g').innerHTML = "<br>Experience gained: " + experience
	
	if(player.experiencePoints >= lv_x * 1500){
		while(player.experiencePoints >= lv_x * 1500){
			player.level += 1;
			experience = 0;
			player.experiencePoints -= lv_x * 1500;
																							//   Level up abilities
			document.getElementById('level_g').innerHTML += "<br>Level: " + player.level;
		}
	}else{
		document.getElementById('level_g').innerHTML += "<br>Level: " + player["level"];
	}
	document.getElementById('level_g').innerHTML += "<br>" + "Experience: " + player["player_experience"] + "/" + lv_x * 1500;
	document.getElementById('level_g').style.visibility = "visible";
}


//BATTLE
function show_Battle(){
	document.getElementById("Profile_field").style.display = "none";
	document.getElementById("Map_field").style.display = "none";
	initBattle();
	document.body.style.backgroundColor = "#AAAAAA";
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
	
	document.getElementById('level_g').style.visibility = "hidden";
	
	document.getElementById('player_info').style.visibility = "visible";
	document.getElementById("current_player_stamina_bar").style.visibility = "visible";
	document.getElementById("current_player_health_bar").style.visibility = "visible";
	document.getElementById("current_player_mana_bar").style.visibility = "visible";
			
	/*document.getElementById("enemy1_info").style.visibility = "visible";
	document.getElementById("enemy1").style.visibility = "visible";
	document.getElementById("current_enemy1_health_bar").style.visibility = "visible";
	enemylife1 = "alive";
																									Αλλαγη με for 'enemy'+enemy[i]+'_info' ????
	document.getElementById("enemy2_info").style.visibility = "visible";
	document.getElementById("enemy2").style.visibility = "visible";
	document.getElementById("current_enemy2_health_bar").style.visibility = "visible";
	enemylife2 = "alive";*/
}

var counter = 1;//Rounds
var round_Moves = 10;
var battle = "not over";

var current_player_health = player.HP;
var current_player_stamina = player.stamina;
var current_player_mana = player.mana;

/*var enemylife1 = "alive";
var enemylife2 = "alive";
var enemylife3 = "alive";
var enemylife4 = "alive";
																									Δυο Arrays
var choice1 = "";
var choice2 = "";
var choice3 = "";
var choice4 = "";*/

function damage_Calculation(){
	/*
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
			current_player_mana +=  20;
			current_player_stamina +=  25;
			current_player_health +=  35;
			document.getElementById('player_info').style.visibility = "hidden";
			document.getElementById("current_player_stamina_bar").style.visibility = "hidden";
			document.getElementById("current_player_health_bar").style.visibility = "hidden";
			document.getElementById("current_player_mana_bar").style.visibility = "hidden";
			document.getElementById("battle_buttons").style.visibility = "hidden";
			document.getElementById("next_Phase_button").style.visibility = "visible";
			level_up();
		}
	}*/
}

var log = "";
var damage_dealt = 0;

function end_Round_log(){
	log += "<br>Round: " + (counter-1) + "<br>Damage: " + damage_dealt;
	document.getElementById('battle_log').innerHTML = log; 
}

function next_Turn(){
	counter++;
	document.getElementById("turn").innerHTML = "Round(s): " + counter;
	
	if (current_player_health <= 0){
		current_player_health = 0;
		battle = "over";
		show_Profile();
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
}

function stats_R(){
	
	var ph = (200*current_player_health)/player.HP;
	var ps = (200*current_player_stamina)/player.stamina;
	var pm = (200*current_player_mana)/player.mana;
	
	document.getElementById('current_player_health_bar').setAttribute("width", ph + "px");
	document.getElementById('current_player_stamina_bar').setAttribute("width", ps + "px");
	document.getElementById('current_player_mana_bar').setAttribute("width", pm + "px");
	/*
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
	document.getElementById('enemy2_info').innerHTML=e2stats;*/
	
	var pstats='<img id= "player_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",player["name"]," Level: ",player["level"], " Moves: ",round_Moves);
	document.getElementById('player_info').innerHTML=pstats;
}

var seconds = 60;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
	var countdown = document.getElementById("Battle_field").style.display;
	if (countdown  != "none") {
		document.getElementById("countdown").innerHTML = minutes + ":" + remainingSeconds;
	}
    if (seconds == 0) {
		if (battle == "not over"){
			if (countdown != "none") {
				next_Turn();
			}
		}
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);

function run_from_Battle(){
	var x = Math.floor((Math.random() * 10) + 1);
	if (((x == 4 || x == 5 || x == 8) && player["stamina"]>=40)||x == 4){ // Add to calculate speed etc
		alert("You fled");
		battle = "over";
		next_Phase()
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

//MAP

function show_Map(){
	document.getElementById('Start_of_Game_field').style.display = 'none';
	document.getElementById('Character_creation_field').style.display = 'none';
	document.getElementById('Battle_field').style.display = 'none';
	document.getElementById('Profile_field').style.display = 'none';
	document.getElementById('Map_field').style.display = '';
	
	document.body.style.backgroundColor = "#000033";
	
	if(backToX != 0 && backToY != 0)
	{
		playerX = backToX;
		playerY = backToY;
		var elem = document.getElementById("moving_player");
		elem.style.top = playerY + 'px'; 
		elem.style.left = playerX + 'px';
		
		document.getElementById("Map_field").style.display = "";
		travellingPlayer(backCountX,backCountY);
	}else{
		document.getElementById("Map_field").style.display = "";
	}
}

var playerX = 900;
var playerY = 900;
var backToX = 0;
var backToY = 0;
var backCountX = 0;
var backCountY = 0;
var traveling = false;
var leaving_from = '';

var greece_cX = [];
var greece_cY = [];
var japan_cX = [];
var japan_cY = [];
var egypt_cX = [];
var egypt_cY = [];
var china_cX = [];
var china_cY = [];
var scandinavia_cX = [];
var scandinavia_cY = [];

for (i = 0; i <= 151; i++){
	for (j = 0; j <= 200; j++){
		y = 120 + j;
		x = 640 + i;
		scandinavia_cX = x;
		scandinavia_cY = y;
	}
}
for (i = 0; i <= 138; i++){
	for (j = 0; j <= 200; j++){
		y = 172 + j;
		x = 115 + i;
		greece_cX[i] = x;
		greece_cY[j] = y;
	}
}	
for (i = 0; i <= 200; i++){
	for (j = 0; j <= 150; j++){
		y = 250 + j;
		x = 440 + i;
		japan_cX[i] = x;
		japan_cY[j] = y;
	}
}
for (i = 0; i <= 200; i++){
	for (j = 0; j <= 162; j++){
		y = 610 + j;
		x = 80 + i;
		china_cX[i] = x;
		china_cY[j] = y;
	}
}
for (i = 0; i <= 200; i++){
	for (j = 0; j <= 141; j++){
		y = 587 + j;
		x = 570 + i;
		egypt_cX[i] = x;
		egypt_cY[j] = y;
	}
}

var land = false;

function travellingPlayer(countryX,countryY,destination){
	var tempCountryX = countryX;
	var tempCountryY = countryY;
	var elem = document.getElementById("moving_player");
	var id = setInterval(frame,20);
	function frame() {
		if (countryY == playerY && countryX == playerX) {
			if(land == false){
				backToX = 0;
				backToY = 0;
				traveling = false;
				leaving_from = destination;
			}else{
				land = false;
			}
			if(countryX == tempCountryX && countryY == tempCountryY){
				clearInterval(id);
			}else{
				countryX = tempCountryX;
				countryY = tempCountryY;
			}
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
			var overlap = overlap_Land(destination);
			if(overlap.bool == true){
				land = true;
				countryX = overlap.newDestX;
				countryY = overlap.newDestY;
			}
			elem.style.top = playerY + 'px'; 
			elem.style.left = playerX + 'px'; 
			var rBattle = Math.floor((Math.random() * 100) + 1);
			if (rBattle == 200){
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

function newDestination(obst){
	var cX = 0;
	var cY = 0;
	var _width = 0;
	var _height = 0;
	var newDX = 0;
	var newDY = 0;
	if(obst == 'greece'){
		cY = 172;
		cX = 115;
		_width = 138;
		_height = 200;
	}else if(obst == 'china'){
		cY = 610;
		cX = 80;
		_width = 200;
		_height = 162;
	}else if(obst == 'japan'){
		cY = 250;
		cX = 440;
		_width = 200;
		_height = 150;
	}else if(obst == 'egypt'){
		cY = 587;
		cX = 570;
		_width = 200;
		_height = 141;
	}else if(obst == 'scandinavia'){
		cY = 120;
		cX = 640;
		_width = 151;
		_height = 200;
	}
	var Yheight = cY + _height;
	var Xwidth = cX + _width;
	if(playerY == cY && playerX == cX){
		newDY = cY - 5;
		newDX = cX + _width;
	}else if(playerY == cY && playerX > cX && playerX < Xwidth){
		newDY = cY - 5;
		newDX = cX + _width + 30;
	}else if(playerY == cY && playerX == Xwidth){
		newDY = cY + _height;
		newDX = cX + _width + 5;
	}else if(playerY > cY && playerY < Yheight && playerX == Xwidth){
		newDY = cY + _height + 5;
		newDX = cX + _width + 5;
	}else if(playerY == Yheight && playerX == Xwidth){
		newDY = cY + _height + 5;
		newDX = cX + _width;
	}else if(playerY == Yheight && playerX > cX && playerX < Xwidth ){
		newDY = cY + _height + 55;
		newDX = cX - 25;
	}else if(playerY == Yheight && playerX == cX){
		newDY = cY + _height;
		newDX = cX - 30;
	}else if(playerY > cY && playerY < Yheight && playerX == cX){
		newDY = cY - 30;
		newDX = cX - 30;
	}
	return {
		newDX: newDX,
		newDY: newDY
	};
}

function overlap_Land(destination){
	var bool = false;
	var newDestX = 0;
	var newDestY = 0;
	
	if(destination != 'scandinavia' && leaving_from != 'scandinavia' && bool == false){
		for (i = 0; i <= 151; i++){
			for (j = 0; j <= 200; j++){
				if(scandinavia_cX[i] == playerX){
					if(scandinavia_cY[j] == playerY){
						bool = true;
						var ch_dest = newDestination('scandinavia');
					}
				}
			}
		}
	}
	if(destination != 'china' && leaving_from != 'china' && bool == false){
		for (i = 0; i <= 200; i++){
			for (j = 0; j <= 162; j++){
				if(china_cX[i] == playerX){
					if(china_cY[j] == playerY){
						bool = true;
						var ch_dest = newDestination('china');
					}
				}
			}
		}
	}
	if(destination != 'greece' && leaving_from != 'greece' && bool == false){
		for (i = 0; i <= 138; i++){
			for (j = 0; j <= 200; j++){
				if(greece_cX[i] == playerX){
					if(greece_cY[j] == playerY){
						bool = true;
						var ch_dest = newDestination('greece');
					}
				}
			}
		}
	}
	if(destination != 'japan' && leaving_from != 'japan' && bool == false){
		for (i = 0; i <= 200; i++){
			for (j = 0; j <= 150; j++){
				if(japan_cX[i] == playerX){
					if(japan_cY[j] == playerY){
						bool = true;
						var ch_dest = newDestination('japan');
					}
				}
			}
		}
	}
	if(destination != 'egypt' && leaving_from != 'egypt' && bool == false){
		for (i = 0; i <= 200; i++){
			for (j = 0; j <= 141; j++){
				if(egypt_cX[i] == playerX){
					if(egypt_cY[j] == playerY){
						bool = true;
						var ch_dest = newDestination('egypt');
					}
				}
			}
		}
	}
	if(bool == true){
		newDestX = ch_dest.newDX;
		newDestY = ch_dest.newDY;
	}
	return {
		bool: bool,
		newDestX: newDestX,
		newDestY: newDestY
	};
}