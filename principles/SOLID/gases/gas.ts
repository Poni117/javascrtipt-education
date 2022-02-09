abstract class Gas {

    name: string;

    numOfGas: number;

    constructor(){
        // this.numOfGas = 100;
    }

    DecreaseGas(): void{
        this.numOfGas --;
    }

    EncreaseGas(): void{
        this.numOfGas ++;
    }
}

export default Gas;