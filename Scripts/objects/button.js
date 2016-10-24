/*
    Object module to group all user-defined objects under the same "namespace aka module"
    Button class extends the createjs bitmap class and provides a clean interface for creating clickable objects
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            // Set the position of the button
            this.x = x;
            this.y = y;
            // Set the size of the button
            this.width = 150;
            this.height = 50;
            // Set the registration point of the button. This is used for transformations
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }
        // Modify the bitmaps alpha value when hovering over the button
        Button.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        // Modify the bitmaps alphave when mouse is not hovering
        Button.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map