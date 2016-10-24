/*
    Object module to group all user-defined objects under the same "namespace aka module"
    Asset class defines a typical asset loaded in such as images, sprites, bitmaps, etc.
*/
var objects;
(function (objects) {
    var Asset = (function () {
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    }());
    objects.Asset = Asset;
})(objects || (objects = {}));
//# sourceMappingURL=asset.js.map