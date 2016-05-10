//ITEMS

function list_of_all_Items(){ // Καρανικόλας 100362082
    this.weapons = [];
    this.armor = [];
    this.potions = [];
    this.collectibles = [];
    
    this.weapons[0] = {
        name: 'Warrior\'s Weapon',
		attack: 50,
		type: 'warrior',
        price: 40
    };
    this.weapons[1] = {
        name: 'Healer\'s Weapon',
		attack: 50,
		type: 'brawler',
        price: 40
    };
    this.weapons[2] = {
        name: 'Sorcerer\'s Weapon',
		attack: 50,
		type: 'sorcerer',
        price: 40
    };
    this.weapons[3] = {
        name: 'Brawler\'s Weapon',
		attack: 50,
		type: 'healer',
        price: 40
    };
    
    
    this.armor[0] = {
        name: 'Warrior\'s Armor',
		defence: 50,
		type: 'warrior',
        price: 70
    };
    this.armor[1] = {
        name: 'Brawler\'s Armor',
		defence: 50,
		type: 'brawler',
        price: 70
    };
    this.armor[2] = {
        name: 'Sorcerer\'s Armor',
		defence: 50,
		type: 'sorcerer',
        price: 70
    };
    this.armor[3] = {
        name: 'Healer\'s Armor',
		defence: 50,
		type: 'healer',
        price: 70
    };
    
    
    this.potions[0] = {
        name: 'HP Potion',
		effect: 100,
		type: 'health',
        price: 100
    };
    this.potions[1] = {
        name: 'Mana Potion',
		effect: 80,
		type: 'mana',
        price: 100
    };
    this.potions[2] = {
        name: 'Stamina Potion',
		effect: 90,
		type: 'stamina',
        price: 100
    };
    this.potions[3] = {
        name: 'Moves Potion',
		effect: 2,
		type: 'moves',
        price: 100
    };
    
    
    this.collectibles[0] = {
        name: 'collectible #1',
        price: 40
    };
    this.collectibles[1] = {
        name: 'collectible #2',
        price: 80
    };
    this.collectibles[2] = {
        name: 'collectible #3',
        price: 60
    };
    this.collectibles[3] = {
        name: 'collectible #4',
        price: 160
    };
    this.collectibles[4] = {
        name: 'collectible #5',
        price: 150
    };
    this.collectibles[5] = {
        name: 'collectible #6',
        price: 200
    };
}

//shop// Καρανικόλας 100362082
function show_Shop(){
	parent.profile.document.getElementById('Profile_field').style.display = 'none';
	parent.shop.document.getElementById('Shop_items').style.display = '';
    parent.document.getElementById('game_frames').cols = '10%,0%,0%,0%,0%,0%,90%,0%';
}
// Καρανικόλας 100362082
var shop_list_option = 0;
var items_for_Sale = new list_of_all_Items();

for(items_in_shop = 0; items_in_shop < 6; items_in_shop++){
	shop_List(items_for_Sale.collectibles[items_in_shop].name);
}
for(items_in_shop = 0; items_in_shop < 4; items_in_shop++){
	shop_List(items_for_Sale.potions[items_in_shop].name);
}
for(items_in_shop = 0; items_in_shop < 4; items_in_shop++){
	shop_List(items_for_Sale.armor[items_in_shop].name);
}
for(items_in_shop = 0; items_in_shop < 4; items_in_shop++){
	shop_List(items_for_Sale.weapons[items_in_shop].name);
}
// Καρανικόλας 100362082
function shop_List(Item_name){
	var itemOptions = parent.shop.document.getElementById("Shop");
	var option = parent.shop.document.createElement("option");
	option.text = Item_name;
	itemOptions.add(option);
	//return true;
}
// Καρανικόλας 100362082
var inventory_count = 0;
function shop_Buy(){
    
    var selected_item = parent.shop.document.getElementById('Shop').selectedIndex;
    var itemOptions = parent.shop.document.getElementById('Shop').options;
    if(selected_item){
		var item_name = itemOptions[selected_item].text;
		var inventoryOptions = parent.inventory.document.getElementById("Inventory");
		var option = parent.profile.document.createElement("option");
		option.text = item_name;
		inventoryOptions.add(option);
		gold -= 0;
    }
}
// Καρανικόλας 100362082
function shop_Sell(){
    remove_item();
    gold += 0 ;
}
// Καρανικόλας 100362082
function remove_item(){
	var selected_item = parent.inventory.document.getElementById('Inventory');
    selected_item.remove(selected_item.selectedIndex);
}
// Καρανικόλας 100362082
var mi_used = false;
function inventory_Use(){
	var selected_item = parent.inventory.document.getElementById('Inventory').selectedIndex;
    var itemOptions = parent.inventory.document.getElementById('Inventory').options;
	if(selected_item){
		var item_name = itemOptions[selected_item].text;
		var chosen_item_effect = 0;
		var chosen_item_type = '';
		for(i = 0; i < 4; i++){
			if(item_name == items_for_Sale.potions[i].name){
				chosen_item_effect = items_for_Sale.potions[i].effect;
				chosen_item_type = items_for_Sale.potions[i].type;
			}
		}
		
		if(chosen_item_type == 'moves'){
			if(parent.battle.document.getElementById("Battle_field").style.display == "" && mi_used == false){
				round_Moves += chosen_item_effect;
				mi_used = true;
			}else if(mi_used == true){
				alert('You can only use one Move potion per turn.');
			}else if(parent.battle.document.getElementById("Battle_field").style.display == "none"){
				alert('You can only use it during Battle.');
			}
		}else if(chosen_item_type == 'mana'){
			current_player_mana += chosen_item_effect;
		}else if(chosen_item_type == 'health'){
			current_player_health += chosen_item_effect;
		}else if(chosen_item_type == 'stamina'){
			current_player_stamina += chosen_item_effect;
		}
		remove_item();
    }
	stats_R();
}

//CHARACTER //ΟΧΙ
function character(name,level,defence,strength,willPower,intelligence,speed,experiencePoints,weaponryDefence,weaponryOffence,sorcererDefence,brawlerDefence,sorcererOffence,brawlerOffence,country,god,skillpoint,weaponEquip){
	this.name = name;
	this.god = god;
	this.defence = defence;
	this.speed = speed;
	this.strength = strength;
	this.willPower = willPower;
	this.intelligence = intelligence;
	this.level = level;
	this.XP = experiencePoints;
	this.country = country;
	this.weaponryOffence = weaponryOffence;
	this.weaponEquip = weaponEquip;
	this.brawlerOffence = brawlerOffence;
	this.sorcererOffence = sorcererOffence;
	this.brawlerDefence = brawlerDefence;
	this.sorcererDefence = sorcererDefence;
	this.weaponryDefence = weaponryDefence;
	this.skillpoint = skillpoint;
	this.classAttribute = new classType('',0,0,0);
}

function classType(type,healthPoints,mana,stamina){
    this.Class = type;
	this.HP = healthPoints;
	this.mana = mana;
	this.stamina = stamina;
	this.attack = new available_Attacks('','','');
}
//attacks
function available_Attacks(staminaAttack,manaAttack,healAttack){
    this.staminaAttack = staminaAttack;
	this.manaAttack = manaAttack;
	this.healAttack = healAttack;
}
//skills
function skills_List(){
    this.warrior = [];
	this.warrior[0] = {
		name: 'sword slash',
		attack: 50,
		s_m_cost: 20,
		move_cost: 1,
		type: 'warrior'
	};
	this.warrior[1] = {
		name: 'katana slash',
		attack: 70,
		s_m_cost: 30,
		move_cost: 2,
		type: 'warrior'
	};
	this.warrior[2] = {
		name: 'hammer smashing combo',
		attack: 80,
		s_m_cost: 35,
		move_cost: 2,
		type: 'warrior'
	};
	this.warrior[3] = {
		name: 'pierce of justice',
		attack: 100,
		s_m_cost: 40,
		move_cost: 3,
		type: 'warrior'
	};
	this.warrior[4] = {
		name: 'doom piercing combo',
		attack: 120,
		s_m_cost: 15,
		move_cost: 3,
		type: 'warrior'
	};
	
	this.sorcerer = [];
	this.sorcerer[0] = {
		name: 'Mana attack',
		attack: 50,
		s_m_cost: 20,
		move_cost: 1,
		type: 'sorcerer'
	};
	this.sorcerer[1] = {
		name: 'staff enlightment',
		attack: 70,
		s_m_cost: 30,
		move_cost: 2,
		type: 'sorcerer'
	};
	this.sorcerer[2] = {
		name: 'mana orb',
		attack: 80,
		s_m_cost: 35,
		move_cost: 2,
		type: 'sorcerer'
	};
	this.sorcerer[3] = {
		name: 'mana drain',
		attack: 100,
		s_m_cost: 40,
		move_cost: 3,
		type: 'sorcerer'
	};
	this.sorcerer[4] = {
		name: "sorcerer's winsdom",
		attack: 120,
		s_m_cost: 15,
		move_cost: 3,
		type: 'sorcerer'
	};
	
	this.brawler = [];
	this.brawler[0] = {
		name: 'fist',
		attack: 50,
		s_m_cost: 20,
		move_cost: 1,
		type: 'brawler'
	};
	this.brawler[1] = {
		name: 'kick',
		attack: 70,
		s_m_cost: 30,
		move_cost: 2,
		type: 'brawler'
	};
	this.brawler[2] = {
		name: 'fist combo',
		attack: 80,
		s_m_cost: 35,
		move_cost: 2,
		type: 'brawler'
	};
	this.brawler[3] = {
		name: 'kick combo',
		attack: 100,
		s_m_cost: 40,
		move_cost: 3,
		type: 'brawler'
	};
	this.brawler[4] = {
		name: "monk arts",
		attack: 120,
		s_m_cost: 15,
		move_cost: 3,
		type: 'brawler'
	};
	
	this.healer = [];
	this.healer[0] = {
		name: 'Healing self',
		attack: 50,
		s_m_cost: 20,
		move_cost: 1,
		type: 'healer'
	};
	this.healer[1] = {
		name: 'healing allies',
		attack: 70,
		s_m_cost: 30,
		move_cost: 2,
		type: 'healer'
	};
	this.healer[2] = {
		name: 'aoe healing',
		attack: 80,
		s_m_cost: 35,
		move_cost: 2,
		type: 'healer'
	};
	this.healer[3] = {
		name: 'life drain',
		attack: 100,
		s_m_cost: 40,
		move_cost: 3,
		type: 'healer'
	};
	this.healer[4] = {
		name: "mana attack",
		attack: 120,
		s_m_cost: 15,
		move_cost: 3,
		type: 'healer'
	};
}
var player = new character('',0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,false);
var skillsSet = new skills_List();
//character creation
function show_Create_Character()// Καρανικόλας 100362082
{
	parent.start.document.getElementById('Start_of_Game_field').style.display = 'none';
	parent.character.document.getElementById('Character_creation_field').style.display = '';
	parent.character.document.getElementById('Country_Selection').style.display = '';
	parent.document.getElementById('game_frames').cols = '10%,0%,90%,0%,0%,0%,0%';
}

function chosen_country(scountry){
	player.country = scountry;
	parent.character.document.getElementById('God_Selection').style.display = '';
	if(player.country == 'greece'){
		
		parent.character.document.getElementById('Egypt_God_Selection').style.display = 'none';
		parent.character.document.getElementById('China_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Japan_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Scandinavia_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Greece_God_Selection').style.display = '';
		playerX = 170;
		playerY = 190;
		
	}else if(player.country == 'japan'){
		
		parent.character.document.getElementById('Egypt_God_Selection').style.display = 'none';
		parent.character.document.getElementById('China_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Scandinavia_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Greece_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Japan_God_Selection').style.display = '';
		playerX = 520;
		playerY = 350;
		
	}else if(player.country == 'china'){
		
		parent.character.document.getElementById('Egypt_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Japan_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Scandinavia_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Greece_God_Selection').style.display = 'none';
		parent.character.document.getElementById('China_God_Selection').style.display = '';
		playerX = 160;
		playerY = 680;
		
	}else if(player.country == 'egypt'){
		
		parent.character.document.getElementById('China_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Japan_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Scandinavia_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Greece_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Egypt_God_Selection').style.display = '';
		playerX = 690;
		playerY = 617;
		
	}else if(player.country == 'scandinavia'){
		
		parent.character.document.getElementById('Egypt_God_Selection').style.display = 'none';
		parent.character.document.getElementById('China_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Japan_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Greece_God_Selection').style.display = 'none';
		parent.character.document.getElementById('Scandinavia_God_Selection').style.display = '';
		playerX = 740;
		playerY = 220;
		
	}
}

function chosen_god(cgod) {
	player.god = cgod;
	parent.character.document.getElementById('Country_Selection').style.display = 'none';
	parent.character.document.getElementById('God_Selection').style.display = 'none';
	parent.character.document.getElementById('Class_Selection').style.display = '';	 
}

function create_Character(e){
	e.preventDefault();
	initMap();
	player.name = parent.character.document.getElementById('form_name').value;
	
	if (parent.character.document.getElementById('opt_warrior').checked) {
		
		player.classAttribute.Class = parent.character.document.getElementById('opt_warrior').value;
		
		player.classAttribute.attack.staminaAttack = skillsSet.warrior[0].name;
		player.classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		player.classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		var item_name = 'Warrior\'s Weapon';// Καρανικόλας 100362082
		var inventoryOptions = parent.inventory.document.getElementById("Inventory");
		var option = parent.profile.document.createElement("option");
		option.text = item_name;
		inventoryOptions.add(option);
		
		player.classAttribute.HP = 180;
		player.classAttribute.stamina = 200;
		player.classAttribute.mana = 100;
		
	}else if (parent.character.document.getElementById('opt_sorcerer').checked) {
		
		player.classAttribute.Class = parent.character.document.getElementById('opt_sorcerer').value;
		
		player.classAttribute.attack.staminaAttack = skillsSet.warrior[0].name;
		player.classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		player.classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		var item_name = 'Sorcerer\'s Weapon';// Καρανικόλας 100362082
		var inventoryOptions = parent.inventory.document.getElementById("Inventory");
		var option = parent.profile.document.createElement("option");
		option.text = item_name;
		inventoryOptions.add(option);
				
		player.classAttribute.HP = 150;
		player.classAttribute.stamina = 150;
		player.classAttribute.mana = 250;
		
	}else if (parent.character.document.getElementById('opt_brawler').checked) {
		
		player.classAttribute.Class = parent.character.document.getElementById('opt_brawler').value;
		
		player.classAttribute.attack.staminaAttack = skillsSet.brawler[0].name;
		player.classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		player.classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		var item_name = 'Brawler\'s Weapon';// Καρανικόλας 100362082
		var inventoryOptions = parent.inventory.document.getElementById("Inventory");
		var option = parent.profile.document.createElement("option");
		option.text = item_name;
		inventoryOptions.add(option);
		
		player.classAttribute.HP = 200;
		player.classAttribute.stamina = 200;
		player.classAttribute.mana = 100;
		
	}else if (parent.character.document.getElementById('opt_healer').checked) {
		
		player.classAttribute.Class = parent.character.document.getElementById('opt_healer').value;
		
		player.classAttribute.attack.staminaAttack = skillsSet.brawler[0].name;
		player.classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		player.classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		var item_name = 'Healer\'s Weapon';// Καρανικόλας 100362082
		var inventoryOptions = parent.inventory.document.getElementById("Inventory");
		var option = parent.profile.document.createElement("option");
		option.text = item_name;
		inventoryOptions.add(option);
		
		player.classAttribute.HP = 280;
		player.classAttribute.stamina = 150;
		player.classAttribute.mana = 200;
		
	}
	
	player.speed = 10;
	player.strength = 10;
	player.willPower = 10;
	player.intelligence = 10;
	player.level = 1;
	
	player.weaponryOffence = 50;
	player.brawlerOffence = 10;
	player.sorcererOffence = 10;
	player.brawlerDefence = 10;
	player.sorcererDefence = 10;
	player.weaponryDefence = 40;
	
	player.weaponEquip = true;
	
	player.experiencePoints = 0;
	
	current_player_health = player.classAttribute.HP;
	current_player_stamina = player.classAttribute.stamina;
	current_player_mana = player.classAttribute.mana;
	show_Profile();
}

function show_Profile(){// Καρανικόλας 100362082
	parent.start.document.getElementById('Start_of_Game_field').style.display = 'none';
	parent.character.document.getElementById('Character_creation_field').style.display = 'none';
	parent.map.document.getElementById('Map_field').style.display = 'none';
	parent.battle.document.getElementById('Battle_field').style.display = 'none';
	parent.shop.document.getElementById('Shop_items').style.display = 'none';
	parent.profile.document.getElementById('Profile_field').style.display = '';
	parent.document.getElementById('game_frames').cols = '10%,0%,0%,90%,0%,0%,0%';
	refillBars();
}

function show_Attack_Manager(){
    parent.profile.document.getElementById('attack_manager_field').style.display = '';
}

var skill_list_option = 0;

function addSkilltoList(skillname) {
    var v = skillname;
    addSkill = new Option(v, v);
    parent.profile.document.skillList.lstValue.options[skill_list_option++] = addSkill;
    return true;
}
function load_next_Form(e,form_id_prev,form_id_next){
    e.preventDefault();
    parent.profile.document.getElementById(form_id_prev).style.display = 'none';
    if(form_id_next == 'set_attacks'){
        
        if(parent.profile.document.getElementById('opt_stamina').checked){
            parent.profile.document.getElementById('opt_stamina').checked = false;
            form_id_next = 'choose_w_b';
            
        }else if(parent.profile.document.getElementById('opt_mana').checked){
            parent.profile.document.getElementById('opt_mana').checked = false;
            form_id_next = 'set_attacks';
            attack_type = 'mana';
            for(k = 0; k < player.level; k++){
                if(k < 5){
                    addSkilltoList(skillsSet.sorcerer[k].name);
                }
            }
            skill_list_option = 0;
            
        }else if(parent.profile.document.getElementById('opt_heal').checked){
            parent.profile.document.getElementById('opt_heal').checked = false;
            form_id_next = 'set_attacks';
            attack_type = 'heal';
            for(k = 0; k < player.level; k++){
                if(k < 5){
                    addSkilltoList(skillsSet.healer[k].name);
                }
            }
            skill_list_option = 0;
            
        }else if(parent.profile.document.getElementById('opt_warrior').checked){
            parent.profile.document.getElementById('opt_warrior').checked = false;
            form_id_next = 'set_attacks';
            attack_type = 'stamina';
            for(k = 0; k < player.level; k++){
                if(k < 5){
                    addSkilltoList(skillsSet.warrior[k].name);
                }
            }
            skill_list_option = 0;
            
        }else if(parent.profile.document.getElementById('opt_brawler').checked){
            parent.profile.document.getElementById('opt_brawler').checked = false;
            form_id_next = 'set_attacks';
            attack_type = 'stamina';
            for(k = 0; k < player.level; k++){
                if(k < 5){
                    addSkilltoList(skillsSet.brawler[k].name);
                }
            }
            skill_list_option = 0;
            
        }
    }
    if(form_id_next == 'set_attacks'){
        parent.profile.document.getElementById('confirm_button').style.display = '';
    }
    parent.profile.document.getElementById(form_id_next).style.display = '';
}

var attack_type = '';
function attack_Manager(){
    var new_attack = parent.profile.document.getElementById('skills').selectedIndex;
    var skillTree = parent.profile.document.getElementById('skills').options;
    
    if(new_attack){
        if(attack_type == 'mana'){
            player.classAttribute.attack.manaAttack = skillTree[new_attack].text;
        }else if(attack_type == 'stamina'){
            player.classAttribute.attack.staminaAttack = skillTree[new_attack].text;
        }else if(attack_type == 'heal'){
            player.classAttribute.attack.healAttack =skillTree[new_attack].text;
        }
    }
}

function more_health(){
	current_player_health += 20;
	refillBars();
}
var h_seconds = 60;
var s_seconds = 60;
var m_seconds = 60;

function refillBars() {
	var ph = (200*current_player_health)/player.classAttribute.HP ;
	var ps = (200*current_player_stamina)/player.classAttribute.stamina ;
	var pm = (200*current_player_mana)/player.classAttribute.mana ;
	
	if( current_player_stamina == player.classAttribute.stamina){
		parent.profile.document.getElementById("s_countdown").innerHTML = '&#8734;';
	}
	if( current_player_health == player.classAttribute.HP){
		parent.profile.document.getElementById("h_countdown").innerHTML = '&#8734;';
	}
	if( current_player_mana == player.classAttribute.mana){
		parent.profile.document.getElementById("m_countdown").innerHTML = '&#8734;';
	}
	
    var h_minutes = Math.round((h_seconds - 30)/60);
    var h_remainingSeconds = h_seconds % 60;
    if (h_remainingSeconds < 10) {
        h_remainingSeconds = "0" + h_remainingSeconds;  
    }
	var h_countdown = parent.profile.document.getElementById("Profile_field").style.display;
	var h_full = parent.profile.document.getElementById("h_countdown").style.display;
	if (h_countdown  != "none" && h_full != "none") {
		parent.profile.document.getElementById("h_countdown").innerHTML = h_minutes + ":" + h_remainingSeconds;
	}
    if (h_seconds == 0) {
		if( current_player_health < player.classAttribute.HP){
			current_player_health +=  20;
			if(current_player_health > player.classAttribute.HP){
				current_player_health = player.classAttribute.HP;
			}
		}
		if (h_countdown != "none"){
			parent.profile.document.getElementById('profile_health_bar').setAttribute("width", ph + "px");
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
	var s_countdown = parent.profile.document.getElementById("Profile_field").style.display;
	var s_full = parent.profile.document.getElementById("s_countdown").style.display;
	if (s_countdown  != "none" && s_full != "none") {
		parent.profile.document.getElementById("s_countdown").innerHTML = s_minutes + ":" + s_remainingSeconds;
	}
    if (s_seconds == 0) {
		if( current_player_stamina < player.classAttribute.stamina){
			current_player_stamina +=  10;
			if(current_player_stamina > player.classAttribute.stamina){
				current_player_stamina = player.classAttribute.stamina;
			}
		}
		if (s_countdown != "none"){
			parent.profile.document.getElementById('profile_stamina_bar').setAttribute("width", ps + "px");
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
	var m_countdown = parent.profile.document.getElementById("Profile_field").style.display;
	var m_full = parent.profile.document.getElementById("m_countdown").style.display;
	if (m_countdown  != "none" && m_full != "none") {
		parent.profile.document.getElementById("m_countdown").innerHTML = m_minutes + ":" + m_remainingSeconds;
	}
    if (m_seconds == 0) {
		if( current_player_mana < player.classAttribute.mana){
			current_player_mana +=  10;
			if(current_player_mana > player.classAttribute.mana){
				current_player_mana = player.classAttribute.mana;
			}
		}
		if (m_countdown != "none"){
			parent.profile.document.getElementById('profile_mana_bar').setAttribute("width", pm + "px");
		}
		m_seconds = 60;
    } else {
        m_seconds--;
    }
	if( current_player_stamina == player.classAttribute.stamina){
		parent.profile.document.getElementById("s_countdown").innerHTML = '&#8734;';
	}
	if( current_player_health == player.classAttribute.HP){
		parent.profile.document.getElementById("h_countdown").innerHTML = '&#8734;';
	}
	if( current_player_mana == player.classAttribute.mana){
		parent.profile.document.getElementById("m_countdown").innerHTML = '&#8734;';
	}
}

var countdownBars = setInterval('refillBars()', 1000);

//BATTLE
// Καρανικόλας 100362082
function show_Battle(){
	parent.profile.document.getElementById("Profile_field").style.display = "none";
	parent.map.document.getElementById("Map_field").style.display = "none";
	initBattle();
	parent.battle.document.body.style.backgroundColor = "#AAAAAA";
	parent.battle.document.getElementById("Battle_field").style.display = "";
	parent.document.getElementById('game_frames').cols = '10%,0%,0%,0%,0%,90%,0%';
}
function initBattle(){// Καρανικόλας 100362082
	for(i = 0; i < 4; i++){
		enemylife[i] = 'dead';
	}
    run_attempt = false;
	battle = "not over";
	round_Moves = 10;
	counter = 1;
	experience = 0;
	seconds = 60;
	
	log = "";
	parent.battle.document.getElementById('battle_log').innerHTML = log; 
	parent.battle.document.getElementById("turn").innerHTML = "Round(s): " + counter;
	
	parent.battle.document.getElementById("battle_buttons").style.visibility = "visible";
	
	parent.battle.document.getElementById("next_Phase_button").style.visibility = "hidden";
	
	parent.battle.document.getElementById('level_g').style.visibility = "hidden";
	
	parent.battle.document.getElementById('player_info').style.visibility = "visible";
	parent.battle.document.getElementById("current_player_stamina_bar").style.visibility = "visible";
	parent.battle.document.getElementById("current_player_health_bar").style.visibility = "visible";
	parent.battle.document.getElementById("current_player_mana_bar").style.visibility = "visible";
			
	rEnemies = Math.floor((Math.random() * 4) + 1);
	//random για τον καθενα
	for(i = 0; i < rEnemies; i++){
		var rCountry = Math.floor((Math.random() * 5) + 1);
		var rClass = Math.floor((Math.random() * 4) + 1);
		var rGod = Math.floor((Math.random() * 2) + 1);
		
		if(rClass == 1){
			enemyCount[i].classAttribute.Class = 'warrior';
		}else if(rClass == 2){
			enemyCount[i].classAttribute.Class = 'sorcerer';
		}else if(rClass == 3){
			enemyCount[i].classAttribute.Class = 'brawler';
		}else if(rClass == 4){
			enemyCount[i].classAttribute.Class = 'healer';
		}
		if(rCountry == 1){
			enemyCount[i].country = 'greece';
			if(rGod == 1){
				enemyCount[i].god = 'Hades';
			}else if(rGod == 2){
				enemyCount[i].god = 'Zeus';
			}
		}else if(rCountry == 2){
			enemyCount[i].country = 'japan';
			if(rGod == 1){
				enemyCount[i].god = 'Amaterasu';
			}else if(rGod == 2){
				enemyCount[i].god = 'Jashin';
			}
		}else if(rCountry == 3){
			enemyCount[i].country = 'egypt';
			if(rGod == 1){
				enemyCount[i].god = 'Rah';
			}else if(rGod == 2){
				enemyCount[i].god = 'Seth';
			}
		}else if(rCountry == 4){
			enemyCount[i].country = 'china';
			if(rGod == 1){
				enemyCount[i].god = 'Lei King';
			}else if(rGod == 2){
				enemyCount[i].god = 'Shui Khan';
			}
		}else if(rCountry == 5){
			enemyCount[i].country = 'scandinavia';
			if(rGod == 1){
				enemyCount[i].god = 'Thor';
			}else if(rGod == 2){
				enemyCount[i].god = 'Odin';
			}
		}
		
		create_enemy(i);
		var id_shown = "enemy"+i+"_info";
		parent.battle.document.getElementById(id_shown).style.visibility = "visible";
		id_shown = "enemy"+i;
		parent.battle.document.getElementById(id_shown).style.visibility = "visible";
		id_shown = "current_enemy"+i+"_health_bar";
		parent.battle.document.getElementById(id_shown).style.visibility = "visible";
		enemylife[i] = "alive";
	}
	for(i = 5; i >= rEnemies; i--){
		if(i <= 3){
			var id_shown = "enemy"+i+"_info";
			parent.battle.document.getElementById(id_shown).style.visibility = "hidden";
			id_shown = "enemy"+i;
			parent.battle.document.getElementById(id_shown).style.visibility = "hidden";
			id_shown = "current_enemy"+i+"_health_bar";
			parent.battle.document.getElementById(id_shown).style.visibility = "hidden";
			enemylife[i] = "dead";
		}
	}
	stats_R();
}
var ex_level = "";
var experience = 0;
function exp_Points(){//ΟΧΙ
	experience = experience + (ex_level*67/* επι  bonus*/);
}

function level_up(){//ΟΧΙ
	
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
	parent.battle.document.getElementById('level_g').innerHTML = "<br>Experience gained: " + experience
	
	if(player.experiencePoints >= lv_x * 1500){
		while(player.experiencePoints >= lv_x * 1500){
			player.level ++;
			experience = 0;
			player.skillpoint ++;
			player.experiencePoints -= lv_x * 1500;
			parent.battle.document.getElementById('level_g').innerHTML += "<br>Level: " + player.level;
		}
	}else{
		parent.battle.document.getElementById('level_g').innerHTML += "<br>Level: " + player.level;
	}
	parent.battle.document.getElementById('level_g').innerHTML += "<br>" + "Experience: " + player.experiencePoints + "/" + lv_x * 1500+'<br>Gold: '+ gold;
	parent.battle.document.getElementById('level_g').style.visibility = "visible";
}
function create_enemy(i){// Καρανικόλας 100362082
	if (enemyCount[i].classAttribute.Class == 'warrior') {
		
		enemyCount[i].classAttribute.attack.staminaAttack = skillsSet.warrior[0].name;
		enemyCount[i].classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		enemyCount[i].classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		enemyCount[i].classAttribute.HP = 180;
		enemyCount[i].classAttribute.stamina = 200;
		enemyCount[i].classAttribute.mana = 100;
		
	}else if (enemyCount[i].classAttribute.Class == 'sorcerer') {
		
		enemyCount[i].classAttribute.attack.staminaAttack = skillsSet.warrior[0].name;
		enemyCount[i].classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		enemyCount[i].classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		enemyCount[i].classAttribute.HP = 150;
		enemyCount[i].classAttribute.stamina = 150;
		enemyCount[i].classAttribute.mana = 250;
		
	}else if (enemyCount[i].classAttribute.Class == 'brawler') {
		
		enemyCount[i].classAttribute.attack.staminaAttack = skillsSet.brawler[0].name;
		enemyCount[i].classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		enemyCount[i].classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		enemyCount[i].classAttribute.HP = 200;
		enemyCount[i].classAttribute.stamina = 200;
		enemyCount[i].classAttribute.mana = 100;
		
	}else if (enemyCount[i].classAttribute.Class == 'healer') {
		
		enemyCount[i].classAttribute.attack.staminaAttack = skillsSet.brawler[0].name;
		enemyCount[i].classAttribute.attack.manaAttack = skillsSet.sorcerer[0].name;
		enemyCount[i].classAttribute.attack.healAttack = skillsSet.healer[0].name;
		
		enemyCount[i].classAttribute.HP = 280;
		enemyCount[i].classAttribute.stamina = 150;
		enemyCount[i].classAttribute.mana = 200;
		
	}
	
	enemyCount[i].speed = 10;
	enemyCount[i].strength = 10;
	enemyCount[i].willPower = 10;
	enemyCount[i].intelligence = 10;
	enemyCount[i].level = 1;
	
	enemyCount[i].weaponryOffence = 10;
	enemyCount[i].brawlerOffence = 10;
	enemyCount[i].sorcererOffence = 10;
	enemyCount[i].brawlerDefence = 10;
	enemyCount[i].sorcererDefence = 10;
	enemyCount[i].weaponryDefence = 10;
	
	original_enemy_Att[i] = enemyCount[i].classAttribute.HP;
}

var counter = 1;//Rounds
var round_Moves = 10;
var battle = "not over";

var rEnemies = 0;

var current_player_health = 0;
var current_player_stamina = 0;
var current_player_mana = 0;

var enemylife = [];
for(i = 0; i < 4; i++){
	enemylife[i] = 'dead';
}

var enemyCount = [];
for(i = 0; i < 4; i++){
	enemyCount[i] = new character('enemy',0,0,0,0,0,0,0,0,0,0,0,0,0,'','',0,true);
}

var original_enemy_Att = [];

var choice = [];
for(i = 0; i < 4; i++){
	choice[i] = false;
}

var attacked = [];

var player_turn = true;
function Test(chosen_attack){//ΟΧΙ
	var chosen_attack_cost = 0;
	var chosen_attack_stamina_or_mana = 0;
	var chosen_attack_type = '';
	var chosen_attack_damage = 0;
	for(i = 0; i < 5; i++){
		if(chosen_attack == skillsSet.warrior[i].name){
			chosen_attack_cost = skillsSet.warrior[i].move_cost;
			chosen_attack_stamina_or_mana = skillsSet.warrior[i].s_m_cost;
			chosen_attack_type = skillsSet.warrior[i].type;
			chosen_attack_damage = skillsSet.warrior[i].attack;
		}
	}
	if(chosen_attack_type == ''){
		for(i = 0; i < 5; i++){
			if(chosen_attack == skillsSet.healer[i].name){
				chosen_attack_cost = skillsSet.healer[i].move_cost;
				chosen_attack_stamina_or_mana = skillsSet.healer[i].s_m_cost;
				chosen_attack_type = skillsSet.healer[i].type;
				chosen_attack_damage = skillsSet.healer[i].attack;
			}
		}
	}
	if(chosen_attack_type == ''){
		for(i = 0; i < 5; i++){
			if(chosen_attack == skillsSet.sorcerer[i].name){
				chosen_attack_cost = skillsSet.sorcerer[i].move_cost;
				chosen_attack_stamina_or_mana = skillsSet.sorcerer[i].s_m_cost;
				chosen_attack_type = skillsSet.sorcerer[i].type;
				chosen_attack_damage = skillsSet.sorcerer[i].attack;
			}
		}
	}
	if(chosen_attack_type == ''){
		for(i = 0; i < 5; i++){
			if(chosen_attack == skillsSet.brawler[i].name){
				chosen_attack_cost = skillsSet.brawler[i].move_cost;
				chosen_attack_stamina_or_mana = skillsSet.brawler[i].s_m_cost;
				chosen_attack_type = skillsSet.brawler[i].type;
				chosen_attack_damage = skillsSet.brawler[i].attack;
			}
		}
	}
	if(player_turn == false){
		this.chosen_attack_cost = chosen_attack_cost;
		this.chosen_attack_stamina_or_mana = chosen_attack_stamina_or_mana;
		this.chosen_attack_type = chosen_attack_type;
		this.chosen_attack_damage = chosen_attack_damage;
	}else{
		if(chosen_attack_type == 'healer'){
			playerHeal(chosen_attack,chosen_attack_cost,chosen_attack_stamina_or_mana,chosen_attack_type,chosen_attack_damage);
		}else{
			damage_PlayerVsEnemy(chosen_attack,chosen_attack_cost,chosen_attack_stamina_or_mana,chosen_attack_type,chosen_attack_damage);
		}
	}
}
//ΟΧΙ
function playerHeal(chosen_attack,chosen_attack_cost,chosen_attack_stamina_or_mana,chosen_attack_type,chosen_attack_damage){
	var bool = false;
	round_Moves -= chosen_attack_cost;
	current_player_mana -= chosen_attack_stamina_or_mana;
	
	if(current_player_mana < 0 || round_Moves < 0){
		alert("End Turn")
		round_Moves += chosen_attack_cost;
		current_player_mana += chosen_attack_stamina_or_mana;
	}else{
		current_player_health += chosen_attack_damage;
	}
	stats_R();
}
var last_Attack = 0;
// Καρανικόλας 100362082
function damage_PlayerVsEnemy(chosen_attack,chosen_attack_cost,chosen_attack_stamina_or_mana,chosen_attack_type,chosen_attack_damage){
	var bool = false;
	var ch_counter = 0;
    var round_damage;
    
	for(i = 0; i < rEnemies; i++){
		if (enemyCount[i].classAttribute.HP > 0){
			choice[i] = parent.battle.document.getElementById("enemy"+i).checked;
		}
		if (choice[i] != false){
			ch_counter++;
			round_Moves -= chosen_attack_cost;
			if (chosen_attack_type == 'warrior' || chosen_attack_type == 'brawler'){
				current_player_stamina -= chosen_attack_stamina_or_mana;
			}else if(chosen_attack_type == 'sorcerer'){
				current_player_mana -= chosen_attack_stamina_or_mana;
			}
		}
	}
	if (chosen_attack_type == 'warrior' || chosen_attack_type == 'brawler'){
		if(current_player_stamina < 0 || round_Moves < 0){
			alert("End Turn")
			for(i = 0; i < ch_counter; i++){
				round_Moves += chosen_attack_cost;
				current_player_stamina += chosen_attack_stamina_or_mana;
			}
		}else{
			for(i = 0; i < ch_counter; i++){
				current_player_stamina += chosen_attack_stamina_or_mana;
				round_Moves += chosen_attack_cost;
			}
			bool = true;
		}
	}else if(chosen_attack_type == 'sorcerer'){
		if(current_player_mana < 0 || round_Moves < 0){
			alert("End Turn")
			for(i = 0; i < ch_counter; i++){
				round_Moves += chosen_attack_cost;
				current_player_mana += chosen_attack_stamina_or_mana;
			}
		}else{
			for(i = 0; i < ch_counter; i++){
				current_player_mana += chosen_attack_stamina_or_mana;
				round_Moves += chosen_attack_cost;
			}
			bool = true;
		}
	}
	if (choice[0] == false && choice[1] == false  && choice[2] == false && choice[3] == false){
		alert("Choose an enemy to attack.");
	}
	
	if (bool == true){
			for(i = 0; i < rEnemies; i++){
				if (choice[i] != false){
					if (chosen_attack_type == 'warrior' || chosen_attack_type == 'brawler'){
						current_player_stamina -= chosen_attack_stamina_or_mana;
					}else if(chosen_attack_type == 'sorcerer'){
						current_player_mana -= chosen_attack_stamina_or_mana;
					}
					round_damage = damage_Calc(chosen_attack_type,chosen_attack_damage,enemyCount[i],player); 
					enemyCount[i].classAttribute.HP -= round_damage;
                    damage_dealt += round_damage;
					last_Attack = round_damage;
					round_Moves -= chosen_attack_cost;
				}
			}
			for(i = 0; i < rEnemies; i++){
				if(enemyCount[i].classAttribute.HP <= 0 && enemylife[i] != 'dead'){
					parent.battle.document.getElementById("enemy"+i+"_info").style.visibility = "hidden";
					parent.battle.document.getElementById("enemy"+i).checked = false;
					parent.battle.document.getElementById("enemy"+i).style.visibility = "hidden";
					parent.battle.document.getElementById("current_enemy"+i+"_health_bar").style.visibility = "hidden";
					enemylife[i] = "dead";
					choice[i] = false;
					ex_level = enemyCount[i].level;
					exp_Points();
				}
			}
			if(enemyCount[0].classAttribute.HP <= 0 && enemyCount[1].classAttribute.HP <= 0 && enemyCount[2].classAttribute.HP <= 0 && enemyCount[3].classAttribute.HP <= 0){
				counter++;
				end_Round_log();
				alert("You won. Experience: " + experience);
				battle = "over";
                gold = 0.5 * experience;
				current_player_mana +=  20;
				current_player_stamina +=  25;
				current_player_health +=  35;
				parent.battle.document.getElementById('player_info').style.visibility = "hidden";
				parent.battle.document.getElementById("current_player_stamina_bar").style.visibility = "hidden";
				parent.battle.document.getElementById("current_player_health_bar").style.visibility = "hidden";
				parent.battle.document.getElementById("current_player_mana_bar").style.visibility = "hidden";
				parent.battle.document.getElementById("battle_buttons").style.visibility = "hidden";
				parent.battle.document.getElementById("next_Phase_button").style.visibility = "visible";
				level_up();
			}
	}
	stats_R()
}

var gold;
//ΟΧΙ
function damage_Calc(chosen_attack_type,chosen_attack_damage,attack_target,attacker){
        var damage = 0;
        
        if (attacker.classAttribute.Class == 'warrior'){
            
            if(chosen_attack_type == 'brawler'){
                
                chosen_attack_damage *= 0.75; 
                
            }else if(chosen_attack_type != 'warrior'){
                
                chosen_attack_damage *= 0.55; 
                
            }
            
            if(attack_target.classAttribute.Class == 'healer' || attack_target.classAttribute.Class == 'sorcerer'){
                
                chosen_attack_damage *= 1.2;
                
            }
            
             damage -= (attack_target.brawlerDefence * attack_target.level);
             
        }else if (attacker.classAttribute.Class == 'brawler'){
            
            if(chosen_attack_type == 'warrior'){
                
                chosen_attack_damage *= 0.65; 
                
            }else if(chosen_attack_type != 'brawler'){
                
                chosen_attack_damage *= 0.45; 
                
            }
            
            if(attack_target.classAttribute.Class == 'healer' || attack_target.classAttribute.Class == 'sorcerer'){
                
                chosen_attack_damage *= 1.05;
                
            }
            
            damage -= (attack_target.brawlerDefence * attack_target.level);
            
        }else if (attacker.classAttribute.Class == 'healer'){
            
            if(chosen_attack_type == 'sorcerer'){
                
                chosen_attack_damage *= 0.65; 
                
            }else if(chosen_attack_type != 'healer'){
                
                chosen_attack_damage *= 0.40; 
                
            }
            
            if(attack_target.classAttribute.Class == 'warrior' || attack_target.classAttribute.Class == 'brawler'){
                
                chosen_attack_damage *= 1.1;
                
            }
            
            damage -= (attack_target.sorcererDefence * attack_target.level);
            
        }else if (attacker.classAttribute.Class == 'sorcerer'){
            
            if(chosen_attack_type == 'healer'){
                
                chosen_attack_damage *= 0.85; 
                
            }else if(chosen_attack_type != 'sorcerer'){
                
                chosen_attack_damage *= 0.75; 
                
            }
            
            if(attack_target.classAttribute.Class == 'warrior' || attack_target.classAttribute.Class == 'brawler'){
                
                chosen_attack_damage *= 1.3;
                
            }
            
            damage -= (attack_target.sorcererDefence * attack_target.level);
            
        }
        
        damage += chosen_attack_damage;
        damage += (attacker.weaponryOffence * attacker.level);
        damage -= (attack_target.weaponryDefence * attack_target.level);
        damage += (attacker.strength * attacker.level);
        damage -= (attack_target.defence * attack_target.level);
        
        if(attacker.weaponEquip == false){
            damage = 0;
        }
        return damage;
}

var log = "";
var damage_dealt = 0;

function end_Round_log(){// Καρανικόλας 100362082
	log += "<br>Round: " + (counter-1) + "<br>Damage: " + damage_dealt;
	parent.battle.document.getElementById('battle_log').innerHTML = log; 
}
var eAttack = 0;
function next_Turn(){// Καρανικόλας 100362082
    run_attempt = false;
	player_turn = false;
	for(z = 0; z < rEnemies; z++){
		attacked[z] = false;
	}
	eAttack = 0;
	counter++;
	parent.battle.document.getElementById("turn").innerHTML = "Round(s): " + counter;
	
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
	//enemies attack
	for(k = 0; k < rEnemies; k++){
		attacked[k] = true;
		if(enemylife[k] == 'alive'){
			var tempDamage;
			if (enemyCount[k].classAttribute.Class == 'warrior' || enemyCount[k].classAttribute.Class == 'brawler' && enemyCount[k].classAttribute.stamina > 0){
				var enemyAttack = new Test(enemyCount[k].classAttribute.attack.manaAttack);
				if(enemyCount[k].classAttribute.stamina >= enemyAttack.chosen_attack_stamina_or_mana){
					eAttack = 1;
					console.log(eAttack);
				}else{
					eAttack = 2;
				}
			}else{
				if(enemyCount[k].classAttribute.mana > 0){
					var enemyAttack = new Test(enemyCount[k].classAttribute.attack.staminaAttack);
					if(enemyCount[k].classAttribute.mana >= enemyAttack.chosen_attack_stamina_or_mana){
						eAttack = 2;
						console.log(eAttack);
					}else{
						eAttack = 1;
					}
				}
			}
			if (enemyCount[k].classAttribute.mana > 0){
				var enemyHeal = new Test(enemyCount[k].classAttribute.attack.healAttack);
				tempHealing = damage_Calc(enemyHeal.chosen_attack_type,enemyHeal.chosen_attack_damage,enemyCount[k],enemyCount[k]);
				heal_Target = healTarget(tempHealing,k,enemyHeal);
			}
			if(eAttack == 1 ){
				tempDamage = damage_Calc(enemyAttack.chosen_attack_type,enemyAttack.chosen_attack_damage,player,enemyCount[k]);
				enemyCount[k].classAttribute.stamina -= enemyAttack.chosen_attack_stamina_or_mana;
				current_player_health -= tempDamage;
				console.log(current_player_health);
				
			}else if(eAttack == 2){
				tempDamage = damage_Calc(enemyAttack.chosen_attack_type,enemyAttack.chosen_attack_damage,player,enemyCount[k]);
				enemyCount[k].classAttribute.mana -= enemyAttack.chosen_attack_stamina_or_mana;
				current_player_health -= tempDamage;
				console.log(current_player_health);
				
			}else if(eAttack == 3){
				enemyCount[k].classAttribute.mana -= enemyHeal.chosen_attack_stamina_or_mana;
				heal_Target.classAttribute.HP += tempHealing;
				console.log(heal_Target.classAttribute.HP);
			}
			if(current_player_health <= 0){
				current_player_health = 0;
				alert('You Lost.');
				battle = "over";
				parent.battle.document.getElementById('player_info').style.visibility = "hidden";
				parent.battle.document.getElementById("current_player_stamina_bar").style.visibility = "hidden";
				parent.battle.document.getElementById("current_player_health_bar").style.visibility = "hidden";
				parent.battle.document.getElementById("current_player_mana_bar").style.visibility = "hidden";
				parent.battle.document.getElementById("battle_buttons").style.visibility = "hidden";
				
				for(i = 0; i < rEnemies; i++){
					parent.battle.document.getElementById("enemy"+i+"_info").style.visibility = "hidden";
					parent.battle.document.getElementById("enemy"+i).style.visibility = "hidden";
					parent.battle.document.getElementById("current_enemy"+i+"_health_bar").style.visibility = "hidden";
					enemylife[i] = 'dead';
				}
				
				parent.battle.document.getElementById("next_Phase_button").style.visibility = "visible";
				level_up();
			}
		}
	}
	stats_R();
	player_turn = true;
	mi_used = false;
}

function healTarget(tempHealing,k,enemyHeal){//Καρανικολας 100362082
	var lastToAttack = true;
	for(m = 0; m < rEnemies; m++){
		if(!attacked[m]){
			lastToAttack = false;
		}
	}
	if (lastToAttack){
		var tempHealth = enemyCount[k].classAttribute.HP + tempHealing;
		if(current_player_health > enemyHeal.chosen_attack_damage && enemyCount[k].classAttribute.HP <= last_Attack && tempHealth > last_Attack && enemyCount[k].classAttribute.mana >= enemyHeal.chosen_attack_stamina_or_mana){
			eAttack = 3;
			console.log(eAttack);
			console.log(enemyCount[k]);
			return enemyCount[k];
		}
		else{
			for(y = 0; y < rEnemies; y++){
				var tempHealth = enemyCount[y].classAttribute.HP + tempHealing;
				if(current_player_health > enemyHeal.chosen_attack_damage && enemyCount[y].classAttribute.HP <= last_Attack && tempHealth > last_Attack && enemyCount[k].classAttribute.mana >= enemyHeal.chosen_attack_stamina_or_mana){
					eAttack = 3;
					console.log(enemyCount[y]);
					return enemyCount[y];
				}
			}
		}
	}
}

function stats_R(){//ΟΧΙ
	var ph = (200*current_player_health)/player.classAttribute.HP;
	var ps = (200*current_player_stamina)/player.classAttribute.stamina;
	var pm = (200*current_player_mana)/player.classAttribute.mana;
	parent.battle.document.getElementById('current_player_health_bar').setAttribute("width", ph + "px");
	parent.battle.document.getElementById('current_player_stamina_bar').setAttribute("width", ps + "px");
	parent.battle.document.getElementById('current_player_mana_bar').setAttribute("width", pm + "px");
	
	for(i = 0; i < rEnemies; i++){
		if(enemylife[i] != "dead"){
			var eh = (200*enemyCount[i].classAttribute.HP)/original_enemy_Att[i];
			var id_shown = "current_enemy"+i+"_health_bar";
			parent.battle.document.getElementById(id_shown).setAttribute("width", eh + "px");
		}else{
			var eh = 0 ;
			var id_shown = "current_enemy"+i+"_health_bar";
			parent.battle.document.getElementById(id_shown).setAttribute("width", eh + "px");
		}
	}
	
	for(i = 0; i < rEnemies; i++){
		var estats='<img id= "enemy'+i+'_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",enemyCount[i].name," Level: ",enemyCount[i].level," Class: ",enemyCount[i].classAttribute.Class);
		parent.battle.document.getElementById('enemy'+i+'_info').innerHTML=estats;
	}
	var pstats='<img id= "player_image"src="default_avatar.gif" alt="default avatar" style="width:100px;height:100px;">'.concat("<br>",player["name"]," Level: ",player["level"]," Class: ",player.classAttribute.Class," Moves: ",round_Moves);
	parent.battle.document.getElementById('player_info').innerHTML=pstats;
}

var seconds = 60;
function secondPassed() {//ΟΧΙ
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
	var countdown = parent.battle.document.getElementById("Battle_field").style.display;
	if (countdown  != "none") {
		parent.battle.document.getElementById("countdown").innerHTML = minutes + ":" + remainingSeconds;
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
var run_attempt = false;
function run_from_Battle(){//ΟΧΙ
    var run = 1;
    run *= player.speed;
    
    if(current_player_stamina >= 40 && run_attempt == false){
        if(run > 9999){
            var x = Math.floor((Math.random() * 2) + 1);//50%
            if(x == 1){
                alert("You fled");
                battle = "over";
                next_Phase() 
            }
        }else if(run > 7999){
            var x = Math.floor((Math.random() * 5) + 1);//40%
            if(x == 4 || x == 5){
                alert("You fled");
                battle = "over";
                next_Phase()
            }
        }else if(run > 5499){
            var x = Math.floor((Math.random() * 10) + 1);//30%
            if(x == 4 || x == 5 || x == 8){
                alert("You fled");
                battle = "over";
                next_Phase()
            }
        }else if(run > 1999){
            var x = Math.floor((Math.random() * 4) + 1);//25%
            if(x == 1){
                alert("You fled");
                battle = "over";
                next_Phase()
            }
        }else if(run > 999){
            var x = Math.floor((Math.random() * 5) + 1);//20%
            if(x == 3){
                alert("You fled");
                battle = "over";
                next_Phase()
            }
        }else if(run > 499){
            var x = Math.floor((Math.random() * 20) + 1);//15%
            if(x == 4 || x == 5 || x == 8){
                alert("You fled");
                battle = "over";
                next_Phase()
            }
        }else if(run > 99){
            var x = Math.floor((Math.random() * 10) + 1);//10%
            if(x == 1){
                alert("You fled");
                battle = "over";
                next_Phase()
            }
        }else{
            var x = Math.floor((Math.random() * 20) + 1);//5%
            if(x == 5){
                alert("You fled");
                battle = "over";
                next_Phase()
            }
        }
        run_attempt = true;
    }
}

function next_Phase(){//Καρανικόλας 100362082
	for(i = 0; i < 4; i++){
		var id_shown = "enemy"+i+"_info";
		parent.battle.document.getElementById(id_shown).style.visibility = "hidden";
		id_shown = "enemy"+i;
		parent.battle.document.getElementById(id_shown).style.visibility = "hidden";
		id_shown = "current_enemy"+i+"_health_bar";
		parent.battle.document.getElementById(id_shown).style.visibility = "hidden";
		enemylife[i] = "dead";
	}
	
	if(traveling == true){
		if(current_player_health <= 0){
			show_Profile();
		}else{
			show_Map();
		}
	}
	else{
		show_Profile();
	}
}

//MAP

function show_Map(){//Καρανικόλας 100362082
	parent.start.document.getElementById('Start_of_Game_field').style.display = 'none';
	parent.character.document.getElementById('Character_creation_field').style.display = 'none';
	parent.battle.document.getElementById('Battle_field').style.display = 'none';
	parent.profile.document.getElementById('Profile_field').style.display = 'none';
	parent.map.document.getElementById('Map_field').style.display = '';
	parent.document.getElementById('game_frames').cols = '10%,0%,0%,0%,90%,0%,0%';
	
	parent.map.document.body.style.backgroundColor = "#000033";
	
	if(backToX != 0 && backToY != 0)
	{
		playerX = backToX;
		playerY = backToY;
		var elem = parent.map.document.getElementById("moving_player");
		elem.style.top = playerY + 'px'; 
		elem.style.left = playerX + 'px';
		
		parent.map.document.getElementById("Map_field").style.display = "";
		travellingPlayer(backCountX,backCountY,destination);
	}else{
		parent.map.document.getElementById("Map_field").style.display = "";
	}
}
function initMap(){//Καρανικόλας 100362082
	var elem = parent.map.document.getElementById("moving_player");
	elem.style.top = playerY + 'px'; 
	elem.style.left = playerX + 'px'; 
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
		scandinavia_cX[i] = x;
		scandinavia_cY[i] = y;
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
var destination = '';
function travellingPlayer(countryX,countryY,new_destination){//Καρανικόλας 100362082
	destination = new_destination;
	var tempCountryX = countryX;
	var tempCountryY = countryY;
	var elem = parent.map.document.getElementById("moving_player");
	var id = setInterval(frame,20);
	function frame() {
		//if(current_player_health <= 0){
			
		//}
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
			if (rBattle == 20 && current_player_health > 0){
				backToX = playerX;
				backToY = playerY;
				backCountX = tempCountryX;
				backCountY = tempCountryY;
				traveling = true;
				show_Battle();
				clearInterval(id);
			}
		}
	}
}

function newDestination(obst){//Καρανικόλας 100362082
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

function overlap_Land(destination){//Καρανικόλας 100362082
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