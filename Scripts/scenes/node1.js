/*
    File Name:             Scene Node 1 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Tuesday, October 4th, 2016
    Website Name:          EV - COMP397 - Assignment 2
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 1 scene.
    Revision History:      Initial Commit
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node1 = (function (_super) {
        __extends(Node1, _super);
        // CONSTRUCTOR
        function Node1() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node1.prototype.start = function () {
            getWord();
            // Add objects to the scene
            console.log("Node 1 scene started");
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node1"));
            //this.addChild(this._bg);
            // Create CHOICE 1 Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnNext = new objects.Button("BadEnd", config.Screen.CHOICE2_X, config.Screen.CHOICE2_Y);
            this.addChild(this._gameBtnNext);
            this._gameBtnNext.on("click", this._choice1ButtonClick, this);
            // Create Label for scene and add to Game Scene container
            this._wordHolder = new objects.Label("Z", "bold 14px Verdana", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this._wordHolder.text = chosenWord;
            this.addChild(this._wordHolder);
            // Create Label for scene and add to Game Scene container
            this._clueHolder = new objects.Label("X", "bold 14px Verdana", "#000000", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y);
            this._clueHolder.text = "Clue: " + chosenClue;
            this.addChild(this._clueHolder);
            // Create Label for scene and add to Game Scene container
            this._categoryHolder = new objects.Label("C", "bold 14px Verdana", "#000000", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 50);
            this._categoryHolder.text = "Category: " + chosenCat;
            this.addChild(this._categoryHolder);
            // Create Label for scene and add to Game Scene container
            this._guesses = new objects.Label("V", "bold 14px Verdana", "#000000", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 100);
            this._guesses.text = "Previous Guesses: ";
            this.addChild(this._guesses);
            // Create Label for scene and add to Game Scene container
            this._score = new objects.Label("B", "bold 14px Verdana", "#000000", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y - 200);
            this._score.text = "Score: " + currentScore;
            this.addChild(this._score);
            // Create Label for scene and add to Game Scene container
            this._feedback = new objects.Label("N", "bold 14px Verdana", "#000000", config.Screen.CENTER_X - 250, config.Screen.CENTER_Y + 150);
            this._feedback.text = "Feedback: ";
            this.addChild(this._feedback);
            var numberOfTiles = chosenWord.length;
            wrongAnswerCount = 0;
            previousGuesses = [];
            var shapes = [];
            for (i = 0; i < numberOfTiles; i++) {
                var shape = new createjs.Shape();
                shapes[i] = "some stuff";
                console.log("created");
                shape.graphics.beginFill('red').drawRect(65, 125, 30, 30);
                shape.name = "tile" + i;
                stage.addChild(shape);
                // Move object so that they don't lie on top of each other
                shape.x = i * 50;
                console.log(shape.name.toString());
            }
            stage.on("click", function () {
                $('#forcekeys').focus();
                console.log("click");
            });
            document.onkeyup = handleKeyUp;
            document.onclick = $('#forcekeys').focus();
            $('#forcekeys').focus();
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node1.prototype.update = function () {
            // Update objects
            stage.update();
        };
        Node1.prototype._choice1ButtonClick = function (event) {
            // Change global scene variable to NODE3. Call global changeScene() function
            scene = config.Scene.NODE3;
            changeScene();
        };
        // Player Interaction -- Press Keyboard Keys
        Node1.prototype.handleKeyUp = function (event) {
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
        };
        // Verify if key is correct
        Node1.prototype.checkAnswer1 = function () {
            var currentAnswer = "";
            for (i = 0; i < chosenWord.length; i++) {
                currentAnswer += ($('#t' + i).text());
            }
            if (currentAnswer == chosenWord) {
                totalCorrect++;
                currentScore = currentScore + 100;
                console.log(currentScore);
                this.winMsg1();
            }
            ;
        };
        Node1.prototype.wrongAnswer1 = function (a) {
            wrongAnswerCount++;
            $('#guesses').append("  " + a.toUpperCase());
            var str1 = "Guesses: ";
            var str2 = a.toUpperCase();
            var res = str1.concat(str2);
            this._guesses.text = res;
            if (wrongAnswerCount == 6) {
                totalWrong++;
                this.loseMsg1();
            }
        };
        // Win
        Node1.prototype.winMsg1 = function () {
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
        };
        // Lose
        Node1.prototype.loseMsg1 = function () {
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
        };
        return Node1;
    }(objects.Scene));
    scenes.Node1 = Node1;
})(scenes || (scenes = {}));
//# sourceMappingURL=node1.js.map