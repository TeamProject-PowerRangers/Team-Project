/*Battle*/var player ={name:"Player",attack:50,manaAttack:20,stamina:50,health: 200,mana: 50,level: 1};
/*Battle*/var enemy ={name:"Enemy1",attack:50,manaAttack:20,stamina:50,health: 200,mana: 50,level: 1};
/*Battle*/var enemy2 ={name:"Enemy2",attack:40,manaAttack:20,stamina:60,health: 200,mana: 50,level: 1};
/*Battle*/var counter=1;
/*Battle*/var round_Moves = 10;
/*Battle*/function next_Turn(){
	counter++;
	document.getElementById("turn").innerHTML = "Round(s): " + counter;
	if(document.getElementById("enemy1_info").style.visibility != "hidden"){
		enemy["stamina"] -= 5;
	player["health"] -= enemy["attack"];
	}
	if(document.getElementById("enemy2_info").style.visibility != "hidden"){
		enemy2["stamina"] -= 5;
		player["health"] -= enemy2["attack"];
	}
	if (player["health"] <= 0){
		document.getElementById('player_info').style.visibility = "hidden";
		document.getElementById("player_stamina_bar").style.visibility = "hidden";
		document.getElementById("player_health_bar").style.visibility = "hidden";
		document.getElementById("player_mana_bar").style.visibility = "hidden";
		//<a href="profile.html">Profile</a>
		window.location.href = "profile.html";
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
	player["stamina"] +=  10;//function που να υπολιγιζει αναλογα με το level
	player["mana"] += 10;//function που να υπολιγιζει αναλογα με το level
	Stats();
}
/*Battle*/var log = "";
/*Battle*/var damage_dealt = 0;
/*Battle*/function end_Round_log(){
	log += "<br>Round: " + (counter-1) + "<br>Damage: " + damage_dealt;
	document.getElementById('battle_log').innerHTML = log; 
}
/*Battle*/function Stats(){
	var player_h = document.getElementById("player_health_bar");
	var player_h_colour = player_h.getContext("2d");
	player_h_colour.fillStyle = "#FFFFFF";
	player_h_colour.fillRect(0,0,200/*το original health*/,20);
	player_h_colour.fillStyle = "#FF0000";
	player_h_colour.fillRect(0,0,player["health"],20);
	
	var player_s = document.getElementById("player_stamina_bar");
	var player_s_colour = player_s.getContext("2d");
	player_s_colour.fillStyle = "#FFFFFF";
	player_s_colour.fillRect(0,0,200,20);
	player_s_colour.fillStyle = "#00FF00";
	player_s_colour.fillRect(0,0,4*player["stamina"],20);
	
	var player_m = document.getElementById("player_mana_bar");
	var player_m_colour = player_m.getContext("2d");
	player_m_colour.fillStyle = "#FFFFFF";
	player_m_colour.fillRect(0,0,200,20);
	player_m_colour.fillStyle = "#0000FF";
	player_m_colour.fillRect(0,0,4*player["mana"],20);
	
	var enemy1_h = document.getElementById("enemy1_health_bar");
	var enemy1_h_colour = enemy1_h.getContext("2d");
	enemy1_h_colour.fillStyle = "#FFFFFF";
	enemy1_h_colour.fillRect(0,0,200,20);
	enemy1_h_colour.fillStyle = "#FF0000";
	enemy1_h_colour.fillRect(0,0,enemy["health"],20);
	
	var enemy1_s = document.getElementById("enemy1_stamina_bar");
	var enemy1_s_colour = enemy1_s.getContext("2d");
	enemy1_s_colour.fillStyle = "#FFFFFF";
	enemy1_s_colour.fillRect(0,0,200,20);
	enemy1_s_colour.fillStyle = "#00FF00";
	enemy1_s_colour.fillRect(0,0,4*enemy["stamina"],20);
	
	var enemy1_m = document.getElementById("enemy1_mana_bar");
	var enemy1_m_colour = enemy1_m.getContext("2d");
	enemy1_m_colour.fillStyle = "#FFFFFF";
	enemy1_m_colour.fillRect(0,0,200,20);
	enemy1_m_colour.fillStyle = "#0000FF";
	enemy1_m_colour.fillRect(0,0,4*enemy["mana"],20);
	
	var enemy2_h = document.getElementById("enemy2_health_bar");
	var enemy2_h_colour = enemy2_h.getContext("2d");
	enemy2_h_colour.fillStyle = "#FFFFFF";
	enemy2_h_colour.fillRect(0,0,200,20);
	enemy2_h_colour.fillStyle = "#FF0000";
	enemy2_h_colour.fillRect(0,0,enemy2["health"],20);
	
	var enemy2_s = document.getElementById("enemy2_stamina_bar");
	var enemy2_s_colour = enemy2_s.getContext("2d");
	enemy2_s_colour.fillStyle = "#FFFFFF";
	enemy2_s_colour.fillRect(0,0,200,20);
	enemy2_s_colour.fillStyle = "#00FF00";
	enemy2_s_colour.fillRect(0,0,4*enemy2["stamina"],20);
	
	var enemy2_m = document.getElementById("enemy2_mana_bar");
	var enemy2_m_colour = enemy2_m.getContext("2d");
	enemy2_m_colour.fillStyle = "#FFFFFF";
	enemy2_m_colour.fillRect(0,0,200,20);
	enemy2_m_colour.fillStyle = "#0000FF";
	enemy2_m_colour.fillRect(0,0,4*enemy["mana"],20);
	
	var e1stats='<img id= "enemy1_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",enemy["name"]," Level: ",enemy["level"]);
	document.getElementById('enemy1_info').innerHTML=e1stats;
	var e2stats='<img id= "enemy2_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",enemy2["name"]," Level: ",enemy2["level"]);
	document.getElementById('enemy2_info').innerHTML=e2stats;
	var pstats='<img id= "player_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",player["name"]," Level: ",player["level"], " Moves: ",round_Moves);
	document.getElementById('player_info').innerHTML=pstats;
}
/*Battle*/var stamina_or_mana = "";
/*Battle*/var type_of_attack = "";
/*Battle*/var w = 0;

/*Battle*/function stamina_Attack(){
	stamina_or_mana = "stamina";
	type_of_attack = "attack";
	w = 2;
	damage_Calculation();
}
/*Battle*/function mana_Attack(){
	stamina_or_mana = "mana";
	type_of_attack = "manaAttack";
	w = 1;
	damage_Calculation();
}
/*Battle*/ var enemylife1 = "alive";
/*Battle*/ var enemylife2 = "alive";

/*Battle*/function damage_Calculation(){
	var choice1=document.getElementById("enemy1").checked;
	var choice2=document.getElementById("enemy2").checked;
	round_Moves -= w;
	if (player[stamina_or_mana] <= 0 || round_Moves < 0){
		alert("End Turn")
		round_Moves += w;
	}else{
		round_Moves += w;
		if(choice1 != ""){
			player[stamina_or_mana] -= 5;
			enemy["health"] -= player[type_of_attack];
			damage_dealt += player[type_of_attack];
			round_Moves -= w;
		}
		if(choice2 != ""){
			player[stamina_or_mana] -= 5;
			enemy2["health"] -= player[type_of_attack];
			damage_dealt += player[type_of_attack];
			round_Moves -= w;
		}
		if(choice2 == "" && choice1 == ""){
			alert("Choose an enemy to attack.");
		}
		Stats();
		if (enemy["health"] <= 0 && enemylife1 != "dead"){
			document.getElementById("enemy1_info").style.visibility = "hidden";
			document.getElementById("enemy1").style.visibility = "hidden";
			document.getElementById("enemy1_health_bar").style.visibility = "hidden";
			document.getElementById("enemy1_stamina_bar").style.visibility = "hidden";
			document.getElementById("enemy1_mana_bar").style.visibility = "hidden";
			enemylife1 = "dead";
			exp_Points();
		}
		if (enemy2["health"] <= 0 && enemylife2 != "dead"){
			document.getElementById("enemy2_info").style.visibility = "hidden";
			document.getElementById("enemy2").style.visibility = "hidden";
			document.getElementById("enemy2_health_bar").style.visibility = "hidden";
			document.getElementById("enemy2_stamina_bar").style.visibility = "hidden";
			document.getElementById("enemy2_mana_bar").style.visibility = "hidden";
			enemylife2 = "dead";
			exp_Points();
		}
		if (enemy["health"] <= 0 && enemy2["health"] <= 0){
			alert("You won. Experience: " + experience);
			//level_up();
		}
	}
}
/*Battle*/var experience = 0;
/*Battle*/function exp_Points(){
	experience += 30;
}
//function level_up(){
	//level up απο experience.
//}
/*Battle*/function run_from_Battle(){
	var x = Math.floor((Math.random() * 10) + 1);
	if (((x == 4 || x == 5 || x == 8) && player["stamina"]>=40)||x == 4){
		alert("You fled");
		//leaves battle
	}
}
/*Battle*/var seconds = 60;
/*Battle*/function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        next_Turn();
    } else {
        seconds--;
    }
}
 
/*Battle*/var countdownTimer = setInterval('secondPassed()', 1000);