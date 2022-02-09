import Gas from "../gases/gas";

abstract class Organism {

    protected breathGas: Gas;

    protected exhalationGas: Gas;

    constructor(breathGas: Gas, exhalationGas: Gas){

        this.breathGas = breathGas;
        
        this.exhalationGas = exhalationGas;
    }

    Breath(): void {}

    Eat(): void {
        console.log("Eating")
    }
}

export default Organism;
