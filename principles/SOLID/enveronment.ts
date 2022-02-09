import CarbonDioxide from "./gases/carbonDioxide";
import Oxygen from "./gases/oxygen";
import Algaes from "./organisms/algaes/algaes";
import Cell from "./organisms/cells/cell";
import Organism from "./organisms/organism";

class Environment {
    
    oxygen: Oxygen;

    carbonDioxide: CarbonDioxide;

    constructor(){

        this.oxygen = new Oxygen();

        this.carbonDioxide = new CarbonDioxide();
    }

    Start(){
        
        const orgamisms: Organism[] = [
            
            new Cell(this.oxygen, this.carbonDioxide),
            new Cell(this.oxygen, this.carbonDioxide),
            new Cell(this.oxygen, this.carbonDioxide),
            new Algaes(this.carbonDioxide, this.oxygen),
            new Algaes(this.carbonDioxide, this.oxygen)
        ];
        
        orgamisms.forEach(organism => {
            organism.Breath();
        });

        console.log(`oxygen = ${this.oxygen.numOfGas}`);

        console.log(`carbon dioxide ${this.carbonDioxide.numOfGas}`);
    }
}

export default Environment;