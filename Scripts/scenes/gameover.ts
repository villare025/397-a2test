/*
	File Name:             Scene Game Over - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Sunday, October 16th, 2016
	Website Name:          EV - COMP397 - Assignment 2
	Program Description:   JS file that contains the components that
                           are required to render the game's Game Over scene.
    Revision History:      Initial Commit
*/

module scenes {
    export class Gameover extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg: createjs.Bitmap;
        private _gameButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // Run when the scene is started
        public start(): void {
            // Add objects to the scene
            console.log("Node 1 scene started");

            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._gameButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onBackButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        private _onBackButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}