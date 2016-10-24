/*
    Object module to group all user-defined objects under the same "namespace aka module"
    Label class provides a clean way of creating text that will appear on screen.
*/

module objects {
    export class Label extends createjs.Text {
        constructor(labelString: string, labelFont: string, labelColor: string, x: number, y: number) {
            // MUST call parent class constructor. Requires text to be displayed, font, and color
            super(labelString, labelFont, labelColor);

            // Set registration point of the text. Used when performing transformations
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            // Set initial x,y position of the label
            this.x = x;
            this.y = y;
        }
    }
}