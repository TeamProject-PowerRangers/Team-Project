function healTarget(tempHealing,enemyCount[k],enemyAttack.chosen_attack_stamina_or_mana){
	var lastToAttack = true;
	for(m = 0; m < rEnemies; m++){
		if(!attacked[m]){
			lastToAttack = false;
		}
	}
	if (lastToAttack){
		var tempHealth = enemyCount[k].classAttribute.HP + tempHealing;
		if(current_player_health > enemyAttack.chosen_attack_damage && enemyCount[k].classAttribute.HP <= last_Attack && tempHealth > last_Attack && enemyCount[k].classAttribute.mana >= enemyAttack.chosen_attack_stamina_or_mana){
			eAttack = 3;
			return enemyCount[k];
		}
		else{
			for(y = 0; y < rEnemies; y++){
				var tempHealth = enemyCount[y].classAttribute.HP + tempHealing;
				if(current_player_health > enemyAttack.chosen_attack_damage && enemyCount[y].classAttribute.HP <= last_Attack && tempHealth > last_Attack && enemyCount[k].classAttribute.mana >= enemyAttack.chosen_attack_stamina_or_mana){
					eAttack = 3;
					return enemyCount[y];
				}
			}
		}
	}
	/*if (attacker.classAttribute.Class == 'warrior'){
            
            if(attack_target.classAttribute.Class == 'warrior'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
                
            }else if(attack_target.classAttribute.Class == 'brawler'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'sorcerer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'healer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			} 
			
        }else if (attacker.classAttribute.Class == 'brawler'){
            
            if(attack_target.classAttribute.Class == 'warrior'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
                
            }else if(attack_target.classAttribute.Class == 'brawler'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'sorcerer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'healer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			} 
            
        }else if (attacker.classAttribute.Class == 'healer'){
            
            if(attack_target.classAttribute.Class == 'warrior'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
                
            }else if(attack_target.classAttribute.Class == 'brawler'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'sorcerer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'healer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			} 
			
        }else if (attacker.classAttribute.Class == 'sorcerer'){
            
            if(attack_target.classAttribute.Class == 'warrior'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
                
            }else if(attack_target.classAttribute.Class == 'brawler'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'sorcerer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}else if(attack_target.classAttribute.Class == 'healer'){
                
                enemyCount[k].classAttribute.attack.manaAttack;
				
			}  
        }
	}*/
}