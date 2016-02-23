var player ={name:"Player",attack:50,manaAttack:20,stamina:50,health: 200,mana: 50};
var enemy ={name:"Enemy1",attack:50,manaAttack:20,stamina:50,health: 200,mana: 50};
var enemy2 ={name:"Enemy2",attack:40,manaAttack:20,stamina:60,health: 200,mana: 50};
var counter=1;
function Turn(){
	counter++;
	document.getElementById("turn").innerHTML = "Round(s): " + counter;
	if(document.getElementById("enemy_st").style.visibility != "hidden"){
		enemy["stamina"] -= 5;
	player["health"] -= enemy["attack"];
	}
	if(document.getElementById("enemy2_st").style.visibility != "hidden"){
		enemy2["stamina"] -= 5;
		player["health"] -= enemy2["attack"];
	}
	player["stamina"] +=  10
	Stats();
	if (player["health"] <= 0){
		document.getElementById('player st').style.visibility = "hidden";
		document.getElementById("psCanvas").style.visibility = "hidden";
		document.getElementById("phCanvas").style.visibility = "hidden";
		document.getElementById("pmCanvas").style.visibility = "hidden";
		//φορτώνει log
	}
	seconds = 60;
	secondPassed();
}
function Stats(){
	var c = document.getElementById("phCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,200/*το original health*/,20);
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,player["health"],20);
	
	var cs = document.getElementById("psCanvas");
	var ctxs = cs.getContext("2d");
	ctxs.fillStyle = "#FFFFFF";
	ctxs.fillRect(0,0,200,20);
	ctxs.fillStyle = "#00FF00";
	ctxs.fillRect(0,0,4*player["stamina"],20);
	
	var cm = document.getElementById("pmCanvas");
	var ctxm = cm.getContext("2d");
	ctxm.fillStyle = "#FFFFFF";
	ctxm.fillRect(0,0,200,20);
	ctxm.fillStyle = "#0000FF";
	ctxm.fillRect(0,0,4*player["mana"],20);
	
	var ce = document.getElementById("e1hCanvas");
	var ctxe = ce.getContext("2d");
	ctxe.fillStyle = "#FFFFFF";
	ctxe.fillRect(0,0,200,20);
	ctxe.fillStyle = "#FF0000";
	ctxe.fillRect(0,0,enemy["health"],20);
	
	var cse = document.getElementById("e1sCanvas");
	var ctxse = cse.getContext("2d");
	ctxse.fillStyle = "#FFFFFF";
	ctxse.fillRect(0,0,200,20);
	ctxse.fillStyle = "#00FF00";
	ctxse.fillRect(0,0,4*enemy["stamina"],20);
	
	var cme = document.getElementById("e1mCanvas");
	var ctxme = cme.getContext("2d");
	ctxme.fillStyle = "#FFFFFF";
	ctxme.fillRect(0,0,200,20);
	ctxme.fillStyle = "#0000FF";
	ctxme.fillRect(0,0,4*enemy["mana"],20);
	
	var c2 = document.getElementById("e2hCanvas");
	var ctx2 = c2.getContext("2d");
	ctx2.fillStyle = "#FFFFFF";
	ctx2.fillRect(0,0,200,20);
	ctx2.fillStyle = "#FF0000";
	ctx2.fillRect(0,0,enemy2["health"],20);
	
	var cs2 = document.getElementById("e2sCanvas");
	var ctxs2 = cs2.getContext("2d");
	ctxs2.fillStyle = "#FFFFFF";
	ctxs2.fillRect(0,0,200,20);
	ctxs2.fillStyle = "#00FF00";
	ctxs2.fillRect(0,0,4*enemy2["stamina"],20);
	
	var cme2 = document.getElementById("e2mCanvas");
	var ctxme2 = cme2.getContext("2d");
	ctxme2.fillStyle = "#FFFFFF";
	ctxme2.fillRect(0,0,200,20);
	ctxme2.fillStyle = "#0000FF";
	ctxme2.fillRect(0,0,4*enemy["mana"],20);
	
	var e1stats='<img id= "enemy1_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",enemy["name"]);
	document.getElementById('enemy_st').innerHTML=e1stats;
	var e2stats='<img id= "enemy2_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",enemy2["name"]);
	document.getElementById('enemy2_st').innerHTML=e2stats;
	var pstats='<img id= "player_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",player["name"]);
	document.getElementById('player st').innerHTML=pstats;
}
var x = "";
var y = "";
function Attack(){
	x = "stamina";
	y = "attack";
	Damage();
}
function manaAttack(){
	x = "mana";
	y = "manaAttack";
	Damage();
}
function Damage()
{
	var choice1=document.getElementById("enemy1").checked;
	var choice2=document.getElementById("enemy2").checked;
	if (player[x] <= 0){
		alert("End Turn")
	}else{
		if(choice1 != ""){
			player[x] -= 5;
			enemy["health"] -= player[y];
		}
		if(choice2 != ""){
			player[x] -= 5;
			enemy2["health"] -= player[y];
		}
		if(choice2 == "" && choice1 == ""){
			alert("Choose an enemy to attack.");
		}
		Stats();
		if (enemy["health"] <= 0){
			document.getElementById("enemy_st").style.visibility = "hidden";
			document.getElementById("enemy1").style.visibility = "hidden";
			document.getElementById("e1hCanvas").style.visibility = "hidden";
			document.getElementById("e1sCanvas").style.visibility = "hidden";
			document.getElementById("e1mCanvas").style.visibility = "hidden";
		}
		if (enemy2["health"] <= 0){
			document.getElementById("enemy2_st").style.visibility = "hidden";
			document.getElementById("enemy2").style.visibility = "hidden";
			document.getElementById("e2hCanvas").style.visibility = "hidden";
			document.getElementById("e2sCanvas").style.visibility = "hidden";
			document.getElementById("e2mCanvas").style.visibility = "hidden";
		}
		if (enemy["health"] <= 0 && enemy2["health"] <= 0){
			alert("You won");
		}
	}
}
function bRun(){
	var x = Math.floor((Math.random() * 10) + 1);
	if (((x == 4 || x == 5 || x == 8) && player["stamina"]>=40)||x == 4){
		alert("You fled");
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
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        Turn();
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);