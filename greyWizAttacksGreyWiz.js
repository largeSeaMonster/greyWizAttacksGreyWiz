const $viewportBackground = document.body;

var blueWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "blueWizBackgroundColor")    
}

var greyWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "greyWizBackgroundColor")    
}

var redWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "redWizBackgroundColor")    
}

const $whiteBackground = document.getElementById("whiteBackground");

//pc blueWiz

//archie placeholder
const $blueWizArmPcAttackLeft = document.getElementById("blueWizArmPcAttackLeft");
const $blueWizArmPcAttackRight = document.getElementById("blueWizArmPcAttackRight");
const $blueWizArmPcDefaultLeft = document.getElementById("blueWizArmPcDefaultLeft");
const $blueWizArmPcDefaultRight = document.getElementById("blueWizArmPcDefaultRight");
const $blueWizArmPcDefendLeft = document.getElementById("blueWizArmPcDefendLeft");
const $blueWizArmPcDefendRight = document.getElementById("blueWizArmPcDefendRight");
const $blueWizArmPcClenchLeft = document.getElementById("blueWizArmPcClenchLeft");
const $blueWizArmPcClenchRight = document.getElementById("blueWizArmPcClenchRight");
const $blueWizPcWithoutArmsOrArchimedes = document.getElementById("blueWizPcWithoutArmsOrArchimedes");
const $magicMissile_0PcLeft = document.getElementById("magicMissile_0PcLeft");
const $magicMissile_0PcRight = document.getElementById("magicMissile_0PcRight");
const $magicMissile_1PcLeft = document.getElementById("magicMissile_1PcLeft");
const $magicMissile_1PcRight = document.getElementById("magicMissile_1PcRight");
const $magicMissile_2PcLeft = document.getElementById("magicMissile_2PcLeft");
const $magicMissile_2PcRight = document.getElementById("magicMissile_2PcRight");
const $magicMissile_3PcLeft = document.getElementById("magicMissile_3PcLeft");
const $magicMissile_3PcRight = document.getElementById("magicMissile_3PcRight");
const $magicMissileCondensation_0PcLeft = document.getElementById("magicMissileCondensation_0PcLeft");
const $magicMissileCondensation_0PcRight = document.getElementById("magicMissileCondensation_0PcRight");
const $magicMissileCondensation_1PcLeft = document.getElementById("magicMissileCondensation_1PcLeft");
const $magicMissileCondensation_1PcRight = document.getElementById("magicMissileCondensation_1PcRight");
const $magicMissileCondensation_2PcLeft = document.getElementById("magicMissileCondensation_2PcLeft");
const $magicMissileCondensation_2PcRight = document.getElementById("magicMissileCondensation_2PcRight");
const $magicMissileCondensation_3PcLeft = document.getElementById("magicMissileCondensation_3PcLeft");
const $magicMissileCondensation_3PcRight = document.getElementById("magicMissileCondensation_3PcRight");
const $magicMissileCondensation_4PcLeft = document.getElementById("magicMissileCondensation_4PcLeft");
const $magicMissileCondensation_4PcRight = document.getElementById("magicMissileCondensation_4PcRight");
const $magicMissileCondensation_5PcLeft = document.getElementById("magicMissileCondensation_5PcLeft");
const $magicMissileCondensation_5PcRight = document.getElementById("magicMissileCondensation_5PcRight");
const $magicMissilePcDefendedLeft = document.getElementById("magicMissilePcDefendedLeft");
const $magicMissilePcDefendedRight = document.getElementById("magicMissilePcDefendedRight");
const $magicMissileSplosionPcDefendedLeft = document.getElementById("magicMissileSplosionPcDefendedLeft");
const $magicMissileSplosionPcDefendedRight = document.getElementById("magicMissileSplosionPcDefendedRight");
const $magicMissileSplosionPcLeft = document.getElementById("magicMissileSplosionPcLeft");
const $magicMissileSplosionPcRight = document.getElementById("magicMissileSplosionPcRight");
const $star_0PcLeft = document.getElementById("star_0PcLeft");
const $star_0PcRight = document.getElementById("star_0PcRight");
const $star_1PcLeft = document.getElementById("star_1PcLeft");
const $star_1PcRight = document.getElementById("star_1PcRight");
const $star_2PcLeft = document.getElementById("star_2PcLeft");
const $star_2PcRight = document.getElementById("star_2PcRight");
const $star_3PcLeft = document.getElementById("star_3PcLeft");
const $star_3PcRight = document.getElementById("star_3PcRight");
const $star_4PcLeft= document.getElementById("star_4PcLeft");
const $star_4PcRight= document.getElementById("star_4PcRight");

//npc blueWiz

//archie placeholder
const $blueWizArmNpcAttackLeft = document.getElementById("blueWizArmNpcAttackLeft");
const $blueWizArmNpcAttackRight = document.getElementById("blueWizArmNpcAttackRight");
const $blueWizArmNpcDefaultLeft = document.getElementById("blueWizArmNpcDefaultLeft");
const $blueWizArmNpcDefaultRight = document.getElementById("blueWizArmNpcDefaultRight");
const $blueWizArmNpcDefendLeft = document.getElementById("blueWizArmNpcDefendLeft");
const $blueWizArmNpcDefendRight = document.getElementById("blueWizArmNpcDefendRight");
const $blueWizArmNpcClenchLeft = document.getElementById("blueWizArmNpcClenchLeft");
const $blueWizArmNpcClenchRight = document.getElementById("blueWizArmNpcClenchRight");
const $blueWizNpcWithoutArmsOrArchimedes = document.getElementById("blueWizNpcWithoutArmsOrArchimedes");
const $magicMissile_0NpcLeft = document.getElementById("magicMissile_0NpcLeft");
const $magicMissile_0NpcRight = document.getElementById("magicMissile_0NpcRight");
const $magicMissile_1NpcLeft = document.getElementById("magicMissile_1NpcLeft");
const $magicMissile_1NpcRight = document.getElementById("magicMissile_1NpcRight");
const $magicMissile_2NpcLeft = document.getElementById("magicMissile_2NpcLeft");
const $magicMissile_2NpcRight = document.getElementById("magicMissile_2NpcRight");
const $magicMissile_3NpcLeft = document.getElementById("magicMissile_3NpcLeft");
const $magicMissile_3NpcRight = document.getElementById("magicMissile_3NpcRight");
const $magicMissileCondensation_0NpcLeft = document.getElementById("magicMissileCondensation_0NpcLeft");
const $magicMissileCondensation_0NpcRight = document.getElementById("magicMissileCondensation_0NpcRight");
const $magicMissileCondensation_1NpcLeft = document.getElementById("magicMissileCondensation_1NpcLeft");
const $magicMissileCondensation_1NpcRight = document.getElementById("magicMissileCondensation_1NpcRight");
const $magicMissileCondensation_2NpcLeft = document.getElementById("magicMissileCondensation_2NpcLeft");
const $magicMissileCondensation_2NpcRight = document.getElementById("magicMissileCondensation_2NpcRight");
const $magicMissileCondensation_3NpcLeft = document.getElementById("magicMissileCondensation_3NpcLeft");
const $magicMissileCondensation_3NpcRight = document.getElementById("magicMissileCondensation_3NpcRight");
const $magicMissileCondensation_4NpcLeft = document.getElementById("magicMissileCondensation_4NpcLeft");
const $magicMissileCondensation_4NpcRight = document.getElementById("magicMissileCondensation_4NpcRight");
const $magicMissileCondensation_5NpcLeft = document.getElementById("magicMissileCondensation_5NpcLeft");
const $magicMissileCondensation_5NpcRight = document.getElementById("magicMissileCondensation_5NpcRight");
const $magicMissileNpcDefendedLeft = document.getElementById("magicMissileNpcDefendedLeft");
const $magicMissileNpcDefendedRight = document.getElementById("magicMissileNpcDefendedRight");
const $magicMissileSplosionNpcDefendedLeft = document.getElementById("magicMissileSplosionNpcDefendedLeft");
const $magicMissileSplosionNpcDefendedRight = document.getElementById("magicMissileSplosionNpcDefendedRight");
const $magicMissileSplosionNpcLeft = document.getElementById("magicMissileSplosionNpcLeft");
const $magicMissileSplosionNpcRight = document.getElementById("magicMissileSplosionNpcRight");
const $star_0NpcLeft = document.getElementById("star_0NpcLeft");
const $star_0NpcRight = document.getElementById("star_0NpcRight");
const $star_1NpcLeft = document.getElementById("star_1NpcLeft");
const $star_1NpcRight = document.getElementById("star_1NpcRight");
const $star_2NpcLeft = document.getElementById("star_2NpcLeft");
const $star_2NpcRight = document.getElementById("star_2NpcRight");
const $star_3NpcLeft = document.getElementById("star_3NpcLeft");
const $star_3NpcRight = document.getElementById("star_3NpcRight");
const $star_4NpcLeft= document.getElementById("star_4NpcLeft");
const $star_4NpcRight= document.getElementById("star_4NpcRight");

//pc greyWiz

const $greyWizArmPcDefaultLeft = document.getElementById("greyWizArmPcDefaultLeft");
const $greyWizArmPcDefaultRight = document.getElementById("greyWizArmPcDefaultRight");
const $greyWizArmPcDefendLeft = document.getElementById("greyWizArmPcDefendLeft");
const $greyWizArmPcDefendRight = document.getElementById("greyWizArmPcDefendRight");
const $greyWizPcWithoutArms = document.getElementById("greyWizPcWithoutArms");
const $greyWizPcStruckLeft = document.getElementById("greyWizPcStruckLeft");
const $greyWizPcStruckRight = document.getElementById("greyWizPcStruckRight");

//npc greyWiz

const $greyWizArmNpcDefaultLeft = document.getElementById("greyWizArmNpcDefaultLeft");
const $greyWizArmNpcDefaultRight = document.getElementById("greyWizArmNpcDefaultRight");
const $greyWizArmNpcDefendLeft = document.getElementById("greyWizArmNpcDefendLeft");
const $greyWizArmNpcDefendRight = document.getElementById("greyWizArmNpcDefendRight");
const $greyWizNpcWithoutArms = document.getElementById("greyWizNpcWithoutArms");
const $greyWizNpcWithoutHands = document.getElementById("greyWizNpcWithoutHands");
const $greyWizHandNpcDefaultLeft = document.getElementById("greyWizHandNpcDefaultLeft");
const $greyWizHandNpc15DegreesLeft = document.getElementById("greyWizHandNpc15DegreesLeft");
const $greyWizHandNpc30DegreesLeft = document.getElementById("greyWizHandNpc30DegreesLeft");
const $greyWizHandNpc45DegreesLeft = document.getElementById("greyWizHandNpc45DegreesLeft");
const $greyWizHandNpcDefaultRight = document.getElementById("greyWizHandNpcDefaultRight");
const $greyWizHandNpc345DegreesRight = document.getElementById("greyWizHandNpc345DegreesRight");
const $greyWizHandNpc330DegreesRight = document.getElementById("greyWizHandNpc330DegreesRight");
const $greyWizHandNpc315DegreesRight = document.getElementById("greyWizHandNpc315DegreesRight");
const $protrudingFireworkTop_0NpcLeft = document.getElementById("protrudingFireworkTop_0NpcLeft");
const $protrudingFireworkTop_1NpcLeft = document.getElementById("protrudingFireworkTop_1NpcLeft");
const $protrudingFireworkTop_2NpcLeft = document.getElementById("protrudingFireworkTop_2NpcLeft");
const $protrudingFireworkTop_3NpcLeft = document.getElementById("protrudingFireworkTop_3NpcLeft");
const $protrudingFireworkTop_4NpcLeft = document.getElementById("protrudingFireworkTop_4NpcLeft");
const $protrudingFireworkTop_5NpcLeft = document.getElementById("protrudingFireworkTop_5NpcLeft");
const $protrudingFireworkTop_6NpcLeft = document.getElementById("protrudingFireworkTop_6NpcLeft");
const $protrudingFireworkTop_7NpcLeft = document.getElementById("protrudingFireworkTop_7NpcLeft");
const $protrudingFireworkMiddle_0NpcLeft = document.getElementById("protrudingFireworkMiddle_0NpcLeft");
const $protrudingFireworkMiddle_1NpcLeft = document.getElementById("protrudingFireworkMiddle_1NpcLeft");
const $protrudingFireworkMiddle_2NpcLeft = document.getElementById("protrudingFireworkMiddle_2NpcLeft");
const $protrudingFireworkMiddle_3NpcLeft = document.getElementById("protrudingFireworkMiddle_3NpcLeft");
const $protrudingFireworkMiddle_4NpcLeft = document.getElementById("protrudingFireworkMiddle_4NpcLeft");
const $protrudingFireworkMiddle_5NpcLeft = document.getElementById("protrudingFireworkMiddle_5NpcLeft");
const $protrudingFireworkMiddle_6NpcLeft = document.getElementById("protrudingFireworkMiddle_6NpcLeft");
const $protrudingFireworkMiddle_7NpcLeft = document.getElementById("protrudingFireworkMiddle_7NpcLeft");
const $protrudingFireworkBottom_0NpcLeft = document.getElementById("protrudingFireworkBottom_0NpcLeft");
const $protrudingFireworkBottom_1NpcLeft = document.getElementById("protrudingFireworkBottom_1NpcLeft");
const $protrudingFireworkBottom_2NpcLeft = document.getElementById("protrudingFireworkBottom_2NpcLeft");
const $protrudingFireworkBottom_3NpcLeft = document.getElementById("protrudingFireworkBottom_3NpcLeft");
const $protrudingFireworkBottom_4NpcLeft = document.getElementById("protrudingFireworkBottom_4NpcLeft");
const $protrudingFireworkBottom_5NpcLeft = document.getElementById("protrudingFireworkBottom_5NpcLeft");
const $protrudingFireworkBottom_6NpcLeft = document.getElementById("protrudingFireworkBottom_6NpcLeft");
const $protrudingFireworkBottom_7NpcLeft = document.getElementById("protrudingFireworkBottom_7NpcLeft");
const $topFirework_0NpcLeft = document.getElementById("topFirework_0NpcLeft");
const $topFirework_1NpcLeft = document.getElementById("topFirework_1NpcLeft");
const $topFirework_2NpcLeft = document.getElementById("topFirework_2NpcLeft");
const $topFirework_3NpcLeft = document.getElementById("topFirework_3NpcLeft");
const $topFirework_4NpcLeft = document.getElementById("topFirework_4NpcLeft");
const $topFirework_5NpcLeft = document.getElementById("topFirework_5NpcLeft");
const $topFirework_6NpcLeft = document.getElementById("topFirework_6NpcLeft");
const $middleFirework_0NpcLeft = document.getElementById("middleFirework_0NpcLeft");
const $middleFirework_1NpcLeft = document.getElementById("middleFirework_1NpcLeft");
const $middleFirework_2NpcLeft = document.getElementById("middleFirework_2NpcLeft");
const $topFirework_3Z_1NpcLeft = document.getElementById("topFirework_3Z_1NpcLeft");
const $middleFirework_3NpcLeft = document.getElementById("middleFirework_3NpcLeft");
const $middleFirework_4NpcLeft = document.getElementById("middleFirework_4NpcLeft");
const $middleFirework_5NpcLeft = document.getElementById("middleFirework_5NpcLeft");
const $bottomFirework_0NpcLeft = document.getElementById("bottomFirework_0NpcLeft");
const $bottomFirework_1NpcLeft = document.getElementById("bottomFirework_1NpcLeft");
const $middleFirework_2Z_2NpcLeft = document.getElementById("middleFirework_2Z_2NpcLeft");
const $bottomFirework_2NpcLeft = document.getElementById("bottomFirework_2NpcLeft");
const $middleFirework_3Z_2NpcLeft = document.getElementById("middleFirework_3Z_2NpcLeft");
const $topFirework_4Z_1NpcLeft = document.getElementById("topFirework_4Z_1NpcLeft");
const $bottomFirework_3NpcLeft = document.getElementById("bottomFirework_3NpcLeft");
const $middleFirework_4Z_2NpcLeft = document.getElementById("middleFirework_4Z_2NpcLeft");
const $topFirework_5Z_1NpcLeft = document.getElementById("topFirework_5Z_1NpcLeft");
const $bottomFirework_4NpcLeft = document.getElementById("bottomFirework_4NpcLeft");
const $middleFirework_5Z_4NpcLeft = document.getElementById("middleFirework_5Z_4NpcLeft");
const $topFirework_6Z_3NpcLeft = document.getElementById("topFirework_6Z_3NpcLeft");
const $middleFirework_5Z_2NpcLeft = document.getElementById("middleFirework_5Z_2NpcLeft");
const $topFirework_6Z_1NpcLeft = document.getElementById("topFirework_6Z_1NpcLeft");
const $axeFireworkExplosionNpcLeft = document.getElementById("axeFireworkExplosionNpcLeft");
const $axeSmokeFull_10NpcLeft = document.getElementById("axeSmokeFull-10NpcLeft");
const $axeSmokeFull_9NpcLeft = document.getElementById("axeSmokeFull-9NpcLeft");
const $axeSmokeFull_8NpcLeft = document.getElementById("axeSmokeFull-8NpcLeft");
const $axeSmokeFull_7NpcLeft = document.getElementById("axeSmokeFull-7NpcLeft");
const $axeSmokeFull_6NpcLeft = document.getElementById("axeSmokeFull-6NpcLeft");
const $axeSmokeFull_5NpcLeft = document.getElementById("axeSmokeFull-5NpcLeft");
const $axeSmokeFull_4NpcLeft = document.getElementById("axeSmokeFull-4NpcLeft");
const $axeSmokeFull_3NpcLeft = document.getElementById("axeSmokeFull-3NpcLeft");
const $axeSmokeFull_2NpcLeft = document.getElementById("axeSmokeFull-2NpcLeft");
const $axeSmokeFull_1NpcLeft = document.getElementById("axeSmokeFull-1NpcLeft");
const $axeSmokeFullNpcLeft = document.getElementById("axeSmokeFullNpcLeft");
const $bowFireworkExplosionNpcLeft = document.getElementById("bowFireworkExplosionNpcLeft");
const $bowSmokeFull_10NpcLeft = document.getElementById("bowSmokeFull-10NpcLeft");
const $bowSmokeFull_9NpcLeft = document.getElementById("bowSmokeFull-9NpcLeft");
const $bowSmokeFull_8NpcLeft = document.getElementById("bowSmokeFull-8NpcLeft");
const $bowSmokeFull_7NpcLeft = document.getElementById("bowSmokeFull-7NpcLeft");
const $bowSmokeFull_6NpcLeft = document.getElementById("bowSmokeFull-6NpcLeft");
const $bowSmokeFull_5NpcLeft = document.getElementById("bowSmokeFull-5NpcLeft");
const $bowSmokeFull_4NpcLeft = document.getElementById("bowSmokeFull-4NpcLeft");
const $bowSmokeFull_3NpcLeft = document.getElementById("bowSmokeFull-3NpcLeft");
const $bowSmokeFull_2NpcLeft = document.getElementById("bowSmokeFull-2NpcLeft");
const $bowSmokeFull_1NpcLeft = document.getElementById("bowSmokeFull-1NpcLeft");
const $bowSmokeFullNpcLeft = document.getElementById("bowSmokeFullNpcLeft");
const $swordFireworkExplosionNpcLeft = document.getElementById("swordFireworkExplosionNpcLeft");
const $swordSmokeFull_10NpcLeft = document.getElementById("swordSmokeFull-10NpcLeft");
const $swordSmokeFull_9NpcLeft = document.getElementById("swordSmokeFull-9NpcLeft");
const $swordSmokeFull_8NpcLeft = document.getElementById("swordSmokeFull-8NpcLeft");
const $swordSmokeFull_7NpcLeft = document.getElementById("swordSmokeFull-7NpcLeft");
const $swordSmokeFull_6NpcLeft = document.getElementById("swordSmokeFull-6NpcLeft");
const $swordSmokeFull_5NpcLeft = document.getElementById("swordSmokeFull-5NpcLeft");
const $swordSmokeFull_4NpcLeft = document.getElementById("swordSmokeFull-4NpcLeft");
const $swordSmokeFull_3NpcLeft = document.getElementById("swordSmokeFull-3NpcLeft");
const $swordSmokeFull_2NpcLeft = document.getElementById("swordSmokeFull-2NpcLeft");
const $swordSmokeFull_1NpcLeft = document.getElementById("swordSmokeFull-1NpcLeft");
const $swordSmokeFullNpcLeft = document.getElementById("swordSmokeFullNpcLeft");
const $axeBowFireworkExplosionNpcLeft = document.getElementById("axeBowFireworkExplosionNpcLeft");
const $axeBowSmokeFull_10NpcLeft = document.getElementById("axeBowSmokeFull-10NpcLeft");
const $axeBowSmokeFull_9NpcLeft = document.getElementById("axeBowSmokeFull-9NpcLeft");
const $axeBowSmokeFull_8NpcLeft = document.getElementById("axeBowSmokeFull-8NpcLeft");
const $axeBowSmokeFull_7NpcLeft = document.getElementById("axeBowSmokeFull-7NpcLeft");
const $axeBowSmokeFull_6NpcLeft = document.getElementById("axeBowSmokeFull-6NpcLeft");
const $axeBowSmokeFull_5NpcLeft = document.getElementById("axeBowSmokeFull-5NpcLeft");
const $axeBowSmokeFull_4NpcLeft = document.getElementById("axeBowSmokeFull-4NpcLeft");
const $axeBowSmokeFull_3NpcLeft = document.getElementById("axeBowSmokeFull-3NpcLeft");
const $axeBowSmokeFull_2NpcLeft = document.getElementById("axeBowSmokeFull-2NpcLeft");
const $axeBowSmokeFull_1NpcLeft = document.getElementById("axeBowSmokeFull-1NpcLeft");
const $axeBowSmokeFullNpcLeft = document.getElementById("axeBowSmokeFullNpcLeft");
const $axeSwordFireworkExplosionNpcLeft = document.getElementById("axeSwordFireworkExplosionNpcLeft");
const $axeSwordSmokeFull_10NpcLeft = document.getElementById("axeSwordSmokeFull-10NpcLeft");
const $axeSwordSmokeFull_9NpcLeft = document.getElementById("axeSwordSmokeFull-9NpcLeft");
const $axeSwordSmokeFull_8NpcLeft = document.getElementById("axeSwordSmokeFull-8NpcLeft");
const $axeSwordSmokeFull_7NpcLeft = document.getElementById("axeSwordSmokeFull-7NpcLeft");
const $axeSwordSmokeFull_6NpcLeft = document.getElementById("axeSwordSmokeFull-6NpcLeft");
const $axeSwordSmokeFull_5NpcLeft = document.getElementById("axeSwordSmokeFull-5NpcLeft");
const $axeSwordSmokeFull_4NpcLeft = document.getElementById("axeSwordSmokeFull-4NpcLeft");
const $axeSwordSmokeFull_3NpcLeft = document.getElementById("axeSwordSmokeFull-3NpcLeft");
const $axeSwordSmokeFull_2NpcLeft = document.getElementById("axeSwordSmokeFull-2NpcLeft");
const $axeSwordSmokeFull_1NpcLeft = document.getElementById("axeSwordSmokeFull-1NpcLeft");
const $axeSwordSmokeFullNpcLeft = document.getElementById("axeSwordSmokeFullNpcLeft");
const $bowSwordFireworkExplosionNpcLeft = document.getElementById("bowSwordFireworkExplosionNpcLeft");
const $bowSwordSmokeFull_10NpcLeft = document.getElementById("bowSwordSmokeFull-10NpcLeft");
const $bowSwordSmokeFull_9NpcLeft = document.getElementById("bowSwordSmokeFull-9NpcLeft");
const $bowSwordSmokeFull_8NpcLeft = document.getElementById("bowSwordSmokeFull-8NpcLeft");
const $bowSwordSmokeFull_7NpcLeft = document.getElementById("bowSwordSmokeFull-7NpcLeft");
const $bowSwordSmokeFull_6NpcLeft = document.getElementById("bowSwordSmokeFull-6NpcLeft");
const $bowSwordSmokeFull_5NpcLeft = document.getElementById("bowSwordSmokeFull-5NpcLeft");
const $bowSwordSmokeFull_4NpcLeft = document.getElementById("bowSwordSmokeFull-4NpcLeft");
const $bowSwordSmokeFull_3NpcLeft = document.getElementById("bowSwordSmokeFull-3NpcLeft");
const $bowSwordSmokeFull_2NpcLeft = document.getElementById("bowSwordSmokeFull-2NpcLeft");
const $bowSwordSmokeFull_1NpcLeft = document.getElementById("bowSwordSmokeFull-1NpcLeft");
const $bowSwordSmokeFullNpcLeft = document.getElementById("bowSwordSmokeFullNpcLeft");
const $axeBowSwordFireworkExplosionNpcLeft = document.getElementById("axeBowSwordFireworkExplosionNpcLeft");
const $axeBowSwordSmokeFull_10NpcLeft = document.getElementById("axeBowSwordSmokeFull-10NpcLeft");
const $axeBowSwordSmokeFull_9NpcLeft = document.getElementById("axeBowSwordSmokeFull-9NpcLeft");
const $axeBowSwordSmokeFull_8NpcLeft = document.getElementById("axeBowSwordSmokeFull-8NpcLeft");
const $axeBowSwordSmokeFull_7NpcLeft = document.getElementById("axeBowSwordSmokeFull-7NpcLeft");
const $axeBowSwordSmokeFull_6NpcLeft = document.getElementById("axeBowSwordSmokeFull-6NpcLeft");
const $axeBowSwordSmokeFull_5NpcLeft = document.getElementById("axeBowSwordSmokeFull-5NpcLeft");
const $axeBowSwordSmokeFull_4NpcLeft = document.getElementById("axeBowSwordSmokeFull-4NpcLeft");
const $axeBowSwordSmokeFull_3NpcLeft = document.getElementById("axeBowSwordSmokeFull-3NpcLeft");
const $axeBowSwordSmokeFull_2NpcLeft = document.getElementById("axeBowSwordSmokeFull-2NpcLeft");
const $axeBowSwordSmokeFull_1NpcLeft = document.getElementById("axeBowSwordSmokeFull-1NpcLeft");
const $axeBowSwordSmokeFullNpcLeft = document.getElementById("axeBowSwordSmokeFullNpcLeft");
const $fireworkAxeNpcLeft = document.getElementById("fireworkAxeNpcLeft");
const $fireworkBowNpcLeft = document.getElementById("fireworkBowNpcLeft");
const $fireworkSwordNpcLeft = document.getElementById("fireworkSwordNpcLeft");
const $fireworkAxeShimmerNpcFullLeft = document.getElementById("fireworkAxeShimmerNpcFullLeft");
const $fireworkBowShimmerNpcFullLeft = document.getElementById("fireworkBowShimmerNpcFullLeft");
const $fireworkSwordShimmerNpcFullLeft = document.getElementById("fireworkSwordShimmerNpcFullLeft");
//const $ = document.getElementById("");

//pc redWiz

const $redWizPcDefendLeft = document.getElementById("redWizPcDefendLeft");
const $redWizPcDefendRight = document.getElementById("redWizPcDefendRight");
const $redWizPc = document.getElementById("redWizPc");
const $redWizPcStruckLeft = document.getElementById("redWizPcStruckLeft");
const $redWizPcStruckRight = document.getElementById("redWizPcStruckRight");

//npc redWiz

const $redWizNpcDefendLeft = document.getElementById("redWizNpcDefendLeft");
const $redWizNpcDefendRight = document.getElementById("redWizNpcDefendRight");
const $redWizNpc = document.getElementById("redWizNpc");
const $redWizNpcStruckLeft = document.getElementById("redWizNpcStruckLeft");
const $redWizNpcStruckRight = document.getElementById("redWizNpcStruckRight");

var init = () => {
    $whiteBackground.setAttribute("class", "visible")    
}

//Initial Character Setup And Final Removal

var setSceneWithBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")    
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "visible")    
}

var cleanSceneOfGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithGreyNpc = () => {   
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
}

var cleanSceneOfGreyNpc = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithRedPc = () => {
    $redWizPc.setAttribute("class", "visible")    
}

var cleanSceneOfRedPc = () => {
    $redWizPc.setAttribute("class", "hidden")    
}

var setSceneWithRedNpc = () => {
    $redWizNpc.setAttribute("class", "visible")
}

var cleanSceneOfRedNpc = () => {
    $redWizNpc.setAttribute("class", "hidden")
}

//pc blueWiz

var blueWizPcDefendsLeft = () => {
    $blueWizArmPcDefendLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcDefendsRight = () => {
    $blueWizArmPcDefendRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcAttacksLeft = () => {
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcAttacksRight = () => {
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcClenchsLeft = () => {
    $blueWizArmPcClenchLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")    
}

var blueWizPcClenchsRight = () => {
    $blueWizArmPcClenchRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden")    
}

var blueWizPcRestsArmLeft = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")  
    $blueWizArmPcDefendLeft.setAttribute("class", "hidden")   
}

var blueWizPcRestsArmRight = () => {
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden") 
    $blueWizArmPcDefendRight.setAttribute("class", "hidden")    
}

var magicMissileFiresPcLeft = () => {
    $magicMissile_0PcLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcClenchLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcLeft.setAttribute("class", "hidden")
}

var magicMissileFiresPcRight = () => {
    $magicMissile_0PcRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcClenchRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcRight.setAttribute("class", "hidden")
}

var magicMissileFires2PcLeft = () => {
    $magicMissile_1PcLeft.setAttribute("class", "visible")
    $magicMissile_0PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2PcRight = () => {
    $magicMissile_1PcRight.setAttribute("class", "visible")
    $magicMissile_0PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3PcLeft = () => {
    $magicMissile_2PcLeft.setAttribute("class", "visible")
    $magicMissile_1PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3PcRight = () => {
    $magicMissile_2PcRight.setAttribute("class", "visible")
    $magicMissile_1PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4PcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "visible")
    $magicMissile_2PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4PcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "visible")
    $magicMissile_2PcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesPcLeft = () => {
    $magicMissileCondensation_0PcLeft.setAttribute("class", "visible")
    $star_4PcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesPcRight = () => {
    $magicMissileCondensation_0PcRight.setAttribute("class", "visible")
    $star_4PcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2PcLeft = () => {
    $magicMissileCondensation_1PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2PcRight = () => {
    $magicMissileCondensation_1PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcLeft = () => {
    $magicMissileCondensation_2PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcRight = () => {
    $magicMissileCondensation_2PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcLeft = () => {
    $magicMissileCondensation_3PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcRight = () => {
    $magicMissileCondensation_3PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcLeft = () => {
    $magicMissileCondensation_4PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcRight = () => {
    $magicMissileCondensation_4PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcLeft = () => {
    $magicMissileCondensation_5PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcRight = () => {
    $magicMissileCondensation_5PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4PcRight.setAttribute("class", "hidden")        
}

var magicMissilePcDeflectedLeft = () => {
    $magicMissilePcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3PcLeft.setAttribute("class", "hidden")
}

var magicMissilePcDeflectedRight = () => {
    $magicMissilePcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3PcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "visible")
    $magicMissilePcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "visible")
    $magicMissilePcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionPcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesPcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "hidden")
    $magicMissileSplosionPcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesPcLeft = () => {
    $magicMissileSplosionPcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcRight = () => {
    $magicMissileSplosionPcRight.setAttribute("class", "hidden")
}

var starFormsPcLeft = () => {
    $star_0PcLeft.setAttribute("class", "visible")
}

var starFormsPcRight = () => {
    $star_0PcRight.setAttribute("class", "visible")
}

var starForms2PcLeft = () => {
    $star_1PcLeft.setAttribute("class", "visible")
    $star_0PcLeft.setAttribute("class", "hidden")
}

var starForms2PcRight = () => {
    $star_1PcRight.setAttribute("class", "visible")
    $star_0PcRight.setAttribute("class", "hidden")
}

var starForms3PcLeft = () => {
    $star_2PcLeft.setAttribute("class", "visible")
    $star_1PcLeft.setAttribute("class", "hidden")
}

var starForms3PcRight = () => {
    $star_2PcRight.setAttribute("class", "visible")
    $star_1PcRight.setAttribute("class", "hidden")
}

var starForms4PcLeft = () => {
    $star_3PcLeft.setAttribute("class", "visible")
    $star_2PcLeft.setAttribute("class", "hidden")
}

var starForms4PcRight = () => {
    $star_3PcRight.setAttribute("class", "visible")
    $star_2PcRight.setAttribute("class", "hidden")
}

var starForms5PcLeft = () => {
    $star_4PcLeft.setAttribute("class", "visible")
    $star_3PcLeft.setAttribute("class", "hidden")
}

var starForms5PcRight = () => {
    $star_4PcRight.setAttribute("class", "visible")
    $star_3PcRight.setAttribute("class", "hidden")
}

//npc blueWiz

var blueWizNpcDefendsLeft = () => {
    $blueWizArmNpcDefendLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var blueWizNpcDefendsRight = () => {
    $blueWizArmNpcDefendRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var blueWizNpcAttacksLeft = () => {
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizNpcAttacksRight = () => {
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
}

var blueWizNpcClenchsLeft = () => {
    $blueWizArmNpcClenchLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "hidden")
}

var blueWizNpcClenchsRight = () => {
    $blueWizArmNpcClenchRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcRight.setAttribute("class", "hidden")    
}

var blueWizNpcRestsArmLeft = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var blueWizNpcRestsArmRight = () => {
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $blueWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

var magicMissileFiresNpcLeft = () => {
    $magicMissile_0NpcLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcClenchLeft.setAttribute("class", "hidden")
}

var magicMissileFiresNpcRight = () => {
    $magicMissile_0NpcRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcClenchRight.setAttribute("class", "hidden")
}

var magicMissileFires2NpcLeft = () => {
    $magicMissile_1NpcLeft.setAttribute("class", "visible")
    $magicMissile_0NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2NpcRight = () => {
    $magicMissile_1NpcRight.setAttribute("class", "visible")
    $magicMissile_0NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcLeft = () => {
    $magicMissile_2NpcLeft.setAttribute("class", "visible")
    $magicMissile_1NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcRight = () => {
    $magicMissile_2NpcRight.setAttribute("class", "visible")
    $magicMissile_1NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "visible")
    $magicMissile_2NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "visible")
    $magicMissile_2NpcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesNpcLeft = () => {
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "visible")
    $star_4NpcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesNpcRight = () => {
    $magicMissileCondensation_0NpcRight.setAttribute("class", "visible")
    $star_4NpcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2NpcLeft = () => {
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2NpcRight = () => {
    $magicMissileCondensation_1NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcLeft = () => {
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcRight = () => {
    $magicMissileCondensation_2NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcLeft = () => {
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcRight = () => {
    $magicMissileCondensation_3NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcLeft = () => {
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcRight = () => {
    $magicMissileCondensation_4NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcLeft = () => {
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcRight = () => {
    $magicMissileCondensation_5NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcRight.setAttribute("class", "hidden")        
}

var magicMissileNpcDeflectedLeft = () => {
    $magicMissileNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")
}

var magicMissileNpcDeflectedRight = () => {
    $magicMissileNpcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissileNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "visible")
    $magicMissileNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionNpcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesNpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
    $magicMissileSplosionNpcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesNpcLeft = () => {
    $magicMissileSplosionNpcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcRight = () => {
    $magicMissileSplosionNpcRight.setAttribute("class", "hidden")
}

var starFormsNpcLeft = () => {
    $star_0NpcLeft.setAttribute("class", "visible")
}

var starFormsNpcRight = () => {
    $star_0NpcRight.setAttribute("class", "visible")
}

var starForms2NpcLeft = () => {
    $star_1NpcLeft.setAttribute("class", "visible")
    $star_0NpcLeft.setAttribute("class", "hidden")
}

var starForms2NpcRight = () => {
    $star_1NpcRight.setAttribute("class", "visible")
    $star_0NpcRight.setAttribute("class", "hidden")
}

var starForms3NpcLeft = () => {
    $star_2NpcLeft.setAttribute("class", "visible")
    $star_1NpcLeft.setAttribute("class", "hidden")
}

var starForms3NpcRight = () => {
    $star_2NpcRight.setAttribute("class", "visible")
    $star_1NpcRight.setAttribute("class", "hidden")
}

var starForms4NpcLeft = () => {
    $star_3NpcLeft.setAttribute("class", "visible")
    $star_2NpcLeft.setAttribute("class", "hidden")
}

var starForms4NpcRight = () => {
    $star_3NpcRight.setAttribute("class", "visible")
    $star_2NpcRight.setAttribute("class", "hidden")
}

var starForms5NpcLeft = () => {
    $star_4NpcLeft.setAttribute("class", "visible")
    $star_3NpcLeft.setAttribute("class", "hidden")
}

var starForms5NpcRight = () => {
    $star_4NpcRight.setAttribute("class", "visible")
    $star_3NpcRight.setAttribute("class", "hidden")
}

//pc greyWiz

var greyWizPcDefendsLeft = () => {
    $greyWizArmPcDefendLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizPcDefendsRight = () => {
    $greyWizArmPcDefendRight.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizPcRestsArmLeft = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizPcRestsArmRight = () => {
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizArmPcDefendRight.setAttribute("class", "hidden")     
}

var greyWizPcStruckLeft = () => {
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefendRight.setAttribute("class", "hidden")    
    $greyWizPcStruckLeft.setAttribute("class", "visible")
}

var greyWizPcStruckRight = () => {
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefendLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizPcStruckRight.setAttribute("class", "visible")
}

var greyWizPcRegainsComposureLeft = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")    
    $greyWizPcStruckLeft.setAttribute("class", "hidden")
}

var greyWizPcRegainsComposureRight = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcStruckRight.setAttribute("class", "hidden")
}

//npc greyWiz

var greyWizNpcDefendsLeft = () => {
    $greyWizArmNpcDefendLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizNpcDefendsRight = () => {
    $greyWizArmNpcDefendRight.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizNpcRestsArmLeft = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizNpcRestsArmRight = () => {
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

var greyWizArmNpcRotationForAttack_0Left = () => {
    $greyWizNpcWithoutHands.setAttribute("class", "visible")
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
}

var greyWizArmNpcRotationForAttack_1Left = () => {
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationForAttack_2Left = () => {
    $greyWizHandNpc45DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_0Left = () => {        
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpc45DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_1Left = () => {
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "hidden")        
}

var greyWizArmNpcRotationBackFromAttack_2Left = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "hidden")
    $greyWizHandNpcDefaultRight.setAttribute("class", "hidden")    
}

// axe Scenario

var axeProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesNpcLeft = () => {
    $axeFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0NpcLeft = () => {
    $axeSmokeFull_10NpcLeft.setAttribute("class", "visible")
    $axeFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1NpcLeft = () => {
    $axeSmokeFull_9NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_10NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2NpcLeft = () => {
    $axeSmokeFull_8NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_9NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3NpcLeft = () => {
    $axeSmokeFull_7NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_8NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4NpcLeft = () => {
    $axeSmokeFull_6NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_7NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5NpcLeft = () => {
    $axeSmokeFull_5NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_6NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6NpcLeft = () => {
    $axeSmokeFull_4NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_5NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7NpcLeft = () => {
    $axeSmokeFull_3NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_4NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8NpcLeft = () => {
    $axeSmokeFull_2NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_3NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9NpcLeft = () => {
    $axeSmokeFull_1NpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_2NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10NpcLeft = () => {
    $axeSmokeFullNpcLeft.setAttribute("class", "visible")        
    $axeSmokeFull_1NpcLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $axeSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

// bow Scenario

var bowProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesNpcLeft = () => {
    $bowFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0NpcLeft = () => {
    $bowSmokeFull_10NpcLeft.setAttribute("class", "visible")
    $bowFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1NpcLeft = () => {
    $bowSmokeFull_9NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_10NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2NpcLeft = () => {
    $bowSmokeFull_8NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_9NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3NpcLeft = () => {
    $bowSmokeFull_7NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_8NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4NpcLeft = () => {
    $bowSmokeFull_6NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_7NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5NpcLeft = () => {
    $bowSmokeFull_5NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_6NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6NpcLeft = () => {
    $bowSmokeFull_4NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_5NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7NpcLeft = () => {
    $bowSmokeFull_3NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_4NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8NpcLeft = () => {
    $bowSmokeFull_2NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_3NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9NpcLeft = () => {
    $bowSmokeFull_1NpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_2NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10NpcLeft = () => {
    $bowSmokeFullNpcLeft.setAttribute("class", "visible")        
    $bowSmokeFull_1NpcLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $bowSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

// sword Scenario

var swordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesNpcLeft = () => {
    $swordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0NpcLeft = () => {
    $swordSmokeFull_10NpcLeft.setAttribute("class", "visible")
    $swordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1NpcLeft = () => {
    $swordSmokeFull_9NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_10NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2NpcLeft = () => {
    $swordSmokeFull_8NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_9NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3NpcLeft = () => {
    $swordSmokeFull_7NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_8NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4NpcLeft = () => {
    $swordSmokeFull_6NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_7NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5NpcLeft = () => {
    $swordSmokeFull_5NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_6NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6NpcLeft = () => {
    $swordSmokeFull_4NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_5NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7NpcLeft = () => {
    $swordSmokeFull_3NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_4NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8NpcLeft = () => {
    $swordSmokeFull_2NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_3NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9NpcLeft = () => {
    $swordSmokeFull_1NpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_2NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10NpcLeft = () => {
    $swordSmokeFullNpcLeft.setAttribute("class", "visible")        
    $swordSmokeFull_1NpcLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var swordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $swordSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

// axeBow Scenario

var axeBowProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesNpcLeft = () => {
    $axeBowFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0NpcLeft = () => {
    $axeBowSmokeFull_10NpcLeft.setAttribute("class", "visible")
    $axeBowFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1NpcLeft = () => {
    $axeBowSmokeFull_9NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_10NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2NpcLeft = () => {
    $axeBowSmokeFull_8NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_9NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3NpcLeft = () => {
    $axeBowSmokeFull_7NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_8NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4NpcLeft = () => {
    $axeBowSmokeFull_6NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_7NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5NpcLeft = () => {
    $axeBowSmokeFull_5NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6NpcLeft = () => {
    $axeBowSmokeFull_4NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7NpcLeft = () => {
    $axeBowSmokeFull_3NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8NpcLeft = () => {
    $axeBowSmokeFull_2NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9NpcLeft = () => {
    $axeBowSmokeFull_1NpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10NpcLeft = () => {
    $axeBowSmokeFullNpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeFull_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $axeBowSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

// axeSword Scenario

var axeSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesNpcLeft = () => {
    $axeSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0NpcLeft = () => {
    $axeSwordSmokeFull_10NpcLeft.setAttribute("class", "visible")
    $axeSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1NpcLeft = () => {
    $axeSwordSmokeFull_9NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_10NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2NpcLeft = () => {
    $axeSwordSmokeFull_8NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_9NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3NpcLeft = () => {
    $axeSwordSmokeFull_7NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_8NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4NpcLeft = () => {
    $axeSwordSmokeFull_6NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_7NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5NpcLeft = () => {
    $axeSwordSmokeFull_5NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_6NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6NpcLeft = () => {
    $axeSwordSmokeFull_4NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_5NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7NpcLeft = () => {
    $axeSwordSmokeFull_3NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_4NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8NpcLeft = () => {
    $axeSwordSmokeFull_2NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_3NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9NpcLeft = () => {
    $axeSwordSmokeFull_1NpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_2NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10NpcLeft = () => {
    $axeSwordSmokeFullNpcLeft.setAttribute("class", "visible")        
    $axeSwordSmokeFull_1NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $axeSwordSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

// bowSword Scenario

var bowSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesNpcLeft = () => {
    $bowSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0NpcLeft = () => {
    $bowSwordSmokeFull_10NpcLeft.setAttribute("class", "visible")
    $bowSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1NpcLeft = () => {
    $bowSwordSmokeFull_9NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_10NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2NpcLeft = () => {
    $bowSwordSmokeFull_8NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_9NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3NpcLeft = () => {
    $bowSwordSmokeFull_7NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_8NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4NpcLeft = () => {
    $bowSwordSmokeFull_6NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_7NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5NpcLeft = () => {
    $bowSwordSmokeFull_5NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_6NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6NpcLeft = () => {
    $bowSwordSmokeFull_4NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_5NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7NpcLeft = () => {
    $bowSwordSmokeFull_3NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_4NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8NpcLeft = () => {
    $bowSwordSmokeFull_2NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_3NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9NpcLeft = () => {
    $bowSwordSmokeFull_1NpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_2NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10NpcLeft = () => {
    $bowSwordSmokeFullNpcLeft.setAttribute("class", "visible")        
    $bowSwordSmokeFull_1NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $bowSwordSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

// axeBowSword Scenario

var axeBowSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesNpcLeft = () => {
    $axeBowSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0NpcLeft = () => {
    $axeBowSwordSmokeFull_10NpcLeft.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1NpcLeft = () => {
    $axeBowSwordSmokeFull_9NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_10NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2NpcLeft = () => {
    $axeBowSwordSmokeFull_8NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_9NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3NpcLeft = () => {
    $axeBowSwordSmokeFull_7NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_8NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4NpcLeft = () => {
    $axeBowSwordSmokeFull_6NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_7NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5NpcLeft = () => {
    $axeBowSwordSmokeFull_5NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6NpcLeft = () => {
    $axeBowSwordSmokeFull_4NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7NpcLeft = () => {
    $axeBowSwordSmokeFull_3NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8NpcLeft = () => {
    $axeBowSwordSmokeFull_2NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9NpcLeft = () => {
    $axeBowSwordSmokeFull_1NpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10NpcLeft = () => {
    $axeBowSwordSmokeFullNpcLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeFull_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $axeBowSwordSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

//pc redWiz

var redWizPcDefendsLeft = () => {
    $redWizPcDefendLeft.setAttribute("class", "visible")
}

var redWizPcDefendsRight = () => {
    $redWizPcDefendRight.setAttribute("class", "visible")
}

var redWizPcRestsLeft = () => {    
    $redWizPcDefendLeft.setAttribute("class", "hidden")     
}

var redWizPcRestsRight = () => {    
    $redWizPcDefendRight.setAttribute("class", "hidden")     
}

var redWizPcStruckLeft = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendRight.setAttribute("class", "hidden")
    $redWizPcStruckLeft.setAttribute("class", "visible")
}

var redWizPcStruckRight = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendLeft.setAttribute("class", "hidden")
    $redWizPcStruckRight.setAttribute("class", "visible")
}

var redWizPcRegainsComposureLeft = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckLeft.setAttribute("class", "hidden")
}

var redWizPcRegainsComposureRight = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckRight.setAttribute("class", "hidden")
}

//npc redWiz

var redWizNpcDefendsLeft = () => {
    $redWizNpcDefendLeft.setAttribute("class", "visible")
}

var redWizNpcDefendsRight = () => {
    $redWizNpcDefendRight.setAttribute("class", "visible")
}

var redWizNpcRestsLeft = () => {    
    $redWizNpcDefendLeft.setAttribute("class", "hidden")     
}

var redWizNpcRestsRight = () => {    
    $redWizNpcDefendRight.setAttribute("class", "hidden")     
}

var redWizNpcStruckLeft = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendRight.setAttribute("class", "hidden")
    $redWizNpcStruckLeft.setAttribute("class", "visible")
}

var redWizNpcStruckRight = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendLeft.setAttribute("class", "hidden")
    $redWizNpcStruckRight.setAttribute("class", "visible")
}

var redWizNpcRegainsComposureLeft = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckLeft.setAttribute("class", "hidden")
}

var redWizNpcRegainsComposureRight = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckRight.setAttribute("class", "hidden")
}

window.onload = init;

//greyPcDefendRightGreyNpcAttackLeft axe

setTimeout(greyWizPcBackground, 1);
setTimeout(setSceneWithGreyPc, 2);
setTimeout(setSceneWithGreyNpc, 3);
setTimeout(greyWizPcDefendsRight, 200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 800);
setTimeout(axeProtrudingFlyingFireworks_0NpcLeft, 950);
setTimeout(axeProtrudingFlyingFireworks_1NpcLeft, 1100);
setTimeout(axeProtrudingFlyingFireworks_2NpcLeft, 1300);
setTimeout(axeProtrudingFlyingFireworks_3NpcLeft, 1500);
setTimeout(axeProtrudingFlyingFireworks_4NpcLeft, 1700);
setTimeout(axeProtrudingFlyingFireworks_5NpcLeft, 1900);
setTimeout(axeProtrudingFlyingFireworks_6NpcLeft, 2100);
setTimeout(axeProtrudingFlyingFireworks_7NpcLeft, 2350);
setTimeout(axeProtrudingFlyingFireworks_8NpcLeft, 2600);
setTimeout(axeProtrudingFlyingFireworks_9NpcLeft, 2850);
setTimeout(axeProtrudingFlyingFireworks_10NpcLeft, 3100);
setTimeout(axeProtrudingFlyingFireworks_11NpcLeft, 3350);
setTimeout(axeProtrudingFlyingFireworks_12NpcLeft, 3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 3601);
setTimeout(axeProtrudingFlyingFireworks_13NpcLeft, 3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 3851);
setTimeout(axeProtrudingFlyingFireworks_14NpcLeft, 4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 4101);
setTimeout(axeFireworkExplodesNpcLeft, 4400);
setTimeout(greyWizPcStruckLeft, 4401);
setTimeout(axeFireworkDisplays_0NpcLeft, 4700);
setTimeout(axeFireworkDisplays_1NpcLeft, 4790);
setTimeout(axeFireworkDisplays_2NpcLeft, 4880);
setTimeout(axeFireworkDisplays_3NpcLeft, 4970);
setTimeout(axeFireworkDisplays_4NpcLeft, 5060);
setTimeout(axeFireworkDisplays_5NpcLeft, 5150);
setTimeout(axeFireworkDisplays_6NpcLeft, 5240);
setTimeout(greyWizPcRegainsComposureLeft, 5330);
setTimeout(axeFireworkDisplays_7NpcLeft, 5420);
setTimeout(axeFireworkDisplays_8NpcLeft, 5510);
setTimeout(axeFireworkDisplays_9NpcLeft, 5600);
setTimeout(axeFireworkDisplays_10NpcLeft, 5601);
setTimeout(axeFireworkDisplays_11NpcLeft, 5690);
setTimeout(axeFireworkDisplays_12NpcLeft, 5800);
setTimeout(axeFireworkDisplays_13NpcLeft, 5910);
setTimeout(axeFireworkDisplays_14NpcLeft, 6020);
setTimeout(cleanSceneOfGreyPc, 6100);
setTimeout(cleanSceneOfGreyNpc, 6101);

//greyPcDefendRightGreyNpcAttackLeft bow

setTimeout(greyWizPcBackground, 6151+1);
setTimeout(setSceneWithGreyPc, 6151+2);
setTimeout(setSceneWithGreyNpc, 6151+3);
setTimeout(greyWizPcDefendsRight, 6151+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 6151+400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 6151+600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 6151+800);
setTimeout(bowProtrudingFlyingFireworks_0NpcLeft, 6151+950);
setTimeout(bowProtrudingFlyingFireworks_1NpcLeft, 6151+1100);
setTimeout(bowProtrudingFlyingFireworks_2NpcLeft, 6151+1300);
setTimeout(bowProtrudingFlyingFireworks_3NpcLeft, 6151+1500);
setTimeout(bowProtrudingFlyingFireworks_4NpcLeft, 6151+1700);
setTimeout(bowProtrudingFlyingFireworks_5NpcLeft, 6151+1900);
setTimeout(bowProtrudingFlyingFireworks_6NpcLeft, 6151+2100);
setTimeout(bowProtrudingFlyingFireworks_7NpcLeft, 6151+2350);
setTimeout(bowProtrudingFlyingFireworks_8NpcLeft, 6151+2600);
setTimeout(bowProtrudingFlyingFireworks_9NpcLeft, 6151+2850);
setTimeout(bowProtrudingFlyingFireworks_10NpcLeft, 6151+3100);
setTimeout(bowProtrudingFlyingFireworks_11NpcLeft, 6151+3350);
setTimeout(bowProtrudingFlyingFireworks_12NpcLeft, 6151+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 6151+3601);
setTimeout(bowProtrudingFlyingFireworks_13NpcLeft, 6151+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 6151+3851);
setTimeout(bowProtrudingFlyingFireworks_14NpcLeft, 6151+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 6151+4101);
setTimeout(bowFireworkExplodesNpcLeft, 6151+4400);
setTimeout(greyWizPcStruckLeft, 6151+4401);
setTimeout(bowFireworkDisplays_0NpcLeft, 6151+4700);
setTimeout(bowFireworkDisplays_1NpcLeft, 6151+4790);
setTimeout(bowFireworkDisplays_2NpcLeft, 6151+4880);
setTimeout(bowFireworkDisplays_3NpcLeft, 6151+4970);
setTimeout(bowFireworkDisplays_4NpcLeft, 6151+5060);
setTimeout(bowFireworkDisplays_5NpcLeft, 6151+5150);
setTimeout(bowFireworkDisplays_6NpcLeft, 6151+5240);
setTimeout(bowFireworkDisplays_7NpcLeft, 6151+5330);
setTimeout(bowFireworkDisplays_8NpcLeft, 6151+5420);
setTimeout(bowFireworkDisplays_9NpcLeft, 6151+5510);
setTimeout(bowFireworkDisplays_10NpcLeft, 6151+5600);
setTimeout(greyWizPcRegainsComposureLeft, 6151+5601);
setTimeout(bowFireworkDisplays_11NpcLeft, 6151+5690);
setTimeout(bowFireworkDisplays_12NpcLeft, 6151+5800);
setTimeout(bowFireworkDisplays_13NpcLeft, 6151+5910);
setTimeout(bowFireworkDisplays_14NpcLeft, 6151+6020);
setTimeout(cleanSceneOfGreyPc, 6151+6100);
setTimeout(cleanSceneOfGreyNpc, 6151+6101);

//greyPcDefendRightGreyNpcAttackLeft sword

setTimeout(greyWizPcBackground, 12302+1);
setTimeout(setSceneWithGreyPc, 12302+2);
setTimeout(setSceneWithGreyNpc, 12302+3);
setTimeout(greyWizPcDefendsRight, 12302+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 12302+400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 12302+600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 12302+800);
setTimeout(swordProtrudingFlyingFireworks_0NpcLeft, 12302+950);
setTimeout(swordProtrudingFlyingFireworks_1NpcLeft, 12302+1100);
setTimeout(swordProtrudingFlyingFireworks_2NpcLeft, 12302+1300);
setTimeout(swordProtrudingFlyingFireworks_3NpcLeft, 12302+1500);
setTimeout(swordProtrudingFlyingFireworks_4NpcLeft, 12302+1700);
setTimeout(swordProtrudingFlyingFireworks_5NpcLeft, 12302+1900);
setTimeout(swordProtrudingFlyingFireworks_6NpcLeft, 12302+2100);
setTimeout(swordProtrudingFlyingFireworks_7NpcLeft, 12302+2350);
setTimeout(swordProtrudingFlyingFireworks_8NpcLeft, 12302+2600);
setTimeout(swordProtrudingFlyingFireworks_9NpcLeft, 12302+2850);
setTimeout(swordProtrudingFlyingFireworks_10NpcLeft, 12302+3100);
setTimeout(swordProtrudingFlyingFireworks_11NpcLeft, 12302+3350);
setTimeout(swordProtrudingFlyingFireworks_12NpcLeft, 12302+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 12302+3601);
setTimeout(swordProtrudingFlyingFireworks_13NpcLeft, 12302+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 12302+3851);
setTimeout(swordProtrudingFlyingFireworks_14NpcLeft, 12302+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 12302+4101);
setTimeout(swordFireworkExplodesNpcLeft, 12302+4400);
setTimeout(greyWizPcStruckLeft, 12302+4401);
setTimeout(swordFireworkDisplays_0NpcLeft, 12302+4700);
setTimeout(swordFireworkDisplays_1NpcLeft, 12302+4790);
setTimeout(swordFireworkDisplays_2NpcLeft, 12302+4880);
setTimeout(swordFireworkDisplays_3NpcLeft, 12302+4970);
setTimeout(swordFireworkDisplays_4NpcLeft, 12302+5060);
setTimeout(swordFireworkDisplays_5NpcLeft, 12302+5150);
setTimeout(swordFireworkDisplays_6NpcLeft, 12302+5240);
setTimeout(swordFireworkDisplays_7NpcLeft, 12302+5330);
setTimeout(swordFireworkDisplays_8NpcLeft, 12302+5420);
setTimeout(swordFireworkDisplays_9NpcLeft, 12302+5510);
setTimeout(swordFireworkDisplays_10NpcLeft, 12302+5600);
setTimeout(greyWizPcRegainsComposureLeft, 12302+5601);
setTimeout(swordFireworkDisplays_11NpcLeft, 12302+5690);
setTimeout(swordFireworkDisplays_12NpcLeft, 12302+5800);
setTimeout(swordFireworkDisplays_13NpcLeft, 12302+5910);
setTimeout(swordFireworkDisplays_14NpcLeft, 12302+6020);
setTimeout(cleanSceneOfGreyPc, 12302+6100);
setTimeout(cleanSceneOfGreyNpc, 12302+6101);

//greyPcDefendRightGreyNpcAttackLeft axeBow

setTimeout(greyWizPcBackground, 18453+1);
setTimeout(setSceneWithGreyPc, 18453+2);
setTimeout(setSceneWithGreyNpc, 18453+3);
setTimeout(greyWizPcDefendsRight, 18453+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 18453+400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 18453+600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 18453+800);
setTimeout(axeBowProtrudingFlyingFireworks_0NpcLeft, 18453+950);
setTimeout(axeBowProtrudingFlyingFireworks_1NpcLeft, 18453+1100);
setTimeout(axeBowProtrudingFlyingFireworks_2NpcLeft, 18453+1300);
setTimeout(axeBowProtrudingFlyingFireworks_3NpcLeft, 18453+1500);
setTimeout(axeBowProtrudingFlyingFireworks_4NpcLeft, 18453+1700);
setTimeout(axeBowProtrudingFlyingFireworks_5NpcLeft, 18453+1900);
setTimeout(axeBowProtrudingFlyingFireworks_6NpcLeft, 18453+2100);
setTimeout(axeBowProtrudingFlyingFireworks_7NpcLeft, 18453+2350);
setTimeout(axeBowProtrudingFlyingFireworks_8NpcLeft, 18453+2600);
setTimeout(axeBowProtrudingFlyingFireworks_9NpcLeft, 18453+2850);
setTimeout(axeBowProtrudingFlyingFireworks_10NpcLeft, 18453+3100);
setTimeout(axeBowProtrudingFlyingFireworks_11NpcLeft, 18453+3350);
setTimeout(axeBowProtrudingFlyingFireworks_12NpcLeft, 18453+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 18453+3601);
setTimeout(axeBowProtrudingFlyingFireworks_13NpcLeft, 18453+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 18453+3851);
setTimeout(axeBowProtrudingFlyingFireworks_14NpcLeft, 18453+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 18453+4101);
setTimeout(axeBowFireworkExplodesNpcLeft, 18453+4400);
setTimeout(greyWizPcStruckLeft, 18453+4401);
setTimeout(axeBowFireworkDisplays_0NpcLeft, 18453+4700);
setTimeout(axeBowFireworkDisplays_1NpcLeft, 18453+4790);
setTimeout(axeBowFireworkDisplays_2NpcLeft, 18453+4880);
setTimeout(axeBowFireworkDisplays_3NpcLeft, 18453+4970);
setTimeout(axeBowFireworkDisplays_4NpcLeft, 18453+5060);
setTimeout(axeBowFireworkDisplays_5NpcLeft, 18453+5150);
setTimeout(axeBowFireworkDisplays_6NpcLeft, 18453+5240);
setTimeout(axeBowFireworkDisplays_7NpcLeft, 18453+5330);
setTimeout(axeBowFireworkDisplays_8NpcLeft, 18453+5420);
setTimeout(axeBowFireworkDisplays_9NpcLeft, 18453+5510);
setTimeout(axeBowFireworkDisplays_10NpcLeft, 18453+5600);
setTimeout(greyWizPcRegainsComposureLeft, 18453+5601);
setTimeout(axeBowFireworkDisplays_11NpcLeft, 18453+5690);
setTimeout(axeBowFireworkDisplays_12NpcLeft, 18453+5800);
setTimeout(axeBowFireworkDisplays_13NpcLeft, 18453+5910);
setTimeout(axeBowFireworkDisplays_14NpcLeft, 18453+6020);
setTimeout(cleanSceneOfGreyPc, 18453+6100);
setTimeout(cleanSceneOfGreyNpc, 18453+6101);

//greyPcDefendRightGreyNpcAttackLeft axeSword

setTimeout(greyWizPcBackground, 24604+1);
setTimeout(setSceneWithGreyPc, 24604+2);
setTimeout(setSceneWithGreyNpc, 24604+3);
setTimeout(greyWizPcDefendsRight, 24604+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 24604+400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 24604+600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 24604+800);
setTimeout(axeSwordProtrudingFlyingFireworks_0NpcLeft, 24604+950);
setTimeout(axeSwordProtrudingFlyingFireworks_1NpcLeft, 24604+1100);
setTimeout(axeSwordProtrudingFlyingFireworks_2NpcLeft, 24604+1300);
setTimeout(axeSwordProtrudingFlyingFireworks_3NpcLeft, 24604+1500);
setTimeout(axeSwordProtrudingFlyingFireworks_4NpcLeft, 24604+1700);
setTimeout(axeSwordProtrudingFlyingFireworks_5NpcLeft, 24604+1900);
setTimeout(axeSwordProtrudingFlyingFireworks_6NpcLeft, 24604+2100);
setTimeout(axeSwordProtrudingFlyingFireworks_7NpcLeft, 24604+2350);
setTimeout(axeSwordProtrudingFlyingFireworks_8NpcLeft, 24604+2600);
setTimeout(axeSwordProtrudingFlyingFireworks_9NpcLeft, 24604+2850);
setTimeout(axeSwordProtrudingFlyingFireworks_10NpcLeft, 24604+3100);
setTimeout(axeSwordProtrudingFlyingFireworks_11NpcLeft, 24604+3350);
setTimeout(axeSwordProtrudingFlyingFireworks_12NpcLeft, 24604+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 24604+3601);
setTimeout(axeSwordProtrudingFlyingFireworks_13NpcLeft, 24604+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 24604+3851);
setTimeout(axeSwordProtrudingFlyingFireworks_14NpcLeft, 24604+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 24604+4101);
setTimeout(axeSwordFireworkExplodesNpcLeft, 24604+4400);
setTimeout(greyWizPcStruckLeft, 24604+4401);
setTimeout(axeSwordFireworkDisplays_0NpcLeft, 24604+4700);
setTimeout(axeSwordFireworkDisplays_1NpcLeft, 24604+4790);
setTimeout(axeSwordFireworkDisplays_2NpcLeft, 24604+4880);
setTimeout(axeSwordFireworkDisplays_3NpcLeft, 24604+4970);
setTimeout(axeSwordFireworkDisplays_4NpcLeft, 24604+5060);
setTimeout(axeSwordFireworkDisplays_5NpcLeft, 24604+5150);
setTimeout(axeSwordFireworkDisplays_6NpcLeft, 24604+5240);
setTimeout(axeSwordFireworkDisplays_7NpcLeft, 24604+5330);
setTimeout(axeSwordFireworkDisplays_8NpcLeft, 24604+5420);
setTimeout(axeSwordFireworkDisplays_9NpcLeft, 24604+5510);
setTimeout(axeSwordFireworkDisplays_10NpcLeft, 24604+5600);
setTimeout(greyWizPcRegainsComposureLeft, 24604+5601);
setTimeout(axeSwordFireworkDisplays_11NpcLeft, 24604+5690);
setTimeout(axeSwordFireworkDisplays_12NpcLeft, 24604+5800);
setTimeout(axeSwordFireworkDisplays_13NpcLeft, 24604+5910);
setTimeout(axeSwordFireworkDisplays_14NpcLeft, 24604+6020);
setTimeout(cleanSceneOfGreyPc, 24604+6100);
setTimeout(cleanSceneOfGreyNpc, 24604+6101);

//greyPcDefendRightGreyNpcAttackLeft bowSword

setTimeout(greyWizPcBackground, 30755+1);
setTimeout(setSceneWithGreyPc, 30755+2);
setTimeout(setSceneWithGreyNpc, 30755+3);
setTimeout(greyWizPcDefendsRight, 30755+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 30755+400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 30755+600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 30755+800);
setTimeout(bowSwordProtrudingFlyingFireworks_0NpcLeft, 30755+950);
setTimeout(bowSwordProtrudingFlyingFireworks_1NpcLeft, 30755+1100);
setTimeout(bowSwordProtrudingFlyingFireworks_2NpcLeft, 30755+1300);
setTimeout(bowSwordProtrudingFlyingFireworks_3NpcLeft, 30755+1500);
setTimeout(bowSwordProtrudingFlyingFireworks_4NpcLeft, 30755+1700);
setTimeout(bowSwordProtrudingFlyingFireworks_5NpcLeft, 30755+1900);
setTimeout(bowSwordProtrudingFlyingFireworks_6NpcLeft, 30755+2100);
setTimeout(bowSwordProtrudingFlyingFireworks_7NpcLeft, 30755+2350);
setTimeout(bowSwordProtrudingFlyingFireworks_8NpcLeft, 30755+2600);
setTimeout(bowSwordProtrudingFlyingFireworks_9NpcLeft, 30755+2850);
setTimeout(bowSwordProtrudingFlyingFireworks_10NpcLeft, 30755+3100);
setTimeout(bowSwordProtrudingFlyingFireworks_11NpcLeft, 30755+3350);
setTimeout(bowSwordProtrudingFlyingFireworks_12NpcLeft, 30755+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 30755+3601);
setTimeout(bowSwordProtrudingFlyingFireworks_13NpcLeft, 30755+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 30755+3851);
setTimeout(bowSwordProtrudingFlyingFireworks_14NpcLeft, 30755+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 30755+4101);
setTimeout(bowSwordFireworkExplodesNpcLeft, 30755+4400);
setTimeout(greyWizPcStruckLeft, 30755+4401);
setTimeout(bowSwordFireworkDisplays_0NpcLeft, 30755+4700);
setTimeout(bowSwordFireworkDisplays_1NpcLeft, 30755+4790);
setTimeout(bowSwordFireworkDisplays_2NpcLeft, 30755+4880);
setTimeout(bowSwordFireworkDisplays_3NpcLeft, 30755+4970);
setTimeout(bowSwordFireworkDisplays_4NpcLeft, 30755+5060);
setTimeout(bowSwordFireworkDisplays_5NpcLeft, 30755+5150);
setTimeout(bowSwordFireworkDisplays_6NpcLeft, 30755+5240);
setTimeout(bowSwordFireworkDisplays_7NpcLeft, 30755+5330);
setTimeout(bowSwordFireworkDisplays_8NpcLeft, 30755+5420);
setTimeout(bowSwordFireworkDisplays_9NpcLeft, 30755+5510);
setTimeout(bowSwordFireworkDisplays_10NpcLeft, 30755+5600);
setTimeout(greyWizPcRegainsComposureLeft, 30755+5601);
setTimeout(bowSwordFireworkDisplays_11NpcLeft, 30755+5690);
setTimeout(bowSwordFireworkDisplays_12NpcLeft, 30755+5800);
setTimeout(bowSwordFireworkDisplays_13NpcLeft, 30755+5910);
setTimeout(bowSwordFireworkDisplays_14NpcLeft, 30755+6020);
setTimeout(cleanSceneOfGreyPc, 30755+6100);
setTimeout(cleanSceneOfGreyNpc, 30755+6101);

//greyPcDefendRightGreyNpcAttackLeft axeBowSword

setTimeout(greyWizPcBackground, 36906+1);
setTimeout(setSceneWithGreyPc, 36906+2);
setTimeout(setSceneWithGreyNpc, 36906+3);
setTimeout(greyWizPcDefendsRight, 36906+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 36906+400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 36906+600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 36906+800);
setTimeout(axeBowSwordProtrudingFlyingFireworks_0NpcLeft, 36906+950);
setTimeout(axeBowSwordProtrudingFlyingFireworks_1NpcLeft, 36906+1100);
setTimeout(axeBowSwordProtrudingFlyingFireworks_2NpcLeft, 36906+1300);
setTimeout(axeBowSwordProtrudingFlyingFireworks_3NpcLeft, 36906+1500);
setTimeout(axeBowSwordProtrudingFlyingFireworks_4NpcLeft, 36906+1700);
setTimeout(axeBowSwordProtrudingFlyingFireworks_5NpcLeft, 36906+1900);
setTimeout(axeBowSwordProtrudingFlyingFireworks_6NpcLeft, 36906+2100);
setTimeout(axeBowSwordProtrudingFlyingFireworks_7NpcLeft, 36906+2350);
setTimeout(axeBowSwordProtrudingFlyingFireworks_8NpcLeft, 36906+2600);
setTimeout(axeBowSwordProtrudingFlyingFireworks_9NpcLeft, 36906+2850);
setTimeout(axeBowSwordProtrudingFlyingFireworks_10NpcLeft, 36906+3100);
setTimeout(axeBowSwordProtrudingFlyingFireworks_11NpcLeft, 36906+3350);
setTimeout(axeBowSwordProtrudingFlyingFireworks_12NpcLeft, 36906+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 36906+3601);
setTimeout(axeBowSwordProtrudingFlyingFireworks_13NpcLeft, 36906+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 36906+3851);
setTimeout(axeBowSwordProtrudingFlyingFireworks_14NpcLeft, 36906+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 36906+4101);
setTimeout(axeBowSwordFireworkExplodesNpcLeft, 36906+4400);
setTimeout(greyWizPcStruckLeft, 36906+4401);
setTimeout(axeBowSwordFireworkDisplays_0NpcLeft, 36906+4700);
setTimeout(axeBowSwordFireworkDisplays_1NpcLeft, 36906+4790);
setTimeout(axeBowSwordFireworkDisplays_2NpcLeft, 36906+4880);
setTimeout(axeBowSwordFireworkDisplays_3NpcLeft, 36906+4970);
setTimeout(axeBowSwordFireworkDisplays_4NpcLeft, 36906+5060);
setTimeout(axeBowSwordFireworkDisplays_5NpcLeft, 36906+5150);
setTimeout(axeBowSwordFireworkDisplays_6NpcLeft, 36906+5240);
setTimeout(axeBowSwordFireworkDisplays_7NpcLeft, 36906+5330);
setTimeout(axeBowSwordFireworkDisplays_8NpcLeft, 36906+5420);
setTimeout(axeBowSwordFireworkDisplays_9NpcLeft, 36906+5510);
setTimeout(axeBowSwordFireworkDisplays_10NpcLeft, 36906+5600);
setTimeout(greyWizPcRegainsComposureLeft, 36906+5601);
setTimeout(axeBowSwordFireworkDisplays_11NpcLeft, 36906+5690);
setTimeout(axeBowSwordFireworkDisplays_12NpcLeft, 36906+5800);
setTimeout(axeBowSwordFireworkDisplays_13NpcLeft, 36906+5910);
setTimeout(axeBowSwordFireworkDisplays_14NpcLeft, 36906+6020);
setTimeout(cleanSceneOfGreyPc, 36906+6100);
setTimeout(cleanSceneOfGreyNpc, 36906+6101);

// bluePcDefendLeftBlueNpcAttackLeft

// setTimeout(blueWizPcBackground, 32008+1);
// setTimeout(setSceneWithBluePc, 32008+2);
// setTimeout(setSceneWithBlueNpc, 32008+3);
// setTimeout(blueWizPcDefendsLeft, 32008+500);
// setTimeout(blueWizNpcAttacksLeft, 32008+1000);
// setTimeout(starFormsNpcLeft, 32008+1250);
// setTimeout(starForms2NpcLeft, 32008+1500);
// setTimeout(starForms3NpcLeft, 32008+1750);
// setTimeout(starForms4NpcLeft, 32008+2000);
// setTimeout(starForms5NpcLeft, 32008+2250);
// setTimeout(magicMissileCondensesNpcLeft, 32008+2750);
// setTimeout(magicMissileCondenses2NpcLeft, 32008+3000);
// setTimeout(magicMissileCondenses3NpcLeft, 32008+3250);
// setTimeout(magicMissileCondenses4NpcLeft, 32008+3500);
// setTimeout(magicMissileCondenses5NpcLeft, 32008+3750);
// setTimeout(magicMissileCondenses6NpcLeft, 32008+4000);
// setTimeout(blueWizNpcClenchsLeft, 32008+4500);
// setTimeout(magicMissileFiresNpcLeft, 32008+5000);
// setTimeout(magicMissileFires2NpcLeft, 32008+5400);
// setTimeout(magicMissileFires3NpcLeft, 32008+5800);
// setTimeout(magicMissileFires4NpcLeft, 32008+6200);
// setTimeout(magicMissileNpcDeflectedLeft, 32008+6600);
// setTimeout(blueWizNpcRestsArmLeft, 32008+6650);
// setTimeout(magicMissileExplodesNpcDeflectedLeft, 32008+7000);
// setTimeout(blueWizPcRestsArmLeft, 32008+7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedLeft, 32008+8000);
// setTimeout(cleanSceneOfBluePc, 32008+8001);
// setTimeout(cleanSceneOfBlueNpc, 32008+8002);

// bluePcAttackLeftBlueNpcDefendLeft

// setTimeout(setSceneWithBluePc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(blueWizNpcDefendsLeft, 500);
// setTimeout(blueWizPcAttacksLeft, 1000);
// setTimeout(starFormsPcLeft, 1250);
// setTimeout(starForms2PcLeft, 1500);
// setTimeout(starForms3PcLeft, 1750);
// setTimeout(starForms4PcLeft, 2000);
// setTimeout(starForms5PcLeft, 2250);
// setTimeout(magicMissileCondensesPcLeft, 8002+2750);
// setTimeout(magicMissileCondenses2PcLeft, 8002+3000);
// setTimeout(magicMissileCondenses3PcLeft, 8002+3250);
// setTimeout(magicMissileCondenses4PcLeft, 8002+3500);
// setTimeout(magicMissileCondenses5PcLeft, 8002+3750);
// setTimeout(magicMissileCondenses6PcLeft, 8002+4000);
// setTimeout(blueWizPcClenchsLeft, 8002+4500);
// setTimeout(magicMissileFiresPcLeft, 8002+5000);
// setTimeout(magicMissileFires2PcLeft, 8002+5400);
// setTimeout(magicMissileFires3PcLeft, 8002+5800);
// setTimeout(magicMissileFires4PcLeft, 8002+6200);
// setTimeout(magicMissilePcDeflectedLeft, 8002+6600);
// setTimeout(blueWizPcRestsArmLeft, 8002+6650);
// setTimeout(magicMissileExplodesPcDeflectedLeft, 8002+7000);
// setTimeout(blueWizNpcRestsArmLeft, 8002+7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedLeft, 8002+8000);
// setTimeout(cleanSceneOfBluePc, 8002+8001);
// setTimeout(cleanSceneOfBlueNpc, 8002+8002);

// bluePcAttackRightBlueNpcDefendRight

// setTimeout(blueWizPcBackground, 8002+1);
// setTimeout(setSceneWithBluePc, 8002+2);
// setTimeout(setSceneWithBlueNpc, 8002+3);
// setTimeout(blueWizNpcDefendsRight, 8002+500);
// setTimeout(blueWizPcAttacksRight, 8002+1000);
// setTimeout(starFormsPcRight, 8002+1250);
// setTimeout(starForms2PcRight, 8002+1500);
// setTimeout(starForms3PcRight, 8002+1750);
// setTimeout(starForms4PcRight, 8002+2000);
// setTimeout(starForms5PcRight, 8002+2250);
// setTimeout(magicMissileCondensesPcRight, 8002+2750);
// setTimeout(magicMissileCondenses2PcRight, 8002+3000);
// setTimeout(magicMissileCondenses3PcRight, 8002+3250);
// setTimeout(magicMissileCondenses4PcRight, 8002+3500);
// setTimeout(magicMissileCondenses5PcRight, 8002+3750);
// setTimeout(magicMissileCondenses6PcRight, 8002+4000);
// setTimeout(blueWizPcClenchsRight, 8002+4500);
// setTimeout(magicMissileFiresPcRight, 8002+5000);
// setTimeout(magicMissileFires2PcRight, 8002+5400);
// setTimeout(magicMissileFires3PcRight, 8002+5800);
// setTimeout(magicMissileFires4PcRight, 8002+6200);
// setTimeout(magicMissilePcDeflectedRight, 8002+6600);
// setTimeout(blueWizPcRestsArmRight, 8002+6650);
// setTimeout(magicMissileExplodesPcDeflectedRight, 8002+7000);
// setTimeout(blueWizNpcRestsArmRight, 8002+7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedRight, 8002+8000);
// setTimeout(cleanSceneOfBluePc, 8002+8001);
// setTimeout(cleanSceneOfBlueNpc, 8002+8002);

// bluePcAttackLeftGreyNpcDefendLeft

// setTimeout(blueWizPcBackground, 1);
// setTimeout(setSceneWithBluePc, 2);
// setTimeout(setSceneWithGreyNpc, 3);
// setTimeout(greyWizNpcDefendsLeft, 500);
// setTimeout(blueWizPcAttacksLeft, 1000);
// setTimeout(starFormsPcLeft, 1250);
// setTimeout(starForms2PcLeft, 1500);
// setTimeout(starForms3PcLeft, 1750);
// setTimeout(starForms4PcLeft, 2000);
// setTimeout(starForms5PcLeft, 2250);
// setTimeout(magicMissileCondensesPcLeft, 2750);
// setTimeout(magicMissileCondenses2PcLeft, 3000);
// setTimeout(magicMissileCondenses3PcLeft, 3250);
// setTimeout(magicMissileCondenses4PcLeft, 3500);
// setTimeout(magicMissileCondenses5PcLeft, 3750);
// setTimeout(magicMissileCondenses6PcLeft, 4000);
// setTimeout(blueWizPcClenchsLeft, 4500);
// setTimeout(magicMissileFiresPcLeft, 5000);
// setTimeout(magicMissileFires2PcLeft, 5400);
// setTimeout(magicMissileFires3PcLeft, 5800);
// setTimeout(magicMissileFires4PcLeft, 6200);
// setTimeout(magicMissilePcDeflectedLeft, 6600);
// setTimeout(blueWizPcRestsArmLeft, 6650);
// setTimeout(magicMissileExplodesPcDeflectedLeft, 7000);
// setTimeout(greyWizNpcRestsArmLeft, 7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedLeft, 8000);
// setTimeout(cleanSceneOfBluePc, 8001);
// setTimeout(cleanSceneOfGreyNpc, 8002);

// bluePcAttackRightGreyNpcDefendRight

// setTimeout(setSceneWithBluePc, 1);
// setTimeout(setSceneWithGreyNpc, 2);
// setTimeout(greyWizNpcDefendsRight, 500);
// setTimeout(blueWizPcAttacksRight, 1000);
// setTimeout(starFormsPcRight, 1250);
// setTimeout(starForms2PcRight, 1500);
// setTimeout(starForms3PcRight, 1750);
// setTimeout(starForms4PcRight, 2000);
// setTimeout(starForms5PcRight, 2250);
// setTimeout(magicMissileCondensesPcRight, 2750);
// setTimeout(magicMissileCondenses2PcRight, 3000);
// setTimeout(magicMissileCondenses3PcRight, 3250);
// setTimeout(magicMissileCondenses4PcRight, 3500);
// setTimeout(magicMissileCondenses5PcRight, 3750);
// setTimeout(magicMissileCondenses6PcRight, 4000);
// setTimeout(blueWizPcClenchsRight, 4500);
// setTimeout(magicMissileFiresPcRight, 5000);
// setTimeout(magicMissileFires2PcRight, 5400);
// setTimeout(magicMissileFires3PcRight, 5800);
// setTimeout(magicMissileFires4PcRight, 6200);
// setTimeout(magicMissilePcDeflectedRight, 6600);
// setTimeout(blueWizPcRestsArmRight, 6650);
// setTimeout(magicMissileExplodesPcDeflectedRight, 7000);
// setTimeout(greyWizNpcRestsArmRight, 7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedRight, 8000);
// setTimeout(cleanSceneOfBluePc, 8001);
// setTimeout(cleanSceneOfGreyNpc, 8002);

// bluePcAttackLeftRedNpcDefendLeft

// setTimeout(setSceneWithBluePc, 16004+1);
// setTimeout(setSceneWithRedNpc, 16004+2);
// setTimeout(redWizNpcDefendsLeft, 16004+500);
// setTimeout(blueWizPcAttacksLeft, 16004+1000);
// setTimeout(starFormsPcLeft, 16004+1250);
// setTimeout(starForms2PcLeft, 16004+1500);
// setTimeout(starForms3PcLeft, 16004+1750);
// setTimeout(starForms4PcLeft, 16004+2000);
// setTimeout(starForms5PcLeft, 16004+2250);
// setTimeout(magicMissileCondensesPcLeft, 16004+2750);
// setTimeout(magicMissileCondenses2PcLeft, 16004+3000);
// setTimeout(magicMissileCondenses3PcLeft, 16004+3250);
// setTimeout(magicMissileCondenses4PcLeft, 16004+3500);
// setTimeout(magicMissileCondenses5PcLeft, 16004+3750);
// setTimeout(magicMissileCondenses6PcLeft, 16004+4000);
// setTimeout(blueWizPcClenchsLeft, 16004+4500);
// setTimeout(magicMissileFiresPcLeft, 16004+5000);
// setTimeout(magicMissileFires2PcLeft, 16004+5400);
// setTimeout(magicMissileFires3PcLeft, 16004+5800);
// setTimeout(magicMissileFires4PcLeft, 16004+6200);
// setTimeout(magicMissilePcDeflectedLeft, 16004+6600);
// setTimeout(blueWizPcRestsArmLeft, 16004+6650);
// setTimeout(magicMissileExplodesPcDeflectedLeft, 16004+7000);
// setTimeout(redWizNpcRestsLeft, 16004+7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedLeft, 16004+8000);
// setTimeout(cleanSceneOfBluePc, 16004+8001);
// setTimeout(cleanSceneOfRedNpc, 16004+8002);

// bluePcAttackLeftRedNpcDefendRight

// setTimeout(blueWizPcBackground, 16004+1);
// setTimeout(setSceneWithBluePc, 16004+2);
// setTimeout(setSceneWithRedNpc, 16004+3);
// setTimeout(redWizNpcDefendsRight, 16004+500);
// setTimeout(blueWizPcAttacksLeft, 16004+1000);
// setTimeout(starFormsPcLeft, 16004+1250);
// setTimeout(starForms2PcLeft, 16004+1500);
// setTimeout(starForms3PcLeft, 16004+1750);
// setTimeout(starForms4PcLeft, 16004+2000);
// setTimeout(starForms5PcLeft, 16004+2250);
// setTimeout(magicMissileCondensesPcLeft, 16004+2750);
// setTimeout(magicMissileCondenses2PcLeft, 16004+3000);
// setTimeout(magicMissileCondenses3PcLeft, 16004+3250);
// setTimeout(magicMissileCondenses4PcLeft, 16004+3500);
// setTimeout(magicMissileCondenses5PcLeft, 16004+3750);
// setTimeout(magicMissileCondenses6PcLeft, 16004+4000);
// setTimeout(blueWizPcClenchsLeft, 16004+4500);
// setTimeout(magicMissileFiresPcLeft, 16004+5000);
// setTimeout(magicMissileFires2PcLeft, 16004+5400);
// setTimeout(magicMissileFires3PcLeft, 16004+5800);
// setTimeout(magicMissileFires4PcLeft, 16004+6200);
// setTimeout(magicMissileExplodesPcLeft, 16004+6600); 
// setTimeout(redWizNpcStruckLeft,16004+6601);
// setTimeout(blueWizPcRestsArmLeft, 16004+6650);
// setTimeout(magicMissileExplosionDissipatesPcLeft, 16004+7780);
// setTimeout(redWizNpcRegainsComposureLeft, 16004+8000);
// setTimeout(cleanSceneOfBluePc, 16004+8001);
// setTimeout(cleanSceneOfRedNpc, 16004+8002);

// bluePcAttackRightRedNpcDefendLeft

// setTimeout(setSceneWithBluePc, 16004+1);
// setTimeout(setSceneWithRedNpc, 16004+2);
// setTimeout(redWizNpcDefendsLeft, 16004+500);
// setTimeout(blueWizPcAttacksRight, 16004+1000);
// setTimeout(starFormsPcRight, 16004+1250);
// setTimeout(starForms2PcRight, 16004+1500);
// setTimeout(starForms3PcRight, 16004+1750);
// setTimeout(starForms4PcRight, 16004+2000);
// setTimeout(starForms5PcRight, 16004+2250);
// setTimeout(magicMissileCondensesPcRight, 16004+2750);
// setTimeout(magicMissileCondenses2PcRight, 16004+3000);
// setTimeout(magicMissileCondenses3PcRight, 16004+3250);
// setTimeout(magicMissileCondenses4PcRight, 16004+3500);
// setTimeout(magicMissileCondenses5PcRight, 16004+3750);
// setTimeout(magicMissileCondenses6PcRight, 16004+4000);
// setTimeout(blueWizPcClenchsRight, 16004+4500);
// setTimeout(magicMissileFiresPcRight, 16004+5000);
// setTimeout(magicMissileFires2PcRight, 16004+5400);
// setTimeout(magicMissileFires3PcRight, 16004+5800);
// setTimeout(magicMissileFires4PcRight, 16004+6200);
// setTimeout(magicMissileExplodesPcRight, 16004+6600); 
// setTimeout(redWizNpcStruckRight,16004+6601);
// setTimeout(blueWizPcRestsArmRight, 16004+6650);
// setTimeout(magicMissileExplosionDissipatesPcRight, 16004+7780);
// setTimeout(redWizNpcRegainsComposureRight, 16004+8000);
// setTimeout(cleanSceneOfBluePc, 16004+8001);
// setTimeout(cleanSceneOfRedNpc, 16004+8002);

// setTimeout(, );

//bluePcAttackRightRedNpcDefendRight

// setTimeout(setSceneWithBluePc, 16004+1);
// setTimeout(setSceneWithRedNpc, 16004+2);
// setTimeout(redWizNpcDefendsRight, 16004+500);
// setTimeout(blueWizPcAttacksRight, 16004+1000);
// setTimeout(starFormsPcRight, 16004+1250);
// setTimeout(starForms2PcRight, 16004+1500);
// setTimeout(starForms3PcRight, 16004+1750);
// setTimeout(starForms4PcRight, 16004+2000);
// setTimeout(starForms5PcRight, 16004+2250);
// setTimeout(magicMissileCondensesPcRight, 16004+2750);
// setTimeout(magicMissileCondenses2PcRight, 16004+3000);
// setTimeout(magicMissileCondenses3PcRight, 16004+3250);
// setTimeout(magicMissileCondenses4PcRight, 16004+3500);
// setTimeout(magicMissileCondenses5PcRight, 16004+3750);
// setTimeout(magicMissileCondenses6PcRight, 16004+4000);
// setTimeout(blueWizPcClenchsRight, 16004+4500);
// setTimeout(magicMissileFiresPcRight, 16004+5000);
// setTimeout(magicMissileFires2PcRight, 16004+5400);
// setTimeout(magicMissileFires3PcRight, 16004+5800);
// setTimeout(magicMissileFires4PcRight, 16004+6200);
// setTimeout(magicMissilePcDeflectedRight, 16004+6600);
// setTimeout(blueWizPcRestsArmRight, 16004+6650);
// setTimeout(magicMissileExplodesPcDeflectedRight, 16004+7000);
// setTimeout(redWizNpcRestsRight, 16004+7400);
// setTimeout(magicMissileExplosionDissipatesPcDefendedRight, 16004+8000);
// setTimeout(cleanSceneOfBluePc, 16004+8001);
// setTimeout(cleanSceneOfRedNpc, 16004+8002);

// greyPcDefendLeftBlueNpcAttackLeft

// setTimeout(setSceneWithGreyPc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(greyWizPcDefendsLeft, 500);
// setTimeout(blueWizNpcAttacksLeft, 1000);
// setTimeout(starFormsNpcLeft, 1250);
// setTimeout(starForms2NpcLeft, 1500);
// setTimeout(starForms3NpcLeft, 1750);
// setTimeout(starForms4NpcLeft, 2000);
// setTimeout(starForms5NpcLeft, 2250);
// setTimeout(magicMissileCondensesNpcLeft, 2750);
// setTimeout(magicMissileCondenses2NpcLeft, 3000);
// setTimeout(magicMissileCondenses3NpcLeft, 3250);
// setTimeout(magicMissileCondenses4NpcLeft, 3500);
// setTimeout(magicMissileCondenses5NpcLeft, 3750);
// setTimeout(magicMissileCondenses6NpcLeft, 4000);
// setTimeout(blueWizNpcClenchsLeft, 4500);
// setTimeout(magicMissileFiresNpcLeft, 5000);
// setTimeout(magicMissileFires2NpcLeft, 5400);
// setTimeout(magicMissileFires3NpcLeft, 5800);
// setTimeout(magicMissileFires4NpcLeft, 6200);
// setTimeout(magicMissileNpcDeflectedLeft, 6600);
// setTimeout(blueWizNpcRestsArmLeft, 6650);
// setTimeout(magicMissileExplodesNpcDeflectedLeft, 7000);
// setTimeout(greyWizPcRestsArmLeft, 7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedLeft, 8000);
// setTimeout(cleanSceneOfGreyPc, 8001);
// setTimeout(cleanSceneOfBlueNpc, 8002);

// greyPcDefendRightBlueNpcAttackRight

// setTimeout(greyWizPcBackground, 24006+1);
// setTimeout(setSceneWithGreyPc, 24006+2);
// setTimeout(setSceneWithBlueNpc, 24006+3);
// setTimeout(greyWizPcDefendsRight, 24006+500);
// setTimeout(blueWizNpcAttacksRight, 24006+1000);
// setTimeout(starFormsNpcRight, 24006+1250);
// setTimeout(starForms2NpcRight, 24006+1500);
// setTimeout(starForms3NpcRight, 24006+1750);
// setTimeout(starForms4NpcRight, 24006+2000);
// setTimeout(starForms5NpcRight, 24006+2250);
// setTimeout(magicMissileCondensesNpcRight, 24006+2750);
// setTimeout(magicMissileCondenses2NpcRight, 24006+3000);
// setTimeout(magicMissileCondenses3NpcRight, 24006+3250);
// setTimeout(magicMissileCondenses4NpcRight, 24006+3500);
// setTimeout(magicMissileCondenses5NpcRight, 24006+3750);
// setTimeout(magicMissileCondenses6NpcRight, 24006+4000);
// setTimeout(blueWizNpcClenchsRight, 24006+4500);
// setTimeout(magicMissileFiresNpcRight, 24006+5000);
// setTimeout(magicMissileFires2NpcRight, 24006+5400);
// setTimeout(magicMissileFires3NpcRight, 24006+5800);
// setTimeout(magicMissileFires4NpcRight, 24006+6200);
// setTimeout(magicMissileNpcDeflectedRight, 24006+6600);
// setTimeout(blueWizNpcRestsArmRight, 24006+6650);
// setTimeout(magicMissileExplodesNpcDeflectedRight, 24006+7000);
// setTimeout(greyWizPcRestsArmRight, 24006+7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedRight, 24006+8000);
// setTimeout(cleanSceneOfGreyPc, 24006+8001);
// setTimeout(cleanSceneOfBlueNpc, 24006+8002);

// redPcDefendLeftBlueNpcAttackLeft

// setTimeout(setSceneWithRedPc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(redWizPcDefendsLeft, 500);
// setTimeout(blueWizNpcAttacksLeft, 1000);
// setTimeout(starFormsNpcLeft, 1250);
// setTimeout(starForms2NpcLeft, 1500);
// setTimeout(starForms3NpcLeft, 1750);
// setTimeout(starForms4NpcLeft, 2000);
// setTimeout(starForms5NpcLeft, 2250);
// setTimeout(magicMissileCondensesNpcLeft, 2750);
// setTimeout(magicMissileCondenses2NpcLeft, 3000);
// setTimeout(magicMissileCondenses3NpcLeft, 3250);
// setTimeout(magicMissileCondenses4NpcLeft, 3500);
// setTimeout(magicMissileCondenses5NpcLeft, 3750);
// setTimeout(magicMissileCondenses6NpcLeft, 4000);
// setTimeout(blueWizNpcClenchsLeft, 4500);
// setTimeout(magicMissileFiresNpcLeft, 5000);
// setTimeout(magicMissileFires2NpcLeft, 5400);
// setTimeout(magicMissileFires3NpcLeft, 5800);
// setTimeout(magicMissileFires4NpcLeft, 6200);
// setTimeout(magicMissileNpcDeflectedLeft, 6600);
// setTimeout(blueWizNpcRestsArmLeft, 6650);
// setTimeout(magicMissileExplodesNpcDeflectedLeft, 7000);
// setTimeout(redWizPcRestsLeft, 7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedLeft, 8000);
// setTimeout(cleanSceneOfRedPc, 8001);
// setTimeout(cleanSceneOfBlueNpc, 8002);

// redPcDefendLeftBlueNpcAttackRight

// setTimeout(redWizPcBackground, 40010+1);
// setTimeout(setSceneWithRedPc, 40010+2);
// setTimeout(setSceneWithBlueNpc, 40010+3);
// setTimeout(redWizPcDefendsLeft, 40010+500);
// setTimeout(blueWizNpcAttacksRight, 40010+1000);
// setTimeout(starFormsNpcRight, 40010+1250);
// setTimeout(starForms2NpcRight, 40010+1500);
// setTimeout(starForms3NpcRight, 40010+1750);
// setTimeout(starForms4NpcRight, 40010+2000);
// setTimeout(starForms5NpcRight, 40010+2250);
// setTimeout(magicMissileCondensesNpcRight, 40010+2750);
// setTimeout(magicMissileCondenses2NpcRight, 40010+3000);
// setTimeout(magicMissileCondenses3NpcRight, 40010+3250);
// setTimeout(magicMissileCondenses4NpcRight, 40010+3500);
// setTimeout(magicMissileCondenses5NpcRight, 40010+3750);
// setTimeout(magicMissileCondenses6NpcRight, 40010+4000);
// setTimeout(blueWizNpcClenchsRight, 40010+4500);
// setTimeout(magicMissileFiresNpcRight, 40010+5000);
// setTimeout(magicMissileFires2NpcRight, 40010+5400);
// setTimeout(magicMissileFires3NpcRight, 40010+5800);
// setTimeout(magicMissileFires4NpcRight, 40010+6200);
// setTimeout(magicMissileExplodesNpcRight, 40010+6600);
// setTimeout(redWizPcStruckRight,40010+6601);
// setTimeout(blueWizNpcRestsArmRight, 40010+6650);
// setTimeout(magicMissileExplosionDissipatesNpcRight, 40010+7780);
// setTimeout(redWizPcRegainsComposureRight, 40010+8000);
// setTimeout(cleanSceneOfBlueNpc, 40010+8001);
// setTimeout(cleanSceneOfRedPc, 40010+8002);

// redPcDefendRightBlueNpcAttackRight

// setTimeout(setSceneWithRedPc, 1);
// setTimeout(setSceneWithBlueNpc, 2);
// setTimeout(redWizPcDefendsRight, 500);
// setTimeout(blueWizNpcAttacksRight, 1000);
// setTimeout(starFormsNpcRight, 1250);
// setTimeout(starForms2NpcRight, 1500);
// setTimeout(starForms3NpcRight, 1750);
// setTimeout(starForms4NpcRight, 2000);
// setTimeout(starForms5NpcRight, 2250);
// setTimeout(magicMissileCondensesNpcRight, 2750);
// setTimeout(magicMissileCondenses2NpcRight, 3000);
// setTimeout(magicMissileCondenses3NpcRight, 3250);
// setTimeout(magicMissileCondenses4NpcRight, 3500);
// setTimeout(magicMissileCondenses5NpcRight, 3750);
// setTimeout(magicMissileCondenses6NpcRight, 4000);
// setTimeout(blueWizNpcClenchsRight, 4500);
// setTimeout(magicMissileFiresNpcRight, 5000);
// setTimeout(magicMissileFires2NpcRight, 5400);
// setTimeout(magicMissileFires3NpcRight, 5800);
// setTimeout(magicMissileFires4NpcRight, 6200);
// setTimeout(magicMissileNpcDeflectedRight, 6600);
// setTimeout(blueWizNpcRestsArmRight, 6650);
// setTimeout(magicMissileExplodesNpcDeflectedRight, 7000);
// setTimeout(redWizPcRestsRight, 7400);
// setTimeout(magicMissileExplosionDissipatesNpcDefendedRight, 8000);
// setTimeout(cleanSceneOfRedPc, 8001);
// setTimeout(cleanSceneOfBlueNpc, 8002);

// setTimeout(, );