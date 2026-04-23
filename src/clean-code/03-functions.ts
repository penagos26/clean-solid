(() => {

    // función para obtener información de una película por Id
    // Bad
    function getAllMovies(movieId: string) {
        console.log({ movieId });
    }

    // Better
    function getMovieById(id: string) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    // Bad
    function getAllMovieActors(id: string) {
        console.log({ id });
    }

    // Better
    function getMovieActorsById(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    // Bad
    function getUsuario(ActorId: string) {
        console.log({ ActorId });
    }

    // Better
    function getActorBioById(actorId: string) {
        console.log({ id: actorId });
    }

    // Crear una película
    // Bad
    function movie(title: string, description: string, rating: number, cast: string[]) {
        console.log({ title, description, rating, cast });
    }

    // Better
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie(movie: Movie) {
        console.log(movie);
    }

    // Crea un nuevo actor
    // Bad
    function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }

    // Better
    interface Actor {
        birthdate: Date;
        fullName: string;
    }

    function createActor(actor: Actor): boolean {
        if (actor.fullName === 'fernando') return false;

        console.log('Crear actor', { fullName: actor.fullName, birthdate: actor.birthdate });
        return true;
    }


    // Función para mejorar:
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;
    }

})();
