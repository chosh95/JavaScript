class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTax(product) {
        return product.price * 0.1 + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }

    static get DEPOSABLE_TAXRATE() {
        return 0.1;
    }
}

const gum = Product.build('milk', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, 'jeans', 2000);
const taxPrice = DeposableProduct.getTax(clothes);
console.log(clothes + "\n" + taxPrice);
console.log(DeposableProduct.DEPOSABLE_TAXRATE);