// Inicio

// class Tucan {
//     public fly(): void {}
//     public eat(): void {}
// }

// class Hummingbird {
//     public fly(): void {}
//     public eat(): void {}
//     public run(): void {}
// }

// Aplicación del principio de segregación de interfaces
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly(): number {
        return 10;
    }
    public eat(): void {}
}

class Hummingbird implements Bird, FlyingBird {
    public fly(): number {
        return 20;
    }
    public eat(): void {}
}

class Ostrich implements Bird, RunningBird {
    public eat(): void {}
    public run(): void {}
}

class Penguin implements Bird, SwimmingBird {
    public eat(): void {}
    public swim(): void {}
}