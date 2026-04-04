(() => {

    // arreglo de temperaturas celsius
    // Bad
    const arrayOfNums = [33.6, 12.34];
    // Better
    const temperaturesInCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    // Bad
    const ip = '123.123.123.123';
    // Better
    const serverIpAddress = '123.123.123.123';

    // Listado de usuarios
    // Bad
    const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    // Better
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    // Bad
    const emails = users.map( u => u.email );
    // Better
    const userEmails = users.map( user => user.email );

    // Variables booleanas de un video juego

    // Bad
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;

    // Better
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial

    // Bad
    const start = new Date().getTime();
    // Better
    const startTime = new Date().getTime();

    //....
    // 3 doritos después
    //...

    // Tiempo al final
    // Bad
    const end = new Date().getTime() - start;
    // Better
    const elapsedTime = new Date().getTime() - startTime;

    // Funciones
    // Obtiene los libros

    // Bad
    function book() {
        throw new Error('Function not implemented.');
    }

    // Better
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL

    // Bad
    function BooksUrl( u: string) {
        throw new Error('Function not implemented.');
    }

    // Better
    function getBooksByUrl(url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados

    // Bad
    function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.');
    }

    // Better
    function getSquareArea(side: number) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo

    // Bad
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }
    
    // Better
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();