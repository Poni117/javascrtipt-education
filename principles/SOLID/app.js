"use strict";
exports.__esModule = true;
var enveronment_1 = require("./enveronment");
var THREE = require("three");
var Game = /** @class */ (function () {
    function Game() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1000);
        this.renderer = new THREE.WebGLRenderer({ antalias: true });
        this.Start();
    }
    Game.prototype.Start = function () {
        document.body.appendChild(this.renderer.domElement);
        var environment = new enveronment_1["default"]();
        environment.Start();
    };
    return Game;
}());
new Game();
