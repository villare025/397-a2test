/*
    Object module to group all user-defined objects under the same "namespace aka module"
    Scene class extends a container object used to store object associated with a particular scene.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.start();
        }
        // When this object starts, add it to the current global stage container.
        Scene.prototype.start = function () {
            stage.addChild(this);
        };
        Scene.prototype.update = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map