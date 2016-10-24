/*
    File Name:             Scene Node 2 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Tuesday, October 4th, 2016
    Website Name:          EV - COMP397 - Assignment 2
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 2 scene.
    Revision History:      Initial Commit
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node2 = (function (_super) {
        __extends(Node2, _super);
        // CONSTRUCTOR
        function Node2() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node2.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 2 scene started");
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node2"));
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
        };
        // Run on every tick
        Node2.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node2.prototype._choice1ButtonClick = function (event) {
            // Change global scene variable to NODE4. Call global changeScene() function
            scene = config.Scene.NODE1;
            changeScene();
        };
        Node2.prototype._choice2ButtonClick = function (event) {
            // Change global scene variable to NODE5. Call global changeScene() function
            scene = config.Scene.NODE3;
            changeScene();
        };
        Node2.prototype._onBackButtonClick = function (event) {
            // Set global variable to NODE1 Scene and call changescene function
            scene = config.Scene.NODE1;
            changeScene();
        };
        Node2.prototype._onSwitchButtonClick = function (event) {
            // Set global variable to NODE3 Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node2;
    }(objects.Scene));
    scenes.Node2 = Node2;
})(scenes || (scenes = {}));
//# sourceMappingURL=node2.js.map