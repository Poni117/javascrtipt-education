"use strict";
exports.__esModule = true;
var Gas = /** @class */ (function () {
    function Gas() {
        // this.numOfGas = 100;
    }
    Gas.prototype.DecreaseGas = function () {
        this.numOfGas--;
    };
    Gas.prototype.EncreaseGas = function () {
        this.numOfGas++;
    };
    return Gas;
}());
exports["default"] = Gas;
