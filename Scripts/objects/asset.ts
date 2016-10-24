/*
    Object module to group all user-defined objects under the same "namespace aka module"
    Asset class defines a typical asset loaded in such as images, sprites, bitmaps, etc.
*/

module objects {
    export class Asset {
        // ID stores a simple identifier that is used to retrieve src path to location of the asset.
        public id:string;
        public src:string;

        constructor(id:string, src:string) {
            this.id = id;
            this.src = src;
        }
    }
}