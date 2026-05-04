// Bad code: Viola los principios de Liskov y de Open/Closed

// export class Tesla {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfTeslaSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Audi {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfAudiSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Toyota {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfToyotaSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Honda {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfHondaSeats() {
//         return this.numberOfSeats;
//     }
// }



// export class Volvo {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfVolvoSeats() {
//         return this.numberOfSeats;
//     }
// }

// Solución:

// Clase de herrencia común (Obliga a implementar el método getNumberOfSeats en cada clase hija)
export abstract class Vehicle {
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Mazda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}