/*

let currentYear = 2022;
const ageBill = currentYear - 1991;
const ageDani = currentYear - 1989;
console.log(ageBill, ageDani)

console.log(ageBill * 2, ageBill / 2., 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Bill';
const lastName = 'Leach';
console.log(firstName + " " + lastName)

let x = 10 + 5; //15
x += 10; // x = x + 10 // 25
x -= 10; // x = x - 10 // 15
x *= 4; // x = x * 4 // 60
x /= 4; //x = x / 4 // 15
x++; // x = x + 1
x--; // x= x - 1
console.log(x);

//comparison operators
console.log(ageBill > ageDani); // >, <, >=, <=
console.log(ageDani >= 18);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y)

const averageAge = (ageBill + ageDani) / 2
console.log(ageBill, ageDani, averageAge)



let markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI, markHigherBMI;

// TEST DATA 1:

markMass = 78;

johnMass = 92;

markHeight = 1.69;

johnHeight = 1.95;

markBMI = markMass / (markHeight ** 2);

johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

// TEST DATA 2:

markMass = 95;

johnMass = 85;

markHeight = 1.88;

johnHeight = 1.76;

markBMI = markMass / (markHeight ** 2);

johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

const firstName = 'Bill';
const job = 'programmer';
const birthYear = 1991;
const year = 2022;

const bill = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '.'
console.log(bill)

const billNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(billNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


let age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`They are of legal age. 😊`)
}

else {
    const yearsLeft = 18 - age;
    console.log(`They are not of legal age. Wait another ${yearsLeft} years.`)
};


const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)



let markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI, markHigherBMI;

// TEST DATA 1:

markMass = 78;

johnMass = 92;

markHeight = 1.69;

johnHeight = 1.95;

markBMI = markMass / (markHeight ** 2);

johnBMI = johnMass / (johnHeight ** 2);

if (markBMI < johnBMI) {
    console.log(`Mark's BMI ${markBMI}, is higher than John's ${johnBMI}! `)
} else {
    console.log(`John's BMI ${johnBMI}, is higher than Mark's ${markBMI}! `)
}

// TEST DATA 2:

markMass = 95;

johnMass = 85;

markHeight = 1.88;

johnHeight = 1.76;

markBMI = markMass / (markHeight ** 2);

johnBMI = johnMass / (johnHeight ** 2);

if (markBMI < johnBMI) {
    console.log(`Mark's BMI ${markBMI}, is higher than John's ${johnBMI}! `)
} else {
    console.log(`John's BMI ${johnBMI}, is higher than Mark's ${markBMI}! `)
}



const money = 0;
if (money) {
    console.log(`Don't spend it all`)
} else {
    console.log(`You should get a job.`)
}






// teams are Dolphins and Koalas

// calculate the average score for each team using the test data

// compare the team's average scores to determine the winner of the competition and print it to the console. Don't forget that there can be a draw so test for that as well

//include a requiremnet for a minimum score of 100. With this rule a team only wins if it has a higher score than the other team and the same time have a score of at least 100 points.

// minimum score also applies to a draw so a draw only happens when both teams have the same score and both have a score greater or equal to 100 points other wise no team wins the trophy


// https://www.youtube.com/watch?v=KKfZ2OtKp3k&list=PLGGPU5_f-5iLTSZYDe1UYCNUBoL4Yx_Gr&index=23


const scoreAverageDolphins = (96 + 108 + 89) / 3;
const scoreAverageKoalas = (88 + 91 + 110) / 3;


if (scoreAverageDolphins > scoreAverageKoalas) {
    console.log(`Dolphins are the winner!`)
} else if (scoreAverageKoalas > scoreAverageDolphins) {
    console.log('Koalas are the winner!')
} else if (scoreAverageDolphins === scoreAverageKoalas) {
    console.log(`There is a tie.`)
}

// Bonus


const scoreAverageDolphins = (97 + 112 + 101) / 3;
const scoreAverageKoalas = (109 + 95 + 123) / 3;

if (scoreAverageDolphins > scoreAverageKoalas && scoreAverageDolphins >= 100) {
    console.log(`Dolphins are the winner!`)
} else if (scoreAverageKoalas > scoreAverageDolphins && scoreAverageKoalas >= 100) {
    console.log('Koalas are the winner!')
} else if (scoreAverageDolphins === scoreAverageKoalas && scoreAverageDolphins >= 100 && scoreAverageKoalas >= 100) {
    console.log(`There is a draw.`)
} else {
    console.log(`There is no winner.`)
}



let day = 'monday';

switch (day) {
    case 'monday':
        console.log(`Go to work`);
        console.log(`Learn more coding`)
        break;
    case 'tuesday':
        console.log('tuesday stuff');
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`play fetch with the cats`)
        break;
    case `friday`:
        console.log(`get ready for the weekend`)
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Jack shit, its the weekend!`)
    default:
        console.log(`N/A`)};



let day = 'sunday';

if (day === 'monday') {
    console.log(`Monday`)
} else if (day === `tuesday`) {
    console.log(`Tuesday`)
} else if (day === `wednesday` || day === 'thursday') {
    console.log(`Wednesday or Thursday`)
} else if (day === 'friday') {
    console.log(`Friday`)
} else if (day === 'saturday ' || day === 'sunday') {
    console.log(`Saturday or Sunday`)
} else {
    console.log('not a logical weekday. only input ones with lower case.')
}



let bill = 275;
let tip, message;

bill >= 300 ? (tip = bill * 0.2) : (tip = bill * 0.15)
bill >= 300 ? (message = `The bill was $${bill}, the tip was $${tip} and the total was ${bill + tip}. `) : (message = `The bill was $${bill}, the tip was $${tip} and the total was ${bill + tip}. `)
console.log(message)


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/

