"use strict";
exports.__esModule = true;
var Organism = /** @class */ (function () {
    function Organism(breathGas, exhalationGas) {
        this.breathGas = breathGas;
        this.exhalationGas = exhalationGas;
    }
    Organism.prototype.Breath = function () { };
    Organism.prototype.Eat = function () {
        console.log("Eating");
    };
    return Organism;
}());
exports["default"] = Organism;
