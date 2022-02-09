import Gas from "../../gases/gas";
import IInformation from "../../interfaces/IInformation";
import IFeed from "../../interfaces/IInformation";
import HealthyOrganism from "../healthyOrganism";

class Cell extends HealthyOrganism {

    info: IInformation;

    constructor(breathGas: Gas, exhalationGas: Gas){

        super(breathGas, exhalationGas);

        this.info = {name: 'Vasylich', age: 100500}
    }

    Breath(): void {

        this.breathGas.DecreaseGas();
        
        this.exhalationGas.EncreaseGas();
    } 
    
    Reproduction(): Cell {

        return new Cell(this.breathGas, this.exhalationGas);
    }
}

export default Cell;
