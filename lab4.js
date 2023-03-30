//Zad 2
const students = ["Olek", "Janek", "Stefan", "Tymek", "Sławek"];

const lotteryDevice = (tab) => {
    return tab[Math.floor(Math.random() * tab.length)];
}

console.log(lotteryDevice(students));

//Zad 3
//
const randNumbers = (amount, time) => {
    let i = 0;
    let intervalID = setInterval(() => {
        console.log(Math.floor(Math.random() * 100));
        i++;
        if(i === amount) {
            clearInterval(intervalID);
        }
    }, time);
}

randNumbers(3, 2000);

// zad 4

const welcome = (name) => {
    let intervalID = setInterval(() => {
        console.log("Welcome: " + name)
    }, 3000);
}

welcome("Piotr");
