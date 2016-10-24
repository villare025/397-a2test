/*
    Object module to group all user-defined objects under the same "namespace aka module"
    Scene class extends a container object used to store object associated with a particular scene. 
*/

module objects {
    export class Scene extends createjs.Container {
        constructor() {
            super();
            this.start();
        }

        // When this object starts, add it to the current global stage container.
        public start() : void {
            stage.addChild(this);
        }

        public update() : void {
            
        }
    }
}