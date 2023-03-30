class Complex {
    constructor(re, im) {
        this.re = re;
        this.im = im;
    }
    add(other) {
        return new Complex(this.re + other.re, this.im + other.im);
    }
    sub(other) {
        return new Complex(this.re - other.re, this.im - other.im);
    }
    mod() {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    }
    toString() {
        return "re: " + this.re + "\nim: " + this.im;
    }
}

let zm1 = new Complex(2,4);
let zm2 = new Complex(4,1);
let result;

result = zm1.add(zm2);
console.log("Add: \n" + result.toString());

result = result.sub(zm1);
console.log("Sub \n" + result.toString());

result = result.mod();
console.log("Mod: " + result)
