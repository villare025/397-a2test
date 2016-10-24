/*
	File Name:             Scene Node 3 - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Tuesday, October 4th, 2016
	Website Name:          EV - COMP397 - Assignment 2
	Program Description:   JS file that contains the components that 
                           are required to render the game's Node 3 scene.
    Revision History:      Initial Commit
*/

module scenes {
    export class Node3 extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg: createjs.Bitmap;
        private _gameBtnBack: objects.Button;
        private _gameBtnSwitch: objects.Button;
        private _gameBtnChoice1: objects.Button;
        private _gameBtnChoice2: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene
            console.log("Node 3 scene started");

            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node3"));
            this.addChild(this._bg);

            // Create Back Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            
            // Create Switch Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnSwitch = new objects.Button("Switch", config.Screen.TOPRIGHT_X, config.Screen.TOPRIGHT_Y);
            this.addChild(this._gameBtnSwitch);
            this._gameBtnSwitch.on("click", this._onSwitchButtonClick, this);

            // Create CHOICE 1 Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnChoice1 = new objects.Button("GoodEnd", config.Screen.CHOICE1_X, config.Screen.CHOICE1_Y);
            this.addChild(this._gameBtnChoice1);
            this._gameBtnChoice1.on("click", this._choice1ButtonClick, this);
            
            // Create CHOICE 2 Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnChoice2 = new objects.Button("BadEnd", config.Screen.CHOICE2_X, config.Screen.CHOICE2_Y);
            this.addChild(this._gameBtnChoice2);
            this._gameBtnChoice2.on("click", this._choice2ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        // Functions for when button is pressed
        private _choice1ButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to NODE6. Call global changeScene() function
            scene = config.Scene.NODE1;
            changeScene();
        }
        private _choice2ButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to NODE7. Call global changeScene() function
            scene = config.Scene.NODE2;
            changeScene();
        }
        private _onBackButtonClick(event: createjs.MouseEvent) {
            // Set global variable to NODE1 Scene and call changescene function
            scene = config.Scene.NODE1;
            changeScene();
        }
        private _onSwitchButtonClick(event: createjs.MouseEvent) {
            // Set global variable to NODE2 Scene and call changescene function
            scene = config.Scene.NODE2;
            changeScene();
        }
    }
}