//zad 1
console.log("Pierwszy skrypt - działa");

//zad 2
let tab = [1,2,3,4,5];
console.log("Tablica: " + tab);
tab.pop();
console.log("Długość: " + tab.length + ".Tablica: " + tab)

//zad 3

const addToArray = (tab, pos, number) => {
    if(pos === 1) {
        tab.unshift(number);
    } else if (pos === 0) {
        tab.push(number);
    } else {
        console.log("wrong position");
    }
    return tab;
}

tab = addToArray(tab, 0, 9)
console.log(tab);
tab = addToArray(tab, 1, 8)
console.log(tab)
tab = addToArray(tab, 2, 8)


// zad 4

let text = "1.2.3.4.5.6.7.8.9";
let text2 = text.split(".");
let text3 = text2.map(e => e*e);
let text4 = text3.join(".");

console.log(text4)

// zad 5

const squareArea = (a) => a*a;

console.log(squareArea(5));
console.log(squareArea(50));
