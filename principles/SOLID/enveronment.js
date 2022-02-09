"use strict";
exports.__esModule = true;
var carbonDioxide_1 = require("./gases/carbonDioxide");
var oxygen_1 = require("./gases/oxygen");
var algaes_1 = require("./organisms/algaes/algaes");
var cell_1 = require("./organisms/cells/cell");
var Environment = /** @class */ (function () {
    function Environment() {
        this.oxygen = new oxygen_1["default"]();
        this.carbonDioxide = new carbonDioxide_1["default"]();
    }
    Environment.prototype.Start = function () {
        var orgamisms = [
            new cell_1["default"](this.oxygen, this.carbonDioxide),
            new cell_1["default"](this.oxygen, this.carbonDioxide),
            new cell_1["default"](this.oxygen, this.carbonDioxide),
            new algaes_1["default"](this.carbonDioxide, this.oxygen),
            new algaes_1["default"](this.carbonDioxide, this.oxygen)
        ];
        orgamisms.forEach(function (organism) {
            organism.Breath();
        });
        console.log("oxygen = ".concat(this.oxygen.numOfGas));
        console.log("carbon dioxide ".concat(this.carbonDioxide.numOfGas));
    };
    return Environment;
}());
exports["default"] = Environment;
