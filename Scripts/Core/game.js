/// <reference path = "_reference.ts" />
/*
    File Name:             Core Game - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, October 16th, 2016
    Website Name:          EV - COMP397 - Assignment 2
    Program Description:   JS file that contains the components that
                           are required to render the game's core.
    Revision History:      Initial Commit
*/
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
// OWN VARS
//Set the variables
var wrdbank = new Array;
var wordArray = new Array;
var previousGuesses = new Array;
var chosenWord;
var chosenClue;
var chosenCat;
var wrongAnswerCount;
var totalWrong = 0;
var totalCorrect = 0;
var currentScore = 0;
var ctx;
var i;
// The Word Collection
var guessMeArray = [
    { word: "strawberry", clue: "There are 200 seeds in this red fruit", category: "Food" },
    { word: "sugar", clue: "Humans are born craving this taste", category: "Food" },
    { word: "wine", clue: "When drunk regularly it can actually help you boost your sex drive", category: "Beverage" },
];
for (i = 0; i < guessMeArray.length; i++) {
    wrdbank[i] = new Array;
    wrdbank[i][0] = guessMeArray[i].word;
    wrdbank[i][1] = guessMeArray[i].clue;
    wrdbank[i][2] = guessMeArray[i].category;
}
console.log(wrdbank);
// Preload Assets required
var assetData = [
    { id: "BTN_Play", src: "../../Assets/images/btnTitleStart.png" },
    { id: "BTN_Inst", src: "../../Assets/images/btnTitleInstructions.png" },
    { id: "BTN_Cont", src: "../../Assets/images/return.png" },
    { id: "BG_Title", src: "../../Assets/images/bgTitle.jpg" },
    { id: "BG_Instr", src: "../../Assets/images/btnGoodEnd.png" },
    { id: "BG_Game", src: "../../Assets/images/bgNode1.jpg" },
    { id: "BG_Over", src: "../../Assets/images/btnGoodEnd.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    //console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.INSTRUCTIONS:
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting Instructions scene");
            break;
        case config.Scene.NODE1:
            stage.removeAllChildren();
            currentScene = new scenes.Node1();
            console.log("Starting NODE1 scene");
            break;
        case config.Scene.NODE2:
            stage.removeAllChildren();
            currentScene = new scenes.Node2();
            console.log("Starting NODE2 scene");
            break;
        case config.Scene.NODE3:
            stage.removeAllChildren();
            currentScene = new scenes.Node3();
            console.log("Starting NODE3 scene");
            break;
        case config.Scene.OVER:
            stage.removeAllChildren();
            currentScene = new scenes.Gameover();
            console.log("Starting GAME OVER scene");
            break;
    }
}
/*
    Hangman Functions
*/
// Start the Game
function gameScreen() {
    $('#gameContent').empty();
    $('#gameContent').append('<div id="pixHolder"><img id="hangman" src="man.png"></div>');
    $('#gameContent').append('<div id="wordHolder"></div>');
    $('#gameContent').append('<div id="clueHolder"></div>');
    $('#gameContent').append('<div id="categoryHolder"></div>');
    $('#gameContent').append('<div id="guesses">Previous Guesses:</div>');
    $('#gameContent').append('<div id="scoring"></div>');
    $('#gameContent').append('<div id="feedback"></div>');
    $('#gameContent').append('<div id="timer"></div>');
    $('#gameContent').append('<form><input type="text" id="forcekeys" ></form>');
    $('#scoring').append("Score: " + currentScore);
    getWord();
    var numberOfTiles = chosenWord.length;
    wrongAnswerCount = 0;
    previousGuesses = [];
    for (i = 0; i < numberOfTiles; i++) {
        $('#wordHolder').append('<div class="tile" id=t' + i + '></div>');
    }
    $('#clueHolder').append("HINT: " + chosenClue);
    $('#categoryHolder').append("Category: " + chosenCat);
    $(document).on("keyup", handleKeyUp);
    $(document).on("click", function () { $('#forcekeys').focus(); });
    $('#forcekeys').focus();
}
// Randomly Choose the Word for player to Guess
function getWord() {
    var rand = Math.floor(Math.random() * wrdbank.length);
    chosenWord = wrdbank[rand][0];
    chosenClue = wrdbank[rand][1];
    chosenCat = wrdbank[rand][2];
    wrdbank.splice(rand, 1);
    wordArray = chosenWord.split("");
    console.log(chosenWord);
}
// Player Interaction -- Press Keyboard Keys
function handleKeyUp(event) {
    //this line deals with glitch in recent versions of android
    //if (event.keyCode == 229) { event.keyCode = $('#forcekeys').val().slice($('#forcekeys').val().length - 1, $('#forcekeys').val().length).toUpperCase().charCodeAt(0); }
    if (event.keyCode > 64 && event.keyCode < 91) {
        var found = false;
        var previouslyEntered = false;
        var input = String.fromCharCode(event.keyCode).toLowerCase();
        for (i = 0; i < previousGuesses.length; i++) {
            if (input == previousGuesses[i]) {
                previouslyEntered = true;
            }
        }
        if (!previouslyEntered) {
            previousGuesses.push(input);
            for (i = 0; i < wordArray.length; i++) {
                if (input == wordArray[i]) {
                    found = true;
                    $('#t' + i).append(input);
                }
            }
            if (found) {
                checkAnswer();
            }
            else {
                wrongAnswer(input);
            }
        }
    }
}
// Verify if key is correct
function checkAnswer() {
    var currentAnswer = "";
    for (i = 0; i < chosenWord.length; i++) {
        currentAnswer += ($('#t' + i).text());
    }
    if (currentAnswer == chosenWord) {
        totalCorrect++;
        currentScore = currentScore + 100;
        console.log(currentScore);
        victoryMessage();
    }
    ;
}
// Key is Wrong
var strings = "";
function wrongAnswer(a) {
    wrongAnswerCount++;
    //var pos = (wrongAnswerCount * -75) + "px"
    $('#guesses').append("  " + a.toUpperCase());
    strings += a.toUpperCase();
    console.log(strings);
    //$('#hangman').css("left", pos);
    if (wrongAnswerCount == 6) {
        totalWrong++;
        defeatMessage();
    }
}
// Win
function victoryMessage() {
    document.activeElement.blur();
    $(document).off("keyup", handleKeyUp);
    $('#feedback').append("CORRECT!<br><br><div id='replay' class='button'>CONTINUE</div>");
    console.log(wrdbank.length);
    $('#replay').on("click", function () {
        if (wrdbank.length > 0) {
            gameScreen();
        }
        else {
            finalPage();
        }
    });
}
// Lose
function defeatMessage() {
    document.activeElement.blur();
    $(document).off("keyup", handleKeyUp);
    $('#feedback').append("You're Dead!<br>(answer= " + chosenWord + ")<div id='replay' class='button'>CONTINUE</div>");
    console.log(wrdbank.length);
    $('#replay').on("click", function () {
        if (wrdbank.length > 0) {
            gameScreen();
        }
        else {
            finalPage();
        }
    });
}
// End
function finalPage() {
    console.log("Correct: " + totalCorrect);
    console.log("Wrong: " + totalWrong);
    if (localStorage.getItem("HighScore") === null) {
        localStorage.setItem("HighScore", currentScore.toString());
        $('#gameContent').empty();
        $('#gameContent').append('<div id="finalMessage">You have set the highscore and finished all the words in the game!</div>');
    }
    else {
        var localHS = localStorage.getItem("HighScore");
        var nLocal = Number(localHS);
        if (currentScore >= nLocal) {
            localStorage.setItem("HighScore", currentScore.toString());
            $('#gameContent').empty();
            $('#gameContent').append('<div id="finalMessage">You have beaten the highscore and finished all the words in the game!</div>');
        }
        else {
            alert("Not high Score");
            $('#gameContent').empty();
            $('#gameContent').append('<div id="finalMessage">You have not beaten the highscore but finished all the words in the game!</div>');
        }
    }
}
// Check for Local Storage
function isLocalStorageWorking() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
        return false;
    }
}
// Show if localStorage works 
if (isLocalStorageWorking()) {
    // Working = YES
    document.getElementById("localStorageCheck").style.backgroundColor = "#00FF00";
}
else {
    // Working = NO 
    document.getElementById("localStorageCheck").style.backgroundColor = "#FF0000";
    // So Create Fake localStorage var to not Throw Error
    localStorage = [];
}
//# sourceMappingURL=game.js.map