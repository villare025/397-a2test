/*
	File Name:             Scene Instructions - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Monday, October 3nd, 2016
	Website Name:          EV - COMP397 - Assignment 2
	Program Description:   JS file that contains the components that 
                           are required to render the game's Instructions scene.
    Revision History:      Initial Commit
*/

module scenes {
    export class Instructions extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg: createjs.Bitmap;
        private _instructionsBtnStart: objects.Button;
        private _instructionsBtnBack: objects.Button;
        private _instructionsTitle: objects.Label;
        private _instructionsParagraph: objects.Label;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Title"));
            this.addChild(this._bg);

            // Add START Button to scene. Register for click callback function
            this._instructionsBtnStart = new objects.Button("Start", config.Screen.CENTER_X + 135, config.Screen.CENTER_Y + 110);
            this.addChild(this._instructionsBtnStart);
            this._instructionsBtnStart.on("click", this._startButtonClick, this);

            // Create RETURN Button for scene and add to Game Scene container. Register for onclick event
            this._instructionsBtnBack = new objects.Button("Return", config.Screen.CENTER_X + 280, config.Screen.CENTER_Y + 200);
            this.addChild(this._instructionsBtnBack);
            this._instructionsBtnBack.on("click", this._onBackButtonClick, this);

            // Create Label for scene and add to Game Scene container
            this._instructionsTitle = new objects.Label("instructions", "60px Kaushan Script", "#000000", config.Screen.CENTER_X + 55, config.Screen.CENTER_Y - 150);
            this.addChild(this._instructionsTitle);
            
            // Create Label for scene and add to Game Scene container
            this._instructionsParagraph = new objects.Label("Instructions: \nSimply click on a golden choice button \n     to progress through the story. \nThere are a total of 8 endings \n - 7 Bad Endings and 1 True Good End. \nA Return Button is available \n     on the Top Left to go back a scene. \nA Switch Button is available \n     on the Top Right to go the other scene.", "bold 14px Verdana", "#000000", config.Screen.CENTER_X + 140, config.Screen.CENTER_Y);
            this.addChild(this._instructionsParagraph);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        // Function for when button is pressed
        private _startButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.NODE1;
            changeScene();
        }
        private _onBackButtonClick(event: createjs.MouseEvent) {
            // Set global variable to NODE1 Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}