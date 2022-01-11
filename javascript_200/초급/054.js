this.valueA=  'a';
console.log(this.valueA);

function check() {
    console.log(this);
}
check();

const product = {
    name: 'bag',
    price: 3000,
    getVAT() {
        return this.price/  10;
    }
}
const valProduct = product.getVAT();
console.log(valProduct);

const calVAT = product.getVAT;
const VAT2 = calVAT();
console.log(VAT2);

const newCalVAT = calVAT.bind(product);
const VAT3 = newCalVAT();
console.log(VAT3);