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
module config {
    export class Scene {
        public static MENU : number = 0;
        public static NODE1 : number = 1;
        public static NODE2 : number = 2;
        public static NODE3 : number = 3;
        public static INSTRUCTIONS : number = 4;
        public static OVER : number = 5;
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
        public static TOPLEFT_X : number = 95;
        public static TOPLEFT_Y : number = 35;
        public static TOPRIGHT_X : number = 652;
        public static TOPRIGHT_Y : number = 35;
        public static CHOICE1_X : number = 110;
        public static CHOICE1_Y : number = 430;
        public static CHOICE2_X : number = 475;
        public static CHOICE2_Y : number = 430;
        public static OVER_X : number = 320;
        public static OVER_Y : number = 435;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}