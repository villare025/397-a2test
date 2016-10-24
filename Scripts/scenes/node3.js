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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node3 = (function (_super) {
        __extends(Node3, _super);
        // CONSTRUCTOR
        function Node3() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node3.prototype.start = function () {
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
        };
        // Run on every tick
        Node3.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node3.prototype._choice1ButtonClick = function (event) {
            // Change global scene variable to NODE6. Call global changeScene() function
            scene = config.Scene.NODE1;
            changeScene();
        };
        Node3.prototype._choice2ButtonClick = function (event) {
            // Change global scene variable to NODE7. Call global changeScene() function
            scene = config.Scene.NODE2;
            changeScene();
        };
        Node3.prototype._onBackButtonClick = function (event) {
            // Set global variable to NODE1 Scene and call changescene function
            scene = config.Scene.NODE1;
            changeScene();
        };
        Node3.prototype._onSwitchButtonClick = function (event) {
            // Set global variable to NODE2 Scene and call changescene function
            scene = config.Scene.NODE2;
            changeScene();
        };
        return Node3;
    }(objects.Scene));
    scenes.Node3 = Node3;
})(scenes || (scenes = {}));
//# sourceMappingURL=node3.js.map