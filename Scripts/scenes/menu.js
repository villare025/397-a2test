/*
    File Name:             Scene Menu - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Tuesday, October 4th, 2016
    Website Name:          EV - COMP397 - Assignment 2
    Program Description:   JS file that contains the components that
                           are required to render the game's Menu scene.
    Revision History:      Initial Commit
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            gameScreen();
            // Add objects to the scene
            console.log("Menu Scene Started");
            // Start Music
            //createjs.Sound.stop();
            //var bgAll = createjs.Sound.play("MUSIC_All");
            //bgAll.play({ interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 1 });
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Title"));
            this.addChild(this._bg);
            // Add START Button to scene. Register for click callback function
            this._menuBtnStart = new objects.Button("BTN_Play", config.Screen.CENTER_X + 135, config.Screen.CENTER_Y + 72);
            this.addChild(this._menuBtnStart);
            this._menuBtnStart.on("click", this._startButtonClick, this);
            // Add instructions Button to scene. Register for click callback function
            this._menuBtnInstructions = new objects.Button("Instructions", config.Screen.CENTER_X + 135, config.Screen.CENTER_Y + 155);
            this.addChild(this._menuBtnInstructions);
            this._menuBtnInstructions.on("click", this._instructionsButtonClick, this);
            // Add TITLE Label to scene and add to Game Scene container 
            this._menuLabel = new objects.Label("Hang\nMe", "bold 60px Kaushan Script", "#00008B", config.Screen.CENTER_X + 250, config.Screen.CENTER_Y - 120);
            this._menuLabel.textAlign = "center";
            this.addChild(this._menuLabel);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        // Run on every tick
        Menu.prototype.update = function () {
            // Update objects
            //console.log("total time: "+createjs.Ticker.getTime());
        };
        // Function for when button is pressed
        Menu.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.NODE1;
            changeScene();
        };
        Menu.prototype._instructionsButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map