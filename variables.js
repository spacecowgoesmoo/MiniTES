var cow = {
	level: 1,
	levelXP: 0,
	hp: 30,
	maxHP: 30,
	minDMG: 4,
	maxDMG: 8,
	ac: 0,

	str: 5,
	def: 5,
	agi: 5,
	spd: 5,
	cha: 5,
	luk: 5,

	axe: 1,
	sword: 1,
	dagger: 1,
	fist: 1,
	speech: 1,
	critical: 1,
	spear: 1,
	mace: 1,
	dodge: 1,
	block: 1,
	unlock: 1,
	hArmor: 1,
	mArmor: 1,
	lArmor: 1,
	athlete: 1,
	medic: 1,
	endure: 1,
	smash: 1,
	climb: 1,
	stealth: 1,

	strXP: 0,
	defXP: 0,
	agiXP: 0,
	spdXP: 0,
	chaXP: 0,
	lukXP: 0,

	axeXP: 0,
	swordXP: 0,
	daggerXP: 0,
	fistXP: 0,
	speechXP: 0,
	criticalXP: 0,
	spearXP: 0,
	maceXP: 0,
	dodgeXP: 0,
	blockXP: 0,
	unlockXP: 0,
	hArmorXP: 0,
	mArmorXP: 0,
	lArmorXP: 0,
	athleteXP: 0,
	medicXP: 0,
	endureXP: 0,
	smashXP: 0,
	climbXP: 0,
	stealthXP: 0,

	equippedHeadArmor: "",
	equippedShoulderArmor: "",
	equippedGloves: "",
	equippedBodyArmor: "",
	equippedPants: "",
	equippedShoes: "",
	equippedShield: "",
	equippedWeapon: "Fist1",

	currentMap: "Vieda Port",
	currentTab: "main",
	worldMapRNG: 0,
	itemDropRNG: 0,
	itemClassRNG: 0,
	masterGamestateVariable: "startingAnEvent",
	waitCounter: 0,
	travelDestination: "",
	travellingTime: 0,
	restingMap: "",
	restingTime: 0,
	currentImprovingSkill: "",
	cssDefaultTheme: "Black",
	gameplayClock: 0,
	minutesPlayed: 0,
	hoursPlayed: 0,
	respawnAtVieda: true,
	overrideCurrentMapDisplay: "",

	combatState: "off",
	mobCurrentHP: "9999",
	endTurn: false,

	keyItem1have: false,
	keyItem2have: false,
	keyItem3have: false,
	keyItem4have: false,
	keyItem5have: false,
	keyItem6have: false,
	keyItem7have: false,
	keyItem8have: false,
	keyItem9have: false,
	keyItem10have: false,
	keyItem11have: false,
	keyItem12have: false,
	keyItem13have: false,
	keyItem14have: false,
	keyItem15have: false,
	keyItem16have: false,
	keyItem17have: false,
	keyItem18have: false,
	keyItem19have: false,
	keyItem20have: false,
	keyItem21have: false,
	keyItem22have: false,
	keyItem23have: false,
	keyItem24have: false,

	mapItem1have: false,
	mapItem2have: false,
    mapItem3have: false,
    mapItem4have: false,
    mapItem5have: false,
    mapItem6have: false,
    mapItem7have: false,
    mapItem8have: false,

	seal1have: false,
	seal2have: false,
    seal3have: false,
    seal4have: false,
    seal5have: false,
    seal6have: false,
    seal7have: false,
    seal8have: false,
}


var map1 = { name: "Vieda Port", 			text: "Vieda Port"}
var map2 = { name: "Nomad's Guild",			text: "Nomad's Guild"}
var map3 = { name: "Crystalspire Forest", 	text: "Crystalspire Forest"}
var map4 = { name: "Ardana Residential",	text: "Ardana - Residential District" }
var map5 = { name: "Ardana Marketplace",	text: "Ardana - Marketplace" }
var map6 = { name: "Silverpool Tides",		text: "Silverpool Tides" }
var map7 = { name: "Madras", 				text: "Madras" }
var map8 = { name: "Elcot",					text: "Elcot" }
var map9 = { name: "Crimson Palace",		text: "Crimson Palace" }
var map10 = { name: "Ardana Slums",			text: "Ardana - Slums" }
var map11 = { name: "Obsidian Grasslands",	text: "Obsidian Grasslands" }
var map12 = { name: "Deadmoor Tower",		text: "Deadmoor Tower" }
var map13 = { name: "Sea of Hileo",			text: "Sea of Hileo" }
var map14 = { name: "Rydale Keep",			text: "Rydale Keep" }
var map15 = { name: "Farin's Delve",		text: "Farin's Delve" }
var map16 = { name: "Skyview",				text: "Skyview" }
var map17 = { name: "Ba'ryst", 				text: "Ba'ryst" }
var map18 = { name: "Prismatic Delta",		text: "Prismatic Delta" }
var map19 = { name: "Cerrak",				text: "Cerrak" }
var map20 = { name: "Burning Cloudsea",		text: "Burning Cloudsea" }
var map21 = { name: "Siruvan", 				text: "Siruvan"}
var map22 = { name: "Midnight's Reach",		text: "Midnight's Reach" }
var map23 = { name: "Forest of Ice",		text: "Forest of Ice" }
var map24 = { name: "Undercrypt", 			text: "Undercrypt" }







var acLight =  [0, 0.8, 1.5, 4, 9,  16, 21, 26, 42, 56];
var acMedium = [0, 1,   2,   5, 11, 20, 26, 32, 53, 70];
var acHeavy =  [0, 1.2, 2.5, 6, 13, 24, 31, 38, 64, 84];

var lightHeadArmor0 = { have: true, armorClass: acLight[0], name: "---" }
var lightHeadArmor1 = { have: false, armorClass: acLight[1], name: "Mudcloth Cap" }
var lightHeadArmor2 = { have: false, armorClass: acLight[2], name: "Fur Cap" }
var lightHeadArmor3 = { have: false, armorClass: acLight[3], name: "Cordweave Cap" }
var lightHeadArmor4 = { have: false, armorClass: acLight[4], name: "Forest Cap" }
var lightHeadArmor5 = { have: false, armorClass: acLight[5], name: "Stealth Cap" }
var lightHeadArmor6 = { have: false, armorClass: acLight[6], name: "Sunstone Cap" }
var lightHeadArmor7 = { have: false, armorClass: acLight[7], name: "Windform Cap" }
var lightHeadArmor8 = { have: false, armorClass: acLight[8], name: "Force Cap" }
var lightHeadArmor9 = { have: false, armorClass: acLight[9], name: "Stardust Cap" }
cow.bestlightHeadArmor = 0;

var lightShoulderArmor0 = { have: true, armorClass: acLight[0], name: "---" }
var lightShoulderArmor1 = { have: false, armorClass: acLight[1], name: "Mudcloth Pads" }
var lightShoulderArmor2 = { have: false, armorClass: acLight[2], name: "Fur Pads" }
var lightShoulderArmor3 = { have: false, armorClass: acLight[3], name: "Cordweave Pads" }
var lightShoulderArmor4 = { have: false, armorClass: acLight[4], name: "Forest Pads" }
var lightShoulderArmor5 = { have: false, armorClass: acLight[5], name: "Stealth Pads" }
var lightShoulderArmor6 = { have: false, armorClass: acLight[6], name: "Sunstone Pads" }
var lightShoulderArmor7 = { have: false, armorClass: acLight[7], name: "Windform Pads" }
var lightShoulderArmor8 = { have: false, armorClass: acLight[8], name: "Force Pads" }
var lightShoulderArmor9 = { have: false, armorClass: acLight[9], name: "Stardust Pads" }
cow.bestlightShoulderArmor = 0;

var lightGloves0 = { have: true, armorClass: acLight[0], name: "---" }
var lightGloves1 = { have: false, armorClass: acLight[1], name: "Mudcloth Gloves" }
var lightGloves2 = { have: false, armorClass: acLight[2], name: "Fur Gloves" }
var lightGloves3 = { have: false, armorClass: acLight[3], name: "Cordweave Gloves" }
var lightGloves4 = { have: false, armorClass: acLight[4], name: "Forest Gloves" }
var lightGloves5 = { have: false, armorClass: acLight[5], name: "Stealth Gloves" }
var lightGloves6 = { have: false, armorClass: acLight[6], name: "Sunstone Gloves" }
var lightGloves7 = { have: false, armorClass: acLight[7], name: "Windform Gloves" }
var lightGloves8 = { have: false, armorClass: acLight[8], name: "Force Gloves" }
var lightGloves9 = { have: false, armorClass: acLight[9], name: "Stardust Gloves" }
cow.bestlightGloves = 0;

var lightBodyArmor0 = { have: true, armorClass: acLight[0], name: "---" }
var lightBodyArmor1 = { have: false, armorClass: acLight[1], name: "Mudcloth Garb" }
var lightBodyArmor2 = { have: false, armorClass: acLight[2], name: "Fur Garb" }
var lightBodyArmor3 = { have: false, armorClass: acLight[3], name: "Cordweave Garb" }
var lightBodyArmor4 = { have: false, armorClass: acLight[4], name: "Forest Garb" }
var lightBodyArmor5 = { have: false, armorClass: acLight[5], name: "Stealth Garb" }
var lightBodyArmor6 = { have: false, armorClass: acLight[6], name: "Sunstone Garb" }
var lightBodyArmor7 = { have: false, armorClass: acLight[7], name: "Windform Garb" }
var lightBodyArmor8 = { have: false, armorClass: acLight[8], name: "Force Garb" }
var lightBodyArmor9 = { have: false, armorClass: acLight[9], name: "Stardust Garb" }
cow.bestlightBodyArmor = 0;

var lightPants0 = { have: true, armorClass: acLight[0], name: "---" }
var lightPants1 = { have: false, armorClass: acLight[1], name: "Mudcloth Pants" }
var lightPants2 = { have: false, armorClass: acLight[2], name: "Fur Pants" }
var lightPants3 = { have: false, armorClass: acLight[3], name: "Cordweave Pants" }
var lightPants4 = { have: false, armorClass: acLight[4], name: "Forest Pants" }
var lightPants5 = { have: false, armorClass: acLight[5], name: "Stealth Pants" }
var lightPants6 = { have: false, armorClass: acLight[6], name: "Sunstone Pants" }
var lightPants7 = { have: false, armorClass: acLight[7], name: "Windform Pants" }
var lightPants8 = { have: false, armorClass: acLight[8], name: "Force Pants" }
var lightPants9 = { have: false, armorClass: acLight[9], name: "Stardust Pants" }
cow.bestlightPants = 0;

var lightShoes0 = { have: true, armorClass: acLight[0], name: "---" }
var lightShoes1 = { have: false, armorClass: acLight[1], name: "Mudcloth Boots" }
var lightShoes2 = { have: false, armorClass: acLight[2], name: "Fur Boots" }
var lightShoes3 = { have: false, armorClass: acLight[3], name: "Cordweave Boots" }
var lightShoes4 = { have: false, armorClass: acLight[4], name: "Forest Boots" }
var lightShoes5 = { have: false, armorClass: acLight[5], name: "Stealth Boots" }
var lightShoes6 = { have: false, armorClass: acLight[6], name: "Sunstone Boots" }
var lightShoes7 = { have: false, armorClass: acLight[7], name: "Windform Boots" }
var lightShoes8 = { have: false, armorClass: acLight[8], name: "Force Boots" }
var lightShoes9 = { have: false, armorClass: acLight[9], name: "Stardust Boots" }
cow.bestlightShoes = 0;

var lightShield0 = { have: true, armorClass: 0, name: "---" }
var lightShield1 = { have: false, armorClass: 0, name: "Mudcloth Guard" }
var lightShield2 = { have: false, armorClass: 0, name: "Fur Guard" }
var lightShield3 = { have: false, armorClass: 0, name: "Cordweave Guard" }
var lightShield4 = { have: false, armorClass: 0, name: "Forest Guard" }
var lightShield5 = { have: false, armorClass: 0, name: "Stealth Guard" }
var lightShield6 = { have: false, armorClass: 0, name: "Sunstone Guard" }
var lightShield7 = { have: false, armorClass: 0, name: "Windform Guard" }
var lightShield8 = { have: false, armorClass: 0, name: "Force Guard" }
var lightShield9 = { have: false, armorClass: 0, name: "Stardust Guard" }
cow.bestlightShield = 0;

var mediumHeadArmor0 = { have: true, armorClass: acMedium[0], name: "---" }
var mediumHeadArmor1 = { have: false, armorClass: acMedium[1], name: "Shale Crest" }
var mediumHeadArmor2 = { have: false, armorClass: acMedium[2], name: "Wooden Crest" }
var mediumHeadArmor3 = { have: false, armorClass: acMedium[3], name: "Leather Crest" }
var mediumHeadArmor4 = { have: false, armorClass: acMedium[4], name: "Seashell Crest" }
var mediumHeadArmor5 = { have: false, armorClass: acMedium[5], name: "Ceramic Crest" }
var mediumHeadArmor6 = { have: false, armorClass: acMedium[6], name: "Alloy Crest" }
var mediumHeadArmor7 = { have: false, armorClass: acMedium[7], name: "Crystalvine Crest" }
var mediumHeadArmor8 = { have: false, armorClass: acMedium[8], name: "Lightmetal Crest" }
var mediumHeadArmor9 = { have: false, armorClass: acMedium[9], name: "Frostwork Crest" }
cow.bestmediumHeadArmor = 0;

var mediumShoulderArmor0 = { have: true, armorClass: acMedium[0], name: "---" }
var mediumShoulderArmor1 = { have: false, armorClass: acMedium[1], name: "Shale Epaulets" }
var mediumShoulderArmor2 = { have: false, armorClass: acMedium[2], name: "Wooden Epaulets" }
var mediumShoulderArmor3 = { have: false, armorClass: acMedium[3], name: "Leather Epaulets" }
var mediumShoulderArmor4 = { have: false, armorClass: acMedium[4], name: "Seashell Epaulets" }
var mediumShoulderArmor5 = { have: false, armorClass: acMedium[5], name: "Ceramic Epaulets" }
var mediumShoulderArmor6 = { have: false, armorClass: acMedium[6], name: "Alloy Epaulets" }
var mediumShoulderArmor7 = { have: false, armorClass: acMedium[7], name: "Crystalvine Epaulets" }
var mediumShoulderArmor8 = { have: false, armorClass: acMedium[8], name: "Lightmetal Epaulets" }
var mediumShoulderArmor9 = { have: false, armorClass: acMedium[9], name: "Frostwork Epaulets" }
cow.bestmediumShoulderArmor = 0;

var mediumGloves0 = { have: true, armorClass: acMedium[0], name: "---" }
var mediumGloves1 = { have: false, armorClass: acMedium[1], name: "Shale Bracers" }
var mediumGloves2 = { have: false, armorClass: acMedium[2], name: "Wooden Bracers" }
var mediumGloves3 = { have: false, armorClass: acMedium[3], name: "Leather Bracers" }
var mediumGloves4 = { have: false, armorClass: acMedium[4], name: "Seashell Bracers" }
var mediumGloves5 = { have: false, armorClass: acMedium[5], name: "Ceramic Bracers" }
var mediumGloves6 = { have: false, armorClass: acMedium[6], name: "Alloy Bracers" }
var mediumGloves7 = { have: false, armorClass: acMedium[7], name: "Crystalvine Bracers" }
var mediumGloves8 = { have: false, armorClass: acMedium[8], name: "Lightmetal Bracers" }
var mediumGloves9 = { have: false, armorClass: acMedium[9], name: "Frostwork Bracers" }
cow.bestmediumGloves = 0;

var mediumBodyArmor0 = { have: true, armorClass: acMedium[0], name: "---" }
var mediumBodyArmor1 = { have: false, armorClass: acMedium[1], name: "Shale Cuirass" }
var mediumBodyArmor2 = { have: false, armorClass: acMedium[2], name: "Wooden Cuirass" }
var mediumBodyArmor3 = { have: false, armorClass: acMedium[3], name: "Leather Cuirass" }
var mediumBodyArmor4 = { have: false, armorClass: acMedium[4], name: "Seashell Cuirass" }
var mediumBodyArmor5 = { have: false, armorClass: acMedium[5], name: "Ceramic Cuirass" }
var mediumBodyArmor6 = { have: false, armorClass: acMedium[6], name: "Alloy Cuirass" }
var mediumBodyArmor7 = { have: false, armorClass: acMedium[7], name: "Crystalvine Cuirass" }
var mediumBodyArmor8 = { have: false, armorClass: acMedium[8], name: "Lightmetal Cuirass" }
var mediumBodyArmor9 = { have: false, armorClass: acMedium[9], name: "Frostwork Cuirass" }
cow.bestmediumBodyArmor = 0;

var mediumPants0 = { have: true, armorClass: acMedium[0], name: "---" }
var mediumPants1 = { have: false, armorClass: acMedium[1], name: "Shale Leggings" }
var mediumPants2 = { have: false, armorClass: acMedium[2], name: "Wooden Leggings" }
var mediumPants3 = { have: false, armorClass: acMedium[3], name: "Leather Leggings" }
var mediumPants4 = { have: false, armorClass: acMedium[4], name: "Seashell Leggings" }
var mediumPants5 = { have: false, armorClass: acMedium[5], name: "Ceramic Leggings" }
var mediumPants6 = { have: false, armorClass: acMedium[6], name: "Alloy Leggings" }
var mediumPants7 = { have: false, armorClass: acMedium[7], name: "Crystalvine Leggings" }
var mediumPants8 = { have: false, armorClass: acMedium[8], name: "Lightmetal Leggings" }
var mediumPants9 = { have: false, armorClass: acMedium[9], name: "Frostwork Leggings" }
cow.bestmediumPants = 0;

var mediumShoes0 = { have: true, armorClass: acMedium[0], name: "---" }
var mediumShoes1 = { have: false, armorClass: acMedium[1], name: "Shale Shoes" }
var mediumShoes2 = { have: false, armorClass: acMedium[2], name: "Wooden Shoes" }
var mediumShoes3 = { have: false, armorClass: acMedium[3], name: "Leather Shoes" }
var mediumShoes4 = { have: false, armorClass: acMedium[4], name: "Seashell Shoes" }
var mediumShoes5 = { have: false, armorClass: acMedium[5], name: "Ceramic Shoes" }
var mediumShoes6 = { have: false, armorClass: acMedium[6], name: "Alloy Shoes" }
var mediumShoes7 = { have: false, armorClass: acMedium[7], name: "Crystalvine Shoes" }
var mediumShoes8 = { have: false, armorClass: acMedium[8], name: "Lightmetal Shoes" }
var mediumShoes9 = { have: false, armorClass: acMedium[9], name: "Frostwork Shoes" }
cow.bestmediumShoes = 0;

var mediumShield0 = { have: true, armorClass: 0, name: "---" }
var mediumShield1 = { have: false, armorClass: 0, name: "Shale Shield" }
var mediumShield2 = { have: false, armorClass: 0, name: "Wooden Shield" }
var mediumShield3 = { have: false, armorClass: 0, name: "Leather Shield" }
var mediumShield4 = { have: false, armorClass: 0, name: "Seashell Shield" }
var mediumShield5 = { have: false, armorClass: 0, name: "Ceramic Shield" }
var mediumShield6 = { have: false, armorClass: 0, name: "Alloy Shield" }
var mediumShield7 = { have: false, armorClass: 0, name: "Crystalvine Shield" }
var mediumShield8 = { have: false, armorClass: 0, name: "Lightmetal Shield" }
var mediumShield9 = { have: false, armorClass: 0, name: "Frostwork Shield" }
cow.bestmediumShield = 0;

var heavyHeadArmor0 = { have: true, armorClass: acHeavy[0], name: "---" }
var heavyHeadArmor1 = { have: false, armorClass: acHeavy[1], name: "Rusted Helm" }
var heavyHeadArmor2 = { have: false, armorClass: acHeavy[2], name: "Stone Helm" }
var heavyHeadArmor3 = { have: false, armorClass: acHeavy[3], name: "Iron Helm" }
var heavyHeadArmor4 = { have: false, armorClass: acHeavy[4], name: "Bronze Helm" }
var heavyHeadArmor5 = { have: false, armorClass: acHeavy[5], name: "Crimson Helm" }
var heavyHeadArmor6 = { have: false, armorClass: acHeavy[6], name: "Steel Helm" }
var heavyHeadArmor7 = { have: false, armorClass: acHeavy[7], name: "Diamond Helm" }
var heavyHeadArmor8 = { have: false, armorClass: acHeavy[8], name: "Obsidian Helm" }
var heavyHeadArmor9 = { have: false, armorClass: acHeavy[9], name: "Firestorm Helm" }
cow.bestheavyHeadArmor = 0;

var heavyShoulderArmor0 = { have: true, armorClass: acHeavy[0], name: "---" }
var heavyShoulderArmor1 = { have: false, armorClass: acHeavy[1], name: "Rusted Pauldrons" }
var heavyShoulderArmor2 = { have: false, armorClass: acHeavy[2], name: "Stone Pauldrons" }
var heavyShoulderArmor3 = { have: false, armorClass: acHeavy[3], name: "Iron Pauldrons" }
var heavyShoulderArmor4 = { have: false, armorClass: acHeavy[4], name: "Bronze Pauldrons" }
var heavyShoulderArmor5 = { have: false, armorClass: acHeavy[5], name: "Crimson Pauldrons" }
var heavyShoulderArmor6 = { have: false, armorClass: acHeavy[6], name: "Steel Pauldrons" }
var heavyShoulderArmor7 = { have: false, armorClass: acHeavy[7], name: "Diamond Pauldrons" }
var heavyShoulderArmor8 = { have: false, armorClass: acHeavy[8], name: "Obsidian Pauldrons" }
var heavyShoulderArmor9 = { have: false, armorClass: acHeavy[9], name: "Firestorm Pauldrons" }
cow.bestheavyShoulderArmor = 0;

var heavyGloves0 = { have: true, armorClass: acHeavy[0], name: "---" }
var heavyGloves1 = { have: false, armorClass: acHeavy[1], name: "Rusted Gauntlets" }
var heavyGloves2 = { have: false, armorClass: acHeavy[2], name: "Stone Gauntlets" }
var heavyGloves3 = { have: false, armorClass: acHeavy[3], name: "Iron Gauntlets" }
var heavyGloves4 = { have: false, armorClass: acHeavy[4], name: "Bronze Gauntlets" }
var heavyGloves5 = { have: false, armorClass: acHeavy[5], name: "Crimson Gauntlets" }
var heavyGloves6 = { have: false, armorClass: acHeavy[6], name: "Steel Gauntlets" }
var heavyGloves7 = { have: false, armorClass: acHeavy[7], name: "Diamond Gauntlets" }
var heavyGloves8 = { have: false, armorClass: acHeavy[8], name: "Obsidian Gauntlets" }
var heavyGloves9 = { have: false, armorClass: acHeavy[9], name: "Firestorm Gauntlets" }
cow.bestheavyGloves = 0;

var heavyBodyArmor0 = { have: true, armorClass: acHeavy[0], name: "---" }
var heavyBodyArmor1 = { have: false, armorClass: acHeavy[1], name: "Rusted Plate" }
var heavyBodyArmor2 = { have: false, armorClass: acHeavy[2], name: "Stone Plate" }
var heavyBodyArmor3 = { have: false, armorClass: acHeavy[3], name: "Iron Plate" }
var heavyBodyArmor4 = { have: false, armorClass: acHeavy[4], name: "Bronze Plate" }
var heavyBodyArmor5 = { have: false, armorClass: acHeavy[5], name: "Crimson Plate" }
var heavyBodyArmor6 = { have: false, armorClass: acHeavy[6], name: "Steel Plate" }
var heavyBodyArmor7 = { have: false, armorClass: acHeavy[7], name: "Diamond Plate" }
var heavyBodyArmor8 = { have: false, armorClass: acHeavy[8], name: "Obsidian Plate" }
var heavyBodyArmor9 = { have: false, armorClass: acHeavy[9], name: "Firestorm Plate" }
cow.bestheavyBodyArmor = 0;

var heavyPants0 = { have: true, armorClass: acHeavy[0], name: "---" }
var heavyPants1 = { have: false, armorClass: acHeavy[1], name: "Rusted Cuisse" }
var heavyPants2 = { have: false, armorClass: acHeavy[2], name: "Stone Cuisse" }
var heavyPants3 = { have: false, armorClass: acHeavy[3], name: "Iron Cuisse" }
var heavyPants4 = { have: false, armorClass: acHeavy[4], name: "Bronze Cuisse" }
var heavyPants5 = { have: false, armorClass: acHeavy[5], name: "Crimson Cuisse" }
var heavyPants6 = { have: false, armorClass: acHeavy[6], name: "Steel Cuisse" }
var heavyPants7 = { have: false, armorClass: acHeavy[7], name: "Diamond Cuisse" }
var heavyPants8 = { have: false, armorClass: acHeavy[8], name: "Obsidian Cuisse" }
var heavyPants9 = { have: false, armorClass: acHeavy[9], name: "Firestorm Cuisse" }
cow.bestheavyPants = 0;

var heavyShoes0 = { have: true, armorClass: acHeavy[0], name: "---" }
var heavyShoes1 = { have: false, armorClass: acHeavy[1], name: "Rusted Greaves" }
var heavyShoes2 = { have: false, armorClass: acHeavy[2], name: "Stone Greaves" }
var heavyShoes3 = { have: false, armorClass: acHeavy[3], name: "Iron Greaves" }
var heavyShoes4 = { have: false, armorClass: acHeavy[4], name: "Bronze Greaves" }
var heavyShoes5 = { have: false, armorClass: acHeavy[5], name: "Crimson Greaves" }
var heavyShoes6 = { have: false, armorClass: acHeavy[6], name: "Steel Greaves" }
var heavyShoes7 = { have: false, armorClass: acHeavy[7], name: "Diamond Greaves" }
var heavyShoes8 = { have: false, armorClass: acHeavy[8], name: "Obsidian Greaves" }
var heavyShoes9 = { have: false, armorClass: acHeavy[9], name: "Firestorm Greaves" }
cow.bestheavyShoes = 0;

var heavyShield0 = { have: true, armorClass: 0, name: "---" }
var heavyShield1 = { have: false, armorClass: 0, name: "Rusted Aegis" }
var heavyShield2 = { have: false, armorClass: 0, name: "Stone Aegis" }
var heavyShield3 = { have: false, armorClass: 0, name: "Iron Aegis" }
var heavyShield4 = { have: false, armorClass: 0, name: "Bronze Aegis" }
var heavyShield5 = { have: false, armorClass: 0, name: "Crimson Aegis" }
var heavyShield6 = { have: false, armorClass: 0, name: "Steel Aegis" }
var heavyShield7 = { have: false, armorClass: 0, name: "Diamond Aegis" }
var heavyShield8 = { have: false, armorClass: 0, name: "Obsidian Aegis" }
var heavyShield9 = { have: false, armorClass: 0, name: "Firestorm Aegis" }
cow.bestheavyShield = 0;






var daggerMin = [0, 11, 15, 17, 21, 25, 27, 31, 39, 45];
var daggerMax = [0, 12, 16, 19, 22, 26, 28, 32, 40, 46];
var dagger0 = { have: true,  minDamage: daggerMin[0], maxDamage: daggerMax[0], name: "---" }
var dagger1 = { have: false, minDamage: daggerMin[1], maxDamage: daggerMax[1], name: "Knife" }
var dagger2 = { have: false, minDamage: daggerMin[2], maxDamage: daggerMax[2], name: "Scramasax" }
var dagger3 = { have: false, minDamage: daggerMin[3], maxDamage: daggerMax[3], name: "Dirk" }
var dagger4 = { have: false, minDamage: daggerMin[4], maxDamage: daggerMax[4], name: "Cinquedea" }
var dagger5 = { have: false, minDamage: daggerMin[5], maxDamage: daggerMax[5], name: "Kris" }
var dagger6 = { have: false, minDamage: daggerMin[6], maxDamage: daggerMax[6], name: "Khukuri" }
var dagger7 = { have: false, minDamage: daggerMin[7], maxDamage: daggerMax[7], name: "Baselard" }
var dagger8 = { have: false, minDamage: daggerMin[8], maxDamage: daggerMax[8], name: "Stiletto" }
var dagger9 = { have: false, minDamage: daggerMin[9], maxDamage: daggerMax[9], name: "Jamadhar" }
cow.bestdagger = 0;

var fistMin = [0, 4, 14, 16, 20, 24, 26, 30, 38, 44];
var fistMax = [0, 8, 18, 20, 24, 28, 30, 34, 42, 48];
var fist0 = { have: true,  minDamage: fistMin[0], maxDamage: fistMax[0], name: "---" }
var fist1 = { have: true,  minDamage: fistMin[1], maxDamage: fistMax[1], name: "Fist" }
var fist2 = { have: false, minDamage: fistMin[2], maxDamage: fistMax[2], name: "Brass Knuckle" }
var fist3 = { have: false, minDamage: fistMin[3], maxDamage: fistMax[3], name: "Tekko" }
var fist4 = { have: false, minDamage: fistMin[4], maxDamage: fistMax[4], name: "Yawara" }
var fist5 = { have: false, minDamage: fistMin[5], maxDamage: fistMax[5], name: "Bagh Nakh" }
var fist6 = { have: false, minDamage: fistMin[6], maxDamage: fistMax[6], name: "Shuko" }
var fist7 = { have: false, minDamage: fistMin[7], maxDamage: fistMax[7], name: "Maduvu" }
var fist8 = { have: false, minDamage: fistMin[8], maxDamage: fistMax[8], name: "Kubotan" }
var fist9 = { have: false, minDamage: fistMin[9], maxDamage: fistMax[9], name: "Cestus" }
cow.bestfist = 1;

var swordMin = [0, 13, 17, 19, 23, 27, 29, 33, 41, 47];
var swordMax = [0, 17, 21, 23, 27, 31, 33, 37, 45, 51];
var sword0 = { have: true,  minDamage: swordMin[0], maxDamage: swordMax[0], name: "---" }
var sword1 = { have: false, minDamage: swordMin[1], maxDamage: swordMax[1], name: "Short Sword" }
var sword2 = { have: false, minDamage: swordMin[2], maxDamage: swordMax[2], name: "Spatha" }
var sword3 = { have: false, minDamage: swordMin[3], maxDamage: swordMax[3], name: "Scimitar" }
var sword4 = { have: false, minDamage: swordMin[4], maxDamage: swordMax[4], name: "Rapier" }
var sword5 = { have: false, minDamage: swordMin[5], maxDamage: swordMax[5], name: "Pata" }
var sword6 = { have: false, minDamage: swordMin[6], maxDamage: swordMax[6], name: "Shamshir" }
var sword7 = { have: false, minDamage: swordMin[7], maxDamage: swordMax[7], name: "Falchion" }
var sword8 = { have: false, minDamage: swordMin[8], maxDamage: swordMax[8], name: "Khopesh" }
var sword9 = { have: false, minDamage: swordMin[9], maxDamage: swordMax[9], name: "Rhomphaia" }
cow.bestsword = 0;

var maceMin = [0, 9, 13, 15, 19, 23, 25, 29, 37, 43];
var maceMax = [0, 19, 23, 25, 29, 34, 35, 39, 47, 53];
var mace0 = { have: true,  minDamage: maceMin[0], maxDamage: maceMax[0], name: "---" }
var mace1 = { have: false, minDamage: maceMin[1], maxDamage: maceMax[1], name: "Club" }
var mace2 = { have: false, minDamage: maceMin[2], maxDamage: maceMax[2], name: "Bulawa" }
var mace3 = { have: false, minDamage: maceMin[3], maxDamage: maceMax[3], name: "Shillelagh" }
var mace4 = { have: false, minDamage: maceMin[4], maxDamage: maceMax[4], name: "Pernach" }
var mace5 = { have: false, minDamage: maceMin[5], maxDamage: maceMax[5], name: "Gada" }
var mace6 = { have: false, minDamage: maceMin[6], maxDamage: maceMax[6], name: "Bardoukion" }
var mace7 = { have: false, minDamage: maceMin[7], maxDamage: maceMax[7], name: "Morgenstern" }
var mace8 = { have: false, minDamage: maceMin[8], maxDamage: maceMax[8], name: "Bec de Corbin" }
var mace9 = { have: false, minDamage: maceMin[9], maxDamage: maceMax[9], name: "War Maul" }
cow.bestmace = 0;

var spearMin = [0, 10, 14, 16, 20, 24, 26, 30, 38, 44];
var spearMax = [0, 14, 18, 20, 24, 28, 30, 34, 42, 48];
var spear0 = { have: true,  minDamage: spearMin[0], maxDamage: spearMax[0], name: "---" }
var spear1 = { have: false, minDamage: spearMin[1], maxDamage: spearMax[1], name: "Spear" }
var spear2 = { have: false, minDamage: spearMin[2], maxDamage: spearMax[2], name: "Glaive" }
var spear3 = { have: false, minDamage: spearMin[3], maxDamage: spearMax[3], name: "Corcesca" }
var spear4 = { have: false, minDamage: spearMin[4], maxDamage: spearMax[4], name: "Trident" }
var spear5 = { have: false, minDamage: spearMin[5], maxDamage: spearMax[5], name: "Pike" }
var spear6 = { have: false, minDamage: spearMin[6], maxDamage: spearMax[6], name: "Fauchard" }
var spear7 = { have: false, minDamage: spearMin[7], maxDamage: spearMax[7], name: "Voulge" }
var spear8 = { have: false, minDamage: spearMin[8], maxDamage: spearMax[8], name: "Bardiche" }
var spear9 = { have: false, minDamage: spearMin[9], maxDamage: spearMax[9], name: "Brandestoc" }
cow.bestspear = 0;

var axeMin = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var axeMax = [0, 25, 30, 33, 38, 43, 46, 51, 60, 67];
var axe0 = { have: true,  minDamage: axeMin[0], maxDamage: axeMax[0], name: "---" }
var axe1 = { have: false, minDamage: axeMin[1], maxDamage: axeMax[1], name: "Hand Axe" }
var axe2 = { have: false, minDamage: axeMin[2], maxDamage: axeMax[2], name: "Francisca" }
var axe3 = { have: false, minDamage: axeMin[3], maxDamage: axeMax[3], name: "Parashu" }
var axe4 = { have: false, minDamage: axeMin[4], maxDamage: axeMax[4], name: "Keteriya" }
var axe5 = { have: false, minDamage: axeMin[5], maxDamage: axeMax[5], name: "Sagaris" }
var axe6 = { have: false, minDamage: axeMin[6], maxDamage: axeMax[6], name: "Tabarzin" }
var axe7 = { have: false, minDamage: axeMin[7], maxDamage: axeMax[7], name: "Labrys" }
var axe8 = { have: false, minDamage: axeMin[8], maxDamage: axeMax[8], name: "Bullova" }
var axe9 = { have: false, minDamage: axeMin[9], maxDamage: axeMax[9], name: "Crescent" }
cow.bestaxe = 0;








var keyItem1 = {  name: "Guild Pass", 			text: "Allows entry into the Nomad's Guild outside of Vieda Port" }
var keyItem2 = {  name: "Whetstone", 			text: "All weapons get a small damage boost" }
var keyItem3 = {  name: "Healing Pearl", 		text: "Recovery time after combat is reduced by 33%" }
var keyItem4 = {  name: "Aura Fragment", 		text: "All weapons get a damage boost based on the other five weapon skills" }
var keyItem5 = {  name: "Shifting Cape", 		text: "Chance to dodge an attack +10%" }
var keyItem6 = {  name: "Ring of Echoes", 		text: "Roll for critical hit twice per attack" }
var keyItem7 = {  name: "Armorer's Hammer", 	text: "All armor pieces get +1 base AC" }
var keyItem8 = {  name: "Magearmor Ring", 		text: "All armor pieces get an AC boost based on the other two armor skills" }
var keyItem9 = {  name: "Hardening Oil", 		text: "All armor pieces get +1 base AC" }
var keyItem10 = { name: "Frozen Soul", 			text: "All weapons get +3 max damage" }
var keyItem11 = { name: "Blessed Shieldcrest",	text: "Raises chance-to-block cap by 10%" }
var keyItem12 = { name: "Boots of Speed", 		text: "Reduces world map travel time by 33%" }
var keyItem13 = { name: "Adamantium Pebble", 	text: "Reduces respawn time a bit" }
var keyItem14 = { name: "Magnetic Dust", 		text: "The effects of LUK are slightly increased" }
var keyItem15 = { name: "Amber Signet", 		text: "Chance of all equipment drops raised by 5%" }
var keyItem16 = { name: "Quicksilver", 			text: "Increases critical hit damage" }
var keyItem17 = { name: "Crystal Sphere",		text: "Highlights some undiscovered key items on the world map" }
var keyItem18 = { name: "Sapphire Tail", 		text: "Reduces incoming damage by 2" }
var keyItem19 = { name: "Shield Amulet", 		text: "Gives a 10% chance to trigger blocking when not using a shield" }
var keyItem20 = { name: "Snowflake Coin", 		text: "Hit Rate +10%" }
var keyItem21 = { name: "Reinforced Seal", 		text: "The world is safe, and new adventures await in the depths of Siruvan.." }
var keyItem22 = { name: "Crypt Key",			text: "Reveals the Undercrypt on the world map" }
var keyItem23 = { name: "Dimensional Key", 		text: "The path is opened.." }
var keyItem24 = { name: "Trinket", 				text: "Thanks for playing! <3" }

var mapItem1 = { name: "Map 1", text: "Found in Silverpool Tides. Tells of a seal hidden in Cerrak." }
var mapItem2 = { name: "Map 2", text: "Found in Madras. Tells of a seal hidden at the Sea of Hileo." }
var mapItem3 = { name: "Map 3", text: "Found in the Ardana Slums. Tells of a seal hidden at Rydale Keep." }
var mapItem4 = { name: "Map 4", text: "Found at the Obsidian Grasslands. Tells of a seal hidden in Elcot." }
var mapItem5 = { name: "Map 5", text: "Found in Deadmoor Tower. Tells of a seal hidden in the Crimson Palace." }
var mapItem6 = { name: "Map 6", text: "Found at Skyview. Tells of a seal hidden in Farin's Delve." }
var mapItem7 = { name: "Map 7", text: "Found in Ba'ryst. Tells of a seal hidden at the Burning Cloudsea." }
var mapItem8 = { name: "Map 8", text: "Found at the Prismatic Delta. Tells of a seal hidden in Siruvan." }

var seal1 = { name: "Seal 1", text: "Found in Elcot." }
var seal2 = { name: "Seal 2", text: "Found in the Crimson Palace." }
var seal3 = { name: "Seal 3", text: "Found at the Sea of Hileo. It doesn't look like it's traveled very far.." }
var seal4 = { name: "Seal 4", text: "Found at Rydale Keep." }
var seal5 = { name: "Seal 5", text: "Found in Farin's Delve." }
var seal6 = { name: "Seal 6", text: "Found at Cerrak." }
var seal7 = { name: "Seal 7", text: "Found at the Burning Cloudsea ." }
var seal8 = { name: "Seal 8", text: "Found in Siruvan." }