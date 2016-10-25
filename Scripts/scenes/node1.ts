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

module scenes {
    export class Node1 extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg: createjs.Bitmap;
        private _gameBtnBack: objects.Button;
        private _gameLabel: objects.Label;
        private _gameBtnNext: objects.Button;

        private _wordHolder: objects.Label;
        private _clueHolder: objects.Label;
        private _categoryHolder: objects.Label;
        private _guesses: objects.Label;
        private _score: objects.Label;
        private _feedback: objects.Label;
        private shape;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
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
                //
                /*
                var str1 = "tile1";
                var str2 = shape.name.toString();
                var n = str1.localeCompare(str2);
                if (str1 == str2) {
                    console.log("same");
                }
                else {
                    console.log("samenot");
                }
                */
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
        }

        // Run on every tick
        public update(): void {
            // Update objects
            stage.update();
        }

        private _choice1ButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to NODE3. Call global changeScene() function
            scene = config.Scene.NODE3;
            changeScene();
        }
        // Player Interaction -- Press Keyboard Keys
        private handleKeyUp(event) {
            //this line deals with glitch in recent versions of android
            //if (event.keyCode == 229) { event.keyCode = $('#forcekeys').val().slice($('#forcekeys').val().length - 1, $('#forcekeys').val().length).toUpperCase().charCodeAt(0); }

            if (event.keyCode > 64 && event.keyCode < 91) {
                var found = false;
                var previouslyEntered = false;
                var input = String.fromCharCode(event.keyCode).toLowerCase();

                for (i = 0; i < previousGuesses.length; i++) { if (input == previousGuesses[i]) { previouslyEntered = true; } }

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
        private checkAnswer1() {
            var currentAnswer = "";
            for (i = 0; i < chosenWord.length; i++) {
                currentAnswer += ($('#t' + i).text());
            }
            if (currentAnswer == chosenWord) {
                totalCorrect++;
                currentScore = currentScore + 100;
                console.log(currentScore);
                this.winMsg1();
            };
        }
        private wrongAnswer1(a) {
            wrongAnswerCount++;
            $('#guesses').append("  " + a.toUpperCase());
            var str1 = "Guesses: ";
            var str2 = a.toUpperCase();
            var res = str1.concat(str2);

            this._guesses.text = res;
                if(wrongAnswerCount == 6) {
                totalWrong++;
                this.loseMsg1();
            }
        }
        // Win
        private winMsg1() {
            document.activeElement.blur();
            $(document).off("keyup", handleKeyUp);
            $('#feedback').append("CORRECT!<br><br><div id='replay' class='button'>CONTINUE</div>");
            console.log(wrdbank.length);
            $('#replay').on("click", function () {
                if (wrdbank.length > 0) {
                    gameScreen()
                }
                else { finalPage() }
            });
        }
        // Lose
        private loseMsg1() {
            document.activeElement.blur();
            $(document).off("keyup", handleKeyUp);
            $('#feedback').append("You're Dead!<br>(answer= " + chosenWord + ")<div id='replay' class='button'>CONTINUE</div>");
            console.log(wrdbank.length);
            $('#replay').on("click", function () {
                if (wrdbank.length > 0) {
                    gameScreen()
                }
                else { finalPage() }
            });
        }
    }
}