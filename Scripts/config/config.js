/*
    File Name:             Config - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Sunday, October 16th, 2016
    Website Name:          EV - COMP397 - Assignment 2
    Program Description:   Module to store globally accessible
                           values and states for the game.
    Revision History:      Initial Commit
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.NODE1 = 1;
        Scene.NODE2 = 2;
        Scene.NODE3 = 3;
        Scene.INSTRUCTIONS = 4;
        Scene.OVER = 5;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        Screen.TOPLEFT_X = 95;
        Screen.TOPLEFT_Y = 35;
        Screen.TOPRIGHT_X = 652;
        Screen.TOPRIGHT_Y = 35;
        Screen.CHOICE1_X = 110;
        Screen.CHOICE1_Y = 430;
        Screen.CHOICE2_X = 475;
        Screen.CHOICE2_Y = 430;
        Screen.OVER_X = 320;
        Screen.OVER_Y = 435;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map