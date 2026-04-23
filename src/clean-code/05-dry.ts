type Size = '' | 'S' | 'M' | 'L';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length === 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if (this[key] === 0) throw Error(`${key} must be greater than 0`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }

        return true;
    }

    toString() {
        // NO DRY
        // if (this.name.length === 0) throw Error('Name is empty');
        // if (this.price == 0) throw Error('Price must be greater than 0');
        // if (this.size.length === 0) throw Error('Size is Empty');
        if (!this.isProductReady) return;

        return `${this.name} - ${this.price} - ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Pantalón azul', 10, 'M');
    console.log(bluePants.toString());
})();