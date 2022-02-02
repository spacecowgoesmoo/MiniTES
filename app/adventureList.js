//////////////////////////////////////////////////////////////////////////////////////////
//
//
//				WARNING - This .js file contains spoilers for the entire game.
//						- Here's an ASCII cow as a consolation prize. Take it and leave :o
//
//
//
//
//
//                                        /|                        /|
//                                        | \           __ _ _     / ;
//                                  ___    \ \   _.-"-" `~"\  `"--' /
//                              _.-'   ""-._\ ""   ._,"  ; "\"--._./
//                          _.-'       \./    "-""", )  ~"  |
//                         / ,- .'          ,     '  `o.  ;  )
//                         \ ;/       '                 ;   /
//                          |/        '      |      \   '   |
//                          /        |             J."\  ,  |
//                         "         :       \   .'  : | ,. _)
//                         |         |     /     f |  |`--"--'
//                          \_        \    \    / _/  |
//                           \ "-._  _.|   (   j/; -'/
//                            \  | "/  (   |   /,    |
//                             | \  |  /\  |\_///   /
//                             \ /   \ | \  \  /   /
//                              ||    \ \|  |  |  |
//                              ||     \ \  |  | /
//                              |\      |_|/   ||
//                              L \       ||   ||
//                              `"'       |\   |\
//                  [nabis]               ( \. \ `.
//                                        |_ _\|_ _\
//                                          "    "
//                                      
//
//
//
//
//
//				Spoilers will commence in 50 lines..
//
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//     
//                         
//
//				Spoilers will commence in 20 lines..
//
//
//
//
//
//
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////


// grind (grindSpeed, itemDropChance, itemDropVariableName, skillLevelRequirementToEnter, skillRequiredToEnter, skill, text, lockedText)
// combat (mobTier(unused in code), itemDropChance, itemDropVariableName, 
//					minDamage, maxDamage, hitRate,			 	AC, HP, 			critChance, evasionChance, blockChance, 			mobName)
//						(no modifiers)						(no modifiers)							(no modifiers)



function selectAdventureTypeBasedOnCurrentArea () {
	if (cow.currentTab == "main") {

	var x = 4.8; // default # of XPs per grind.
	var v = 2.0; // Less XP for grinding a combat skill
	var	y = 35; // default chance of a mob dropping a gear piece
	var z = 9.1; // Extra XPs for grinding in a skill gate, or in a combat zone (non combat only)
	var w = 2.4; // XPs for 'Hunting for monsters..'; it's fucking everywhere 
	if (cow.keyItem15have == true) { y = 40;}

if (cow.currentMap == "Vieda Port") {
	if (cow.worldMapRNG == 0)	{ grind  (0, 0, "", 			0, "",			"stealth", 	"Wandering around the large crowds..",								""); } else
	if (cow.worldMapRNG < 20)	{ grind  (x, 0, "", 			0, "",			"stealth", 	"Wandering around the large crowds..",								""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "", 			0, "",			"smash", 	"Breaking some discarded ceramic pots..",							""); } else
	if (cow.worldMapRNG < 60)	{ grind  (x, 0, "", 			0, "",			"climb", 	"Taking in the landscape from atop a tower..",						""); } else
	if (cow.worldMapRNG < 75)	{ grind  (z, 50, "keyItem1",	2, "stealth",	"speech",	"Relaxing at an adventurer's bar..",								"You find a crowded bar but aren't stealthy enough to sneak past the bouncer.."); } else
	if (cow.worldMapRNG < 80)	{ combat ("L0", y, "T1",  			4,	7,	50,		0,	20,		1,	0,	0,		"Field Rat"); } else 
	if (cow.worldMapRNG < 85)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L0", y, "T1",  			4,	6,	50,		0,	20,		1,	0,	0,		"Gull"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L1", y, "T1",  			5,	5,	50,		1,	30,		0,	0,	0,		"Ocean Mote"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L3", y, "T2",  			8,	12,	50,		3,	45,		1,	0,	10,		"Nailfish"); }
}

if (cow.currentMap == "Nomad's Guild" && cow.keyItem1have == true) {
	if (cow.worldMapRNG < 5)	{ grind  (v, 0, "", 			0, "",			"axe", 		"Chopping firewood with a handaxe..", 													""); } else
	if (cow.worldMapRNG < 20 && cow.keyItem2have == true)
								{ grind  (v, 0, "", 			0, "",			"axe", 		"Chopping firewood with a handaxe..", 													""); } else
	if (cow.worldMapRNG < 20 && cow.bestdagger != 0 && cow.bestfist != 0 && cow.bestsword != 0 && cow.bestmace != 0 && cow.bestspear != 0 && cow.bestaxe != 0)	
								{ grind  (v, 100, "keyItem2", 	0, "",			"speech", 	"You are given a prize for improving your skills..", 									""); } else
	if (cow.worldMapRNG < 20 && cow.keyItem2have == false)
								{ grind  (v, 0, "", 			0, "",			"speech", 	"You learn that you can claim a prize if you own one of each weapon type..",			""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 0, "", 			0, "",			"sword",	"Sparring with practice swords..", 														""); } else
	if (cow.worldMapRNG < 40)	{ grind  (v, 0, "", 			0, "",			"mace", 	"Swinging a superheavy mace around..", 													""); } else
	if (cow.worldMapRNG < 50)	{ grind  (v, 0, "", 			0, "",			"dagger", 	"Precision training with daggers..", 													""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"fist",		"Working on hand to hand combat techniques..", 											""); } else
	if (cow.worldMapRNG < 70)	{ grind  (v, 0, "", 			0, "",			"hArmor", 	"Practicing movement skills with heavy armor..", 										""); } else
	if (cow.worldMapRNG < 80)	{ grind  (v, 0, "", 			0, "",			"mArmor", 	"Training with a set of weighted armor..", 												""); } else
	if (cow.worldMapRNG < 90)	{ grind  (v, 0, "", 			0, "",			"lArmor",	"Learning how to effectively use light armor..", 										""); } else
	if (cow.worldMapRNG < 97)	{ combat ("L1",  30, "T1", 			5,	7,	50,		2,	30,		3,	0,	5,		"Drunkard"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 50, "T5", 			30,	34,	150,	50,	130,	10,	30,	16,		"Guildmaster"); }
}

if (cow.currentMap == "Nomad's Guild" && cow.keyItem1have == false) 
								{ grind  (0, 0, "", 			0, "",			"speech",	"You need to find a Guild Pass back in Vieda to enter here..", 							""); }
							
if (cow.currentMap == "Crystalspire Forest") {
	if (cow.worldMapRNG < 55)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..", 											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 100, "keyItem4",	40, "climb",	"climb", 	"Climbing the tallest tree in the forest..", 						"You see something glowing in a distant treetop, but it's too tall to climb.."); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "", 			0, "",			"endure", 	"There's a slight chill in the air..", 								""); } else
	if (cow.worldMapRNG < 67)	{ grind  (z, 0, "", 			0, "",			"medic", 	"Foraging for medicinal herbs..", 									""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 80, "keyItem3",	0, "",			"climb",	"Climbing a large tree..", 											""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L1", y, "T1",  			2,	6,	50,		2,	30,		1,	0,	0,		"Forest Jell"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L1", y, "T1",  			5,	7,	50,		2,	30,		1,	0,	0,		"Wisp"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L1", y, "T1",  			4,	5,	50,		1,	30,		1,	0,	6,		"Creeping Vine"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L1", y, "T1",  			3,	6,	50,		1,	30,		1,	0,	0,		"Mushroom Gem"); }
}
















if (cow.currentMap == "Ardana Residential") {
	if (cow.worldMapRNG < 25)	{ grind  (x, 0, "", 			0,  "", 		"unlock", 	"Searching through an abandoned house..", 							""); } else
	if (cow.worldMapRNG < 50)	{ grind  (x, 0, "", 			0,  "", 		"speech", 	"Talking to some random citizens..", 								""); } else
	if (cow.worldMapRNG < 75)	{ grind  (x, 0, "",				0,  "", 		"endure",	"Pushing through the crowded streets..",							""); } else
	if (cow.worldMapRNG < 97)	{ grind  (x, 50, "keyItem5",	5, "fist", 		"fist",		"Brawling at a rowdy inn..", 										"You hear a fistfight at the inn and decide not to get involved.."); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L3", y, "T2",  			10,	12,	50,		3,	40,		3,	0,	0,		"Novice Thief"); }
}

if (cow.currentMap == "Ardana Marketplace") {
	if (cow.worldMapRNG < 20)	{ grind  (v, 0, "", 			0, "",			"block", 	"Avoiding a crowded scuffle..", 									""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "", 			0, "",			"unlock", 	"Peering into shop backdoors..", 									""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"dodge",	"Dodging a handful of eggs..", 										""); } else
	if (cow.worldMapRNG < 80)	{ grind  (x, 0, "",				0, "",			"climb",	"Taking a shortcut across town..",									""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 5, "",				0, "",			"smash",	"Helping to disassemble a market stall..", 							""); } else
	if (cow.worldMapRNG < 95)	{ grind  (z, 100, "keyItem6",	40, "unlock",	"unlock", 	"Opening a suspiciously overprotected door..",						"You find a suspiciously overlocked door, but you can't get it to open.."); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L3", 100, "keyItem7",	1,	14,	40,		2,	40,		3,	0,	6,		"Pickpocket"); }
}

if (cow.currentMap == "Silverpool Tides") {
	if (cow.worldMapRNG < 55)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..", 											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 100, "keyItem8",	40, "speech",	"speech", 	"Talking with an old hermit..", 									"You come across an old hermit, but you can't seem to understand each other.."); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "", 			0, "",			"athlete", 	"Caught in a riptide..", 											""); } else
	if (cow.worldMapRNG < 67)	{ grind  (v, 0, "", 			0, "",			"spear", 	"Spear fishing..", 													""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 5, "",				0, "",			"climb",	"Wandering around the pools..", 									""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L3", y, "T2",  			8,	12,	50,		3,	45,		1,	0,	0,		"Skyfish"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L3", y, "T2",  			6,	10,	50,		6,	30,		1,	0,	6,		"Hook Turtle"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L3", y, "T2",  			10,	14,	50,		4,	40,		1,	0,	6,		"Crawler"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L3", y, "T2",  			9,	10,	50,		3,	45,		1,	0,	0,		"Bubblesquid"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L3", y, "T2",  			10,	14,	50,		3,	45,		1,	0,	0,		"Rock Heron"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 100, "mapItem1", 	13,	17,	50,		5,	50,		2,	0,	0,		"Coral Lurker"); }
}

if (cow.currentMap == "Madras") {
	if (cow.worldMapRNG < 5)	{ grind  (z, 50, "mapItem2",	5, "speech",	"speech", 	"An audience with the Council of Elders..",							"You ask to speak with the Council of Elders, but the guard turns you away.."); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 0, "", 			0, "",			"sword", 	"Swordfighting tournament in the town square..",					""); } else
	if (cow.worldMapRNG < 50)	{ grind  (v, 0, "",				0, "",			"hArmor",	"Training with platemail at the armorer..",							""); } else
	if (cow.worldMapRNG < 70)	{ grind  (v, 0, "",				0, "",			"mArmor",	"Learning how medium armor is forged..",							""); } else
	if (cow.worldMapRNG < 90)	{ grind  (v, 0, "",				0, "",			"lArmor",	"Testing out some new light armor designs..",						""); } else
	if (cow.worldMapRNG < 93)	{ combat ("L3", y, "T2", 			1,	12,	50,		3,	45,		1,	0,	0,		"Snow Hound"); } else
	if (cow.worldMapRNG < 96)	{ combat ("L3", y, "T2", 			11,	12,	50,		3,	37,		1,	0,	0,		"Greythorn Falcon"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", y, "T2", 			13,	17,	50,		2,	75,		2,	0,	0,		"Airtiger"); }
}

if (cow.currentMap == "Elcot" && cow.mapItem4have == false) {
	if (cow.worldMapRNG < 20)	{ grind  (x, 0, "", 			0, "",			"medic", 	"Healing an injured child..", 										""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "", 			0, "",			"stealth", 	"Hiding from the town guards..", 									""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"axe",		"Axe lessons with a retired adventurer..", 							""); } else
	if (cow.worldMapRNG < 80)	{ grind  (v, 0, "",				0, "",			"fist",		"Sparring with a renowned warrior..", 								""); } else
	if (cow.worldMapRNG <= 99)	{ grind  (x, 50, "keyItem9",	10, "mArmor",	"mArmor",	"Sandbag 'training' with medium armor..", 							"You're not skilled enough with medium armor to train here.."); }
}

if (cow.currentMap == "Crimson Palace" && cow.mapItem5have == false) {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..", 											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "", 			0, "",			"smash", 	"Breaking down a locked door..", 									""); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "", 			0, "",			"stealth", 	"Dashing between the shadows..", 									""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"Unlocking a locked door..", 										""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L3", y, "T2",  			12,	13,	50,		3,	40,		1,	0,	0,		"Firebat"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L3", y, "T2",  			8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L3", y, "T2",  			10,	14,	50,		3,	50,		1,	0,	0,		"Ghoul"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L4", y, "T3",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L4", y, "T3",  			11,	15,	50,		4,	55,		2,	0,	6,		"Lance Naga"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L2", 50, "T3",  			3,	4,	120,	0,	20,		0,	20,	6,		"Covetous Imp"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 100, "keyItem10",	12,	16,	50,		5,	55,		2,	0,	0,		"Blazing Apparition"); }
}
















if (cow.currentMap == "Ardana Slums") {
	if (cow.worldMapRNG < 5)							{ grind  (v, 5, "",				0, "",			"fist", 	"Capturing a thief..", 																	""); } else
	if (cow.worldMapRNG < 15)							{ grind  (v, 0, "", 			0, "",			"dodge", 	"Dodging an upended chamberpot..", 														""); } else
	if (cow.worldMapRNG < 25)							{ grind  (v, 0, "",				0, "",			"dagger",	"Knife fighting in a dark alley..", 													""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == false && cow.keyItem5have == true && cow.keyItem7have == true)
														{ grind  (x, 100, "mapItem3",	0, "",			"speech", 	"The antiques collector gives you a map for your troubles..", 							""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == false && cow.keyItem5have == false)
														{ grind  (x, 0, "",				0, "",			"speech", 	"An antiquer asks to see a Shifting Cape from the Residential District..", 				""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == false && cow.keyItem7have == false)
														{ grind  (x, 0, "",				0, "",			"speech", 	"An antiquer asks to see a Armorer's Hammer from the Marketplace..", 					""); } else
	if (cow.worldMapRNG < 40 && cow.mapItem3have == true){ grind (x, 0, "",				0, "",			"speech", 	"Chatting with the antiques collector..", 												""); } else
	if (cow.worldMapRNG < 50)							{ grind  (x, 0, "",				0, "",			"medic",	"Healing a sick peasant..", 															""); } else
	if (cow.worldMapRNG < 70)							{ grind  (x, 0, "",				0, "",			"athlete",	"Playing adventurer with a group of local kids..", 										""); } else
	if (cow.worldMapRNG < 80)							{ combat ("L5", y, "T3", 			11,	17,	55,		6,	50,		2,	5,	8,		"Marauder"); } else
	if (cow.worldMapRNG < 90)							{ combat ("L5", y, "T3", 			1,	16,	55,		4,	50,		2,	5,	0,		"Feral Wolf"); } else
	if (cow.worldMapRNG <= 99)							{ combat ("L5", y, "T3", 			15,	19,	55,		6,	60,		2,	5,	8,		"Swordsman"); }
}

if (cow.currentMap == "Obsidian Grasslands") {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..", 											""); } else
	if (cow.worldMapRNG < 65)	{ grind  (z, 80, "mapItem4",	10,	"endure",	"endure", 	"Bracing against a strong gust of wind..", 							"A sudden gust of wind blows, and you're unable to keep your footing.."); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "", 			0, "",			"climb", 	"Climbing a crystalline spire..", 									""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L5", y, "T3",  			14,	18,	55,		6,	60,		2,	5,	0,		"Marble Hydrangea"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L5", y, "T3",  			12,	16,	55,		4,	50,		2,	5,	0,		"Prismshade"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L5", y, "T3",  			5,	20,	55,		6,	60,		2,	5,	0,		"Dashing Mare"); } else
	if (cow.worldMapRNG < 93)	{ combat ("L5", y, "T3",  			11,	17,	30,		8,	80,		0,	5,	8,		"Golem"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L5", y, "T3",  			15,	16,	55,		5,	50,		3,	5,	0,		"Cloud Diver"); }
}

if (cow.currentMap == "Deadmoor Tower") {
	if (cow.worldMapRNG < 5)	{ grind  (z, 100, "mapItem5",	10, "unlock",	"unlock", 	"Unlocking a rusty gate..",											"You find a hidden gate, but it's too securely locked.."); } else
	if (cow.worldMapRNG < 30)	{ grind  (x, 0, "", 			0, "",			"stealth", 	"Hiding in the darkness..",											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (x, 0, "",				0, "",			"speech",	"Talking with the tower's resident family..",							""); } else
	if (cow.worldMapRNG < 89)	{ grind  (x, 0, "",				0, "",			"athlete",	"Climbing many flights of stairs..",								""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 0, "",				0, "",			"critical",	"You spot a dusty jewelcase under a pile of furniture..",			""); } else
	if (cow.worldMapRNG < 93)	{ combat ("L5", y, "T3", 			14,	18,	55,		6,	60,		2,	5,	0,		"Oculus"); } else
	if (cow.worldMapRNG < 96)	{ combat ("L5", y, "T3", 			15,	15,	55,		7,	60,		2,	5,	0,		"Shadow Mote"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L5", y, "T3", 			10,	14,	55,		6,	50,		2,	5,	0,		"Brambleweed"); }
}

if (cow.currentMap == "Sea of Hileo" && cow.mapItem2have == false) {
	if (cow.worldMapRNG < 55)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 100, "keyItem11",	40, "endure",	"endure", 	"Diving to the bottom of the sea..",								"You spot something down on the seabed, but the water's too cold to dive into.."); } else
	if (cow.worldMapRNG < 65)	{ grind  (z, 0, "",				0, "",			"endure", 	"Swimming in the frigid icewater..",								""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "", 			0, "",			"climb", 	"Climbing a shining glacier..",										""); } else
	if (cow.worldMapRNG < 75)	{ grind  (z, 0, "", 			0, "",			"smash", 	"Clearing a path through some icicles..",							""); } else
	if (cow.worldMapRNG < 80)	{ combat ("L5", y, "T3",  			13,	16,	55,		0,	80,		2,	5,	0,		"Meridian Echo"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L5", y, "T3",  			12,	14,	55,		5,	50,		2,	5,	8,		"Icebloom"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L5", y, "T3",  			14,	18,	55,		6,	65,		2,	5,	0,		"Sea Lion"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L5", y, "T3",  			1,	16,	55,		6,	60,		2,	5,	0,		"Sheet Piranha"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 100, "keyItem12",	28,	36,	150,	50,	130,	4,	40,	12,		"Frost Terror"); }
}

if (cow.currentMap == "Rydale Keep" && cow.mapItem3have == false) {
	if (cow.worldMapRNG < 20)	{ grind  (v, 0, "", 			0, "",			"mace", 	"Joining in the soldiers' mace exercises..",						""); } else
	if (cow.worldMapRNG < 40)	{ grind  (v, 0, "", 			0, "",			"spear",	"Phalanx training with the legionnaires..",							""); } else
	if (cow.worldMapRNG < 55)	{ grind  (v, 0, "",				0, "",			"axe",		"Axe practice with the heavy infantry..",							""); } else
	if (cow.worldMapRNG < 75)	{ grind  (x, 0, "",				0, "",			"medic",	"Volunteer work as an infirmary assistant..",						""); } else
	if (cow.worldMapRNG < 95)	{ grind  (x, 0, "",				0, "",			"endure",	"Drilling at the practice field..",									""); } else
	if (cow.worldMapRNG <= 99)	{ grind  (x, 100, "keyItem13",	0, "",			"speech",	"An audience with the Lady of the Keep..",							""); }
}

if (cow.currentMap == "Farin's Delve" && cow.mapItem6have == false) {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "",				0, "",			"stealth", 	"Sneaking about the depths..",										""); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"Unlocking a well-hidden door..",									""); } else
	if (cow.worldMapRNG < 70)	{ grind  (v, 0, "", 			0, "",			"dodge", 	"Dodging a falling stone..",										""); } else
	if (cow.worldMapRNG < 71)	{ grind  (1, 100, "keyItem14",	0, "",			"luk", 	"Something glints in the corner of your eye..",						""); } else
	if (cow.worldMapRNG < 78)	{ combat ("L5", y, "T3",  			15,	17,	55,		6,	60,		2,	5,	0,		"Cave Beast"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L5", y, "T3",  			14,	15,	55,		4,	50,		2,	5,	0,		"Shrieking Bat"); } else
	if (cow.worldMapRNG < 92)	{ combat ("L5", y, "T3",  			1,	16,	55,		5,	55,		2,	5,	0,		"Ghost"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L6", y, "T4",  			7,	20,	65,		12,	30,		2,	12,	9,		"Mining Automaton"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L6", y, "T4",			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); }
}
















if (cow.currentMap == "Skyview") {
	if (cow.worldMapRNG < 60)	{ grind  (x, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 0, "",				0, "",			"smash", 	"Smashing some jagged rocks..",										""); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "",				0, "",			"climb", 	"Climbing up a rocky hillside..",									""); } else
	if (cow.worldMapRNG < 69)	{ grind  (v, 50, "mapItem6",	0, "",			"dodge", 	"Gazing up at the sky..",											""); } else
	if (cow.worldMapRNG < 70)	{ grind  (x, 0, "", 			0, "",			"critical",	"A ray of light pierces the cloud layer..",							""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	127,	2,	25,	10,		"Thresher Tree"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L8", y, "T4",  			27,	28,	135,	16,	110,	3,	25,	0,		"Sunfalcon"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L8", y, "T4",  			27,	29,	135,	18,	125,	3,	25,	0,		"Breath Stinger"); } else
	if (cow.worldMapRNG < 93)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Ember Beetle"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L8", y, "T4",			24,	31,	135,	16,	125,	2,	25,	0,		"Cliffleaper"); }
}

if (cow.currentMap == "Ba'ryst") {
	if (cow.worldMapRNG < 15)	{ grind  (v, 5, "",				0, "",			"fist", 	"Meditation training at the temple..",								""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 0, "", 			0, "",			"block", 	"Parrying a barfight punch..",										""); } else
	if (cow.worldMapRNG < 40)	{ grind  (x, 0, "",				0, "",			"speech",	"Talking with all kinds of people..",								""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 50, "mapItem7",	17, "medic",	"medic",	"Studying about medicinal herbs..",									"You find a medical tome in a library, but can't make any sense of it.."); } else
	if (cow.worldMapRNG < 60)	{ combat ("L8", y, "T4", 			25,	29,	135,	16,	120,	2,	25,	0,		"Wilting Creep"); } else
	if (cow.worldMapRNG < 75)	{ combat ("L8", y, "T4", 			1,	37,	135,	18,	130,	3,	25,	10,		"Axeman"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L8", y, "T4", 			18,	31,	135,	17,	125,	2,	25,	0,		"Panther"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L8", y, "T4",			26,	30,	135,	15,	125,	3,	25,	10,		"Brawler"); }
}

if (cow.currentMap == "Prismatic Delta") {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 66)	{ grind  (v, 0, "",				0, "",			"sword", 	"Sword training in solitude..",										""); } else
	if (cow.worldMapRNG < 73)	{ grind  (z, 0, "",				0, "",			"athlete", 	"Running through the deep waters..",								""); } else
	if (cow.worldMapRNG < 80)	{ grind  (z, 0, "",				0, "",			"endure", 	"Standing fast against the tide..",									""); } else
	if (cow.worldMapRNG < 83)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L8", y, "T4",  			24,	28,	135,	18,	120,	2,	25,	0,		"Ring Starfish"); } else
	if (cow.worldMapRNG < 88)	{ combat ("L8", y, "T4",  			1,	22,	135,	5,	150,	4,	25,	0,		"Scythewater"); } else
	if (cow.worldMapRNG < 93)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L8", y, "T4",  			28,	29,	135,	17,	120,	2,	25,	0,		"Crystal Halcyon"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 90, "mapItem8",	1,	38,	150,	50,	130,	4,	30,	12,		"Sword Kraken"); }
}

if (cow.currentMap == "Cerrak" && cow.mapItem1have == false) {
	if (cow.worldMapRNG < 15)	{ grind  (v, 0, "", 			0, "",			"mace", 	"Working the forges at the weaponsmith..",							""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 50, "keyItem15",	0, "",			"axe",	 	"Splitting logs for fences..",										""); } else
	if (cow.worldMapRNG < 45)	{ grind  (v, 0, "",				0, "",			"sword",	"Sword training with some warriors..",								""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"spear",	"Fishing at the nearby lake..",										""); } else
	if (cow.worldMapRNG < 75)	{ grind  (v, 0, "",				0, "",			"dagger",	"Learning to woodcarve..",											""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 0, "",				0, "",			"endure",	"Exercising outdoors with the locals..",							""); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L12", y, "T6",			30,	40,	165,	120,140,		8,	45,	15,		"Townwarden Mauhagr"); }
}

if (cow.currentMap == "Burning Cloudsea" && cow.mapItem7have == false) {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 63)	{ grind  (z, 70, "keyItem16",	20, "athlete",	"athlete", 	"High altitude training..",											"The air is very thin; you stop for a moment to catch your breath.."); } else
	if (cow.worldMapRNG < 66)	{ grind  (z, 0, "",				0, "",			"medic", 	"Searching for a rare medicinal flower..",							""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "",				0, "",			"climb", 	"Scaling a mountain peak..",										""); } else
	if (cow.worldMapRNG < 75)	{ combat ("L8", y, "T4",  			29, 29,	135,	20,	120,	2,	25,	0,		"Skypyre Element"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L8", y, "T4",  			1,	32,	135,	6,	160,	2,	25,	0,		"Vaporwave"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Cinder Oak"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L8", y, "T4",  			22,	32,	135,	18,	125,	2,	25,	10,		"Razorwalker"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L8", y, "T4",  			28,	29,	135,	18,	125,	2,	25,	10,		"Wing Breaker"); }
}

if (cow.currentMap == "Siruvan" && cow.mapItem8have == false && cow.keyItem21have == false) {
	if (cow.worldMapRNG < 10)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 20)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L3", y, "T2",  			1,	14,	50,		2,	40,		3,	0,	6,		"Pickpocket"); } else
	if (cow.worldMapRNG < 40)	{ combat ("L3", 50, "keyItem17",	8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L4", y, "T2",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L5", y, "T3",  			15,	19,	55,		6,	60,		2,	5,	7,		"Swordsman"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L6", y, "T3",  			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L4", 30, "T4",  			6,	10,	190,	4,	60,		0,	10,	11,		"Covetous Goblin"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	12,		"Moonbrood Runner"); }
}
















if (cow.currentMap == "Elcot" && cow.mapItem4have == true) {
	if (cow.worldMapRNG < 20)	{ grind  (x, 0, "", 			0, "",			"medic", 	"Healing an injured child..",										""); } else
	if (cow.worldMapRNG < 35)	{ grind  (x, 0, "", 			0, "",			"stealth",	"Hiding from the town guards..",									""); } else
	if (cow.worldMapRNG < 55)	{ grind  (v, 0, "",				0, "",			"axe",		"Axe lessons with a retired adventurer..",							""); } else
	if (cow.worldMapRNG < 68)	{ grind  (v, 0, "",				0, "",			"fist",		"Sparring with a renowned warrior..",								""); } else
	if (cow.worldMapRNG < 80)	{ grind  (x, 50, "keyItem9",	10, "mArmor",	"mArmor",	"Sandbag 'training' with medium armor..",							"You're not skilled enough with medium armor to train here.."); } else
	if (cow.worldMapRNG < 85)	{ combat ("L10", y, "T5",  			25,	35,	150,	50,	130,	3,	30,	12,		"Town Guard"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L10", y, "T5",  			1,	37,	150,	35,	150,	3,	30,	0,		"Looting Mob"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L10", y, "T5",  			30,	34,	150,	50,	130,	3,	30,	12,		"Marshraider"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 80, "seal1",  		22,	32,	150,	40,	130,	3,	30,	0,		"Rampaging Beast"); }
}

if (cow.currentMap == "Crimson Palace" && cow.mapItem5have == true) {
	if (cow.worldMapRNG < 40)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 46)	{ grind  (z, 80, "seal2", 		25, "smash",	"smash", 	"Breaking down a securely locked door..",							"You spot a door that looks different than before, but you can't break it down.."); } else
	if (cow.worldMapRNG < 53)	{ grind  (z, 0, "", 			0, "",			"stealth", 	"Dashing between the shadows..",									""); } else
	if (cow.worldMapRNG < 60)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"Unlocking a locked door..",										""); } else
	if (cow.worldMapRNG < 65)	{ combat ("L3", y, "T2",  			10,	14,	50,		3,	50,		1,	0,	0,		"Ghoul"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L4", y, "T2",  			11,	15,	50,		4,	55,		2,	0,	6,		"Lance Naga"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L10", y, "T5",  			30,	30,	150,	60,	130,	3,	30,	0,		"Scatterflame Mote"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L10", y, "T5",  			1,	36,	150,	50,	130,	3,	30,	12,		"Minotaur"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L10", y, "T5",  			22,	27,	110,	90,	140,	1,	10,	0,		"Cursed Sculpture"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L5", 50, "T5",  			6,	10,	160,	18,	60,		20,	60,	9,		"Covetous Jadeslime"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 100, "keyItem10",	12,	16,	50,		5,	55,		2,	0,	0,		"Blazing Apparition"); }
}

if (cow.currentMap == "Sea of Hileo" && cow.mapItem2have == true) {
	if (cow.worldMapRNG < 35)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 40)	{ grind  (z, 100, "keyItem11",	40, "endure",	"endure", 	"Diving to the bottom of the sea..",								"You spot something resting on the seabed, but the water's too cold to dive into.."); } else
	if (cow.worldMapRNG < 45)	{ grind  (z, 0, "",				0, "",			"endure", 	"Swimming in the frigid icewater..",								""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 100, "seal3",		25, "climb",	"climb", 	"Climbing a partially melted glacier..",							"The glacier is very slippery now. You trip and slide down a ways.."); } else
	if (cow.worldMapRNG < 55)	{ grind  (z, 0, "", 			0, "",			"smash", 	"Clearing a path through some icicles..",							""); } else
	if (cow.worldMapRNG < 60)	{ combat ("L5", y, "T3",  			13,	16,	55,		0,	80,		2,	5,	0,		"Meridian Echo"); } else
	if (cow.worldMapRNG < 68)	{ combat ("L5", y, "T3",  			14,	18,	55,		6,	65,		2,	5,	0,		"Sea Lion"); } else
	if (cow.worldMapRNG < 78)	{ combat ("L10", y, "T5",  			30,	34,	150,	50,	130,	3,	30,	12,		"Silverspine"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L10", y, "T5",  			31,	34,	150,	70,	140,	3,	30,	12,		"Polar Drake"); } else
	if (cow.worldMapRNG < 92)	{ combat ("L10", y, "T5",  			31,	32,	165,	40,	110,	6,	30,	0,		"Watertrap Spider"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L10", 100, "keyItem12",	28,	36,	150,	50,	130,	4,	40,	12,		"Frost Terror"); }
}

if (cow.currentMap == "Rydale Keep" && cow.mapItem3have == true) {
	if (cow.worldMapRNG < 20)																{ grind  (v, 0, "", 			0, "",			"mace", 	"Joining in the soldiers' mace exercises..",						""); } else
	if (cow.worldMapRNG < 40)																{ grind  (v, 0, "", 			0, "",			"spear",	"Phalanx training with the legionnaires..",							""); } else
	if (cow.worldMapRNG < 60)																{ grind  (v, 0, "",				0, "",			"axe",		"Axe practice with the heavy infantry..",							""); } else
	if (cow.worldMapRNG < 80)																{ grind  (x, 0, "",				0, "",			"medic",	"Volunteer work as an infirmary assistant..",						""); } else
	if (cow.worldMapRNG < 90)																{ grind  (x, 0, "",				0, "",			"endure",	"Drilling at the practice field..",									""); } else
	if (cow.worldMapRNG < 95 && cow.seal4have == true)										{ grind  (x, 100, "keyItem13",	0, "",			"speech",	"An audience with the Lady of the Keep..",							""); } else
	if (cow.worldMapRNG < 95 && cow.seal4have == false && cow.keyItem18have == true)		{ grind  (x, 100, "seal4",		0, "",			"speech",	"You are given the fourth seal..",									""); } else
	if (cow.worldMapRNG < 95 && cow.seal4have == false && cow.keyItem18have == false)		{ grind  (x, 100, "keyItem13",	0, "",			"speech",	"You are asked to find a Sapphire Tail at Midnight's Reach..",		""); } else
	if (cow.worldMapRNG <= 99)																{ combat ("L11", 10, "T6",  		20,	30,	165,	85,	90,		4,	35,	0,		"Imprisoned Monster"); }
}	// Speech grind gives Seal 4 (with precedence over keyItem13) if keyItem18 is in inventory, 100% chance

if (cow.currentMap == "Midnight's Reach") {
	if (cow.worldMapRNG < 35)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 40)	{ grind  (z, 100, "keyItem19",	40, "smash",	"smash", 	"Smashing a solid obsidian spire..",								"You find an amulet encased in an obsidian spire, but you can't break it free.."); } else
	if (cow.worldMapRNG < 43)	{ grind  (v, 0, "", 			0, "",			"block", 	"Navigating a rocky landslide..",									""); } else
	if (cow.worldMapRNG < 46)	{ grind  (z, 0, "", 			0, "",			"smash", 	"Breaking througn some obsidian formations..",						""); } else
	if (cow.worldMapRNG < 50)	{ grind  (v, 0, "", 			0, "",			"mace", 	"Idly carving a small crystal..",									""); } else
	if (cow.worldMapRNG < 60)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	12,		"Moonbrood Runner"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L10", y, "T5",  			28,	32,	150,	50,	120,	3,	30,	0,		"Spiritshard"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L11", y, "T5",  			27,	33,	165,	80,	135,	4,	35,	12,		"Smoke Tamer"); } else
	if (cow.worldMapRNG < 85)	{ combat ("L11", y, "T5",  			1,	32,	165,	40,	160,	4,	35,	0,		"Field Spectre"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L11", y, "T5",  			34,	35,	165,	100,135,	4,	35,	12,		"Invisible"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L4", 80, "keyItem18",	10,	14,	50,		5,	45,		1,	0,	0,		"Twilight Hare"); }
}
















if (cow.currentMap == "Farin's Delve" && cow.mapItem6have == true) {
	if (cow.worldMapRNG < 40)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 45)	{ grind  (z, 0, "",				0, "",			"stealth", 	"Sneaking about the depths..",										""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 0, "", 			0, "",			"unlock", 	"Unlocking a well-hidden door..",									""); } else
	if (cow.worldMapRNG < 55)	{ grind  (v, 0, "", 			0, "",			"dodge", 	"Dodging a falling stone..",										""); } else
	if (cow.worldMapRNG < 56)	{ grind  (1, 100, "keyItem14",	0, "",			"luk",		"Something glints in the corner of your eye..",						""); } else
	if (cow.worldMapRNG < 65)	{ combat ("L5", y, "T3",  			1,	16,	55,		5,	55,		2,	5,	0,		"Ghost"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L6", y, "T4",  			7,	20,	65,		12,	30,		2,	12,	9,		"Mining Automaton"); } else
	if (cow.worldMapRNG < 75)	{ combat ("L12", y, "T6",  			34,	38,	165,	120,140,	4,	45,	15,		"Thunder Demon"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L12", y, "T7",  			34,	38,	165,	120,140,	4,	45,	0,		"Crown Scorpion"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L13", y, "T7", 			34,	38,	175,	160,140,	4,	45,	0,		"Splinterkin"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L12", 100, "seal5",		1,	40,	165,	160,160,	4,	45,	0,		"Gemstone Construct"); }
}

if (cow.currentMap == "Cerrak" && cow.mapItem1have == true) {
	if (cow.worldMapRNG < 15)	{ grind  (v, 0, "", 			0, "",			"mace", 	"Working the forges at the weaponsmith..",							""); } else
	if (cow.worldMapRNG < 30)	{ grind  (v, 10, "keyItem15",	0, "",			"axe",	 	"Splitting logs for fences..",										""); } else
	if (cow.worldMapRNG < 45)	{ grind  (v, 0, "",				0, "",			"sword",	"Sword training with some warriors..",								""); } else
	if (cow.worldMapRNG < 60)	{ grind  (v, 0, "",				0, "",			"spear",	"Fishing at the nearby lake..",										""); } else
	if (cow.worldMapRNG < 75)	{ grind  (v, 0, "",				0, "",			"dagger",	"Learning to woodcarve..",											""); } else
	if (cow.worldMapRNG < 90)	{ grind  (x, 0, "",				0, "",			"speech",	"Chatting with the locals..",										""); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L13", 100, "seal6",	 	32,	42,	175,	160,155,	4,	45,	15,		"Townwarden Mauhagr"); }
}

if (cow.currentMap == "Burning Cloudsea" && cow.mapItem7have == true) {
	if (cow.worldMapRNG < 40)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"Hunting for monsters..",											""); } else
	if (cow.worldMapRNG < 43)	{ grind  (z, 100, "keyItem16",	20, "athlete",	"athlete", 	"High altitude training..",											"The air is very thin; you stop for a moment to catch your breath.."); } else
	if (cow.worldMapRNG < 46)	{ grind  (z, 0, "",				0, "",			"medic", 	"Searching for a rare medicinal flower..",							""); } else
	if (cow.worldMapRNG < 50)	{ grind  (z, 100, "seal7",		30, "stealth",	"climb", 	"Scaling a monster-infested peak..",								"A large number of beasts have taken roost here, and you can't get past.."); } else
	if (cow.worldMapRNG < 60)	{ combat ("L8", y, "T4",  			29, 29,	135,	20,	70,		2,	25,	0,		"Skypyre Element"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	75,		2,	25,	0,		"Cinder Oak"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L12", y, "T6",  			35,	37,	165,	120,140,	4,	45,	0,		"Spiral Griffon"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L12", y, "T6",  			30,	34,	165,	120,140,	4,	45,	0,		"Rainstalker"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L12", y, "T6",  			35,	39,	165,	140,150,	4,	45,	15,		"Storm Drake"); }
}

if (cow.currentMap == "Siruvan" && cow.mapItem8have == true && cow.keyItem21have == false) {
	if (cow.worldMapRNG < 6)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 12)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 18)	{ combat ("L3", y, "T2",  			1,	14,	50,		2,	40,		3,	0,	6,		"Pickpocket"); } else
	if (cow.worldMapRNG < 24)	{ combat ("L3", 50, "keyItem17",	8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L4", y, "T2",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 36)	{ combat ("L5", y, "T3",  			15,	19,	55,		6,	60,		2,	5,	7,		"Swordsman"); } else
	if (cow.worldMapRNG < 42)	{ combat ("L6", y, "T3",  			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 60)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L10", y, "T5",  			22,	27,	140,	90,	140,	1,	10,	0,		"Cursed Sculpture"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	13,		"Moonbrood Runner"); } else
	if (cow.worldMapRNG < 90)	{ combat ("L12", y, "T6",  			35,	39,	165,	140,150,	4,	45,	15,		"Storm Drake"); } else
	if (cow.worldMapRNG < 97)	{ combat ("L13", 100, "seal8", 		1,	44,	195,	0,	300,	4,	0,	0,		"Bone Colossus"); } else
	if (cow.worldMapRNG < 99)	{ combat ("L6", 30, "T7",  			12,	14,	250,	210,60,		4,	12,	0,		"Covetous Wraith"); }
}
















if (cow.currentMap == "Forest of Ice") {
	if (cow.worldMapRNG < 60)	{ grind  (w, 0, "", 			0, "",			"athlete", 	"It is strangely quiet..",											""); } else
	if (cow.worldMapRNG < 70)	{ grind  (z, 0, "",				0, "",			"athlete", 	"Wandering the tundras..",											""); } else
	if (cow.worldMapRNG < 73)	{ combat ("L13", y, "T6",  			39,	43,	195,	160,195,	5,	55,	15,		"Wood Drake"); } else
	if (cow.worldMapRNG < 76)	{ combat ("L13", y, "T7",  			29,	34,	195,	180,190,	20,	55,	0,		"Rose Serpent"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L14", y, "T7",  			24,	42,	195,	180,200,	5,	65,	0,		"Shatterfang Mammoth"); } else
	if (cow.worldMapRNG < 82)	{ combat ("L14", y, "T7",  			41,	41,	195,	190,190,	5,	65,	0,		"Mana Element"); } else
	if (cow.worldMapRNG < 88)	{ combat ("L1", 50, "keyItem20",  	5,	10,	50,		3,	40,		0,	0,	0,		"Forgotton Treasure Chest"); } else
	if (cow.worldMapRNG <=99 && cow.seal1have == true && cow.seal2have == true && cow.seal3have == true && cow.seal4have == true && cow.seal5have == true && cow.seal6have == true && cow.seal7have == true && cow.seal8have == true)
								{ combat ("L16", 100, "keyItem21",	34,	50,	210,	250,310,	10,	75,	20,		"Imprisoned One"); } else
	if (cow.worldMapRNG <=99)	{ grind  (x, 0, "", 			0, "",			"endure", 	"You find a circular glyph, permanently carved into the icepack..",	""); }
}
















if (cow.currentMap == "Siruvan" && cow.mapItem8have == true && cow.keyItem21have == true) {
	if (cow.worldMapRNG < 3)	{ combat ("L0", y, "T1",  			3,	4,	50,		0,	10,		10,	0,	0,		"Thorngrass"); } else
	if (cow.worldMapRNG < 6)	{ combat ("L1", y, "T1",  			1,	8,	50,		1,	30,		1,	0,	0,		"Shadowbat"); } else
	if (cow.worldMapRNG < 10)	{ combat ("L3", y, "T2",  			1,	14,	50,		2,	40,		3,	0,	6,		"Pickpocket"); } else
	if (cow.worldMapRNG < 14)	{ combat ("L3", 50, "keyItem17",	8,	12,	50,		3,	45,		1,	0,	0,		"Lost Shade"); } else
	if (cow.worldMapRNG < 18)	{ combat ("L4", y, "T2",  			13,	13,	50,		4,	50,		2,	0,	0,		"Flamespell Element"); } else
	if (cow.worldMapRNG < 22)	{ combat ("L5", y, "T3",  			15,	19,	55,		6,	60,		2,	5,	7,		"Swordsman"); } else
	if (cow.worldMapRNG < 26)	{ combat ("L6", y, "T3",  			9,	11,	65,		11,	65,		2,	35,	0,		"Shining Light"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L8", y, "T4",  			28,	28,	135,	19,	120,	2,	25,	0,		"Spindrift Mote"); } else
	if (cow.worldMapRNG < 34)	{ combat ("L8", y, "T4",  			26,	30,	135,	18,	125,	2,	25,	0,		"Alligator"); } else
	if (cow.worldMapRNG < 38)	{ combat ("L10", y, "T5",  			22,	27,	110,	90,	140,	1,	10,	0,		"Cursed Sculpture"); } else
	if (cow.worldMapRNG < 42)	{ combat ("L10", y, "T5",  			28,	34,	150,	50,	130,	3,	30,	12,		"Moonbrood Runner"); } else
	if (cow.worldMapRNG < 46)	{ combat ("L12", y, "T6",  			35,	39,	165,	140,150,	4,	45,	15,		"Storm Drake"); } else
	if (cow.worldMapRNG < 54)	{ combat ("L13", y, "T7",  			29,	34,	195,	180,190,	20,	55,	0,		"Rose Serpent"); } else
	if (cow.worldMapRNG < 62)	{ combat ("L14", y, "T8",  			41,	41,	195,	190,190,	5,	65,	0,		"Mana Element"); } else
	if (cow.worldMapRNG < 68)	{ combat ("L15", y, "T8",  			41,	42,	205,	210,200,	5,	75,	24,		"Assassin"); } else
	if (cow.worldMapRNG < 74)	{ combat ("L16", y, "T8",  			1,	43,	215,	250,205,	5,	85,	0,		"Illusiondust"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L17", y, "T8",  			40,	45,	215,	300,210,	5,	95,	0,		"Withering Doom"); } else
	if (cow.worldMapRNG < 86)	{ combat ("L18", 1, "T9",  			47,	47,	225,	350,1,		5,	105,30,		"Grace Element"); } else
	if (cow.worldMapRNG < 92)	{ combat ("L19", 1, "T9",  			47,	51,	235,	400,220,	5,	115,26,		"Demonrift Armor"); } else
	if (cow.worldMapRNG < 94)	{ combat ("L10", 5, "T9",  			12,	14,	310,	400,160,	4,	115,30,		"Covetous Mimic"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L24", 100, "keyItem22",	50,	51,	250,	500,400,	5,	115,0,		"Ancient Shadow"); }
}

if (cow.currentMap == "Undercrypt" && cow.keyItem23have == false) {
	if (cow.worldMapRNG < 15)	{ combat ("L22", 1, "T9",  			46,	50,	250,	500,265,	5,	130,0,		"Skullmind"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L22", 1, "T9",  			49,	53,	250,	500,275,	5,	130,30,		"Swordstrider"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L22", 1, "T9",  			26,	56,	250,	500,270,	5,	130,0,		"Grim Dreamer"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L22", 1, "T9",  			50,	54,	250,	500,274,	5,	130,30,		"Bent Seraph"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L22", 1, "T9",  			48,	54,	250,	500,280,	5,	130,0,		"Crosspulse Phantom"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L22", 1, "T9",			36,	56,	250,	500,285,	5,	130,30,		"Plague Behemoth"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L28", 100, "keyItem23",	1,	70,	250,	600,412,	10,	150,30,		"Sin Guardian"); }
}

if (cow.currentMap == "Undercrypt" && cow.keyItem23have == true) {
	if (cow.worldMapRNG < 15)	{ combat ("L22", 1, "T9",  			26,	56,	250,	500,120,	5,	130,0,		"Grim Dreamer"); } else
	if (cow.worldMapRNG < 30)	{ combat ("L22", 1, "T9",  			50,	54,	250,	500,124,	5,	130,30,		"Bent Seraph"); } else
	if (cow.worldMapRNG < 50)	{ combat ("L30", 1, "T9",  			54,	58,	310,	600,140,	5,	200,30,		"Voidsiren"); } else
	if (cow.worldMapRNG < 70)	{ combat ("L30", 1, "T9",  			1,	64,	310,	600,140,	5,	200,0,		"Prismatic Bear"); } else
	if (cow.worldMapRNG < 80)	{ combat ("L30", 1, "T9",  			54,	56,	310,	600,130,	5,	200,0,		"Steelmist"); } else
	if (cow.worldMapRNG < 95)	{ combat ("L30", 1, "T9",			52,	52,	310,	600,145,	5,	200,0,		"Soulstorm Mote"); } else
	if (cow.worldMapRNG <= 99)	{ combat ("L45", 100, "keyItem24",	80,	120,310,	1200,500,	15,	200,40,		"Abyss"); }
}


var respawnTime = 11;
if (cow.keyItem13have == true) { respawnTime = 8; }

if (cow.currentMap == "respawning") { waitForSomethingIngame (respawnTime, cow.respawnLocation, "Waiting to Respawn..", "Respawned!") }
if (cow.currentMap == "resting") { waitForSomethingIngame (cow.restingTime, cow.restingMap, "Resting..", "Fully Healed!") }
if (cow.currentMap == "travelling") { waitForSomethingIngame (cow.travellingTime, cow.travelDestination, "Travelling..", "Arrived!") }
}
}