import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle, Mazda } from './03-liskov-b';

// Bad code: Viola los principios de Liskov y de Open/Closed
// (() => {
    
//     const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda | Volvo)[] ) => {
        
//         for (const car of cars) {
         
//             if( car instanceof Tesla ) {
//                 console.log( 'Tesla', car.getNumberOfTeslaSeats() )
//                 continue;
//             }
//             if( car instanceof Audi ) {
//                 console.log( 'Audi', car.getNumberOfAudiSeats() )
//                 continue;
//             }
//             if( car instanceof Toyota ) {
//                 console.log( 'Toyota', car.getNumberOfToyotaSeats() )
//                 continue;
//             }
//             if( car instanceof Honda ) {
//                 console.log( 'Honda', car.getNumberOfHondaSeats() )
//                 continue;
//             }
//             if( car instanceof Volvo ) {
//                 console.log( 'Volvo', car.getNumberOfVolvoSeats() )
//                 continue;
//             }

//         }
//     }
    
//     const cars = [
//         new Tesla(7),
//         new Audi(2),
//         new Toyota(5),
//         new Honda(5),
//         new Volvo(2),
//     ];


//     printCarSeats( cars );

// })();

// Solución:

(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        cars.forEach( car => {
            console.log( car.constructor.name, car.getNumberOfSeats() );
        });
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Mazda(4),
    ];


    printCarSeats( cars );

})();