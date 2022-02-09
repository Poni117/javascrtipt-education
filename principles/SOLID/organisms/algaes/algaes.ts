import HealthyOrganism from "../healthyOrganism";

class Algaes extends HealthyOrganism {


    Breath(): void {
        this.breathGas.DecreaseGas();
        this.exhalationGas.EncreaseGas();
    }

    Reproduction(): Algaes {

        return new Algaes(this.breathGas, this.exhalationGas);
    }

}

export default Algaes;