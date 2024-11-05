/* -------------------------------------------------------------------------- */
/*                              1. multiplication                             */
/* -------------------------------------------------------------------------- */

const number = 9;
for (let i = 1; i < 10; i++) {
  console.log(`${number} x ${i}`);
}

/* -------------------------------------------------------------------------- */
/*                            2. palindrome checker                           */
/* -------------------------------------------------------------------------- */

const namePal = "madam";
if (namePal == namePal) {
  console.log("is a palindrome");
} else {
  console.log("not palindrome");
}

/* -------------------------------------------------------------------------- */
/*                         3. centimeter to kilometer                         */
/* -------------------------------------------------------------------------- */

const cm = 100000;
const toKM = cm / 100000;
console.log(`${toKM} km`);

/* -------------------------------------------------------------------------- */
/*                            4. number in currency                           */
/* -------------------------------------------------------------------------- */

const harga = 1000;
console.log(`Rp. ${harga},00`);

/* -------------------------------------------------------------------------- */
/*                         5. first occurance removal                         */
/* -------------------------------------------------------------------------- */

function removeFirstOccurence(text, targetString) {
  return text.replace(targetString, "");
}

console.log(removeFirstOccurence("Hello dello sello", "lo"));

/* -------------------------------------------------------------------------- */
/*                             1. triangle pattern                            */
/* -------------------------------------------------------------------------- */

function triangle(untilTen) {}

/* -------------------------------------------------------------------------- */
/*                           2. Fizz, Buzz, FizzBuzz                          */
/* -------------------------------------------------------------------------- */
function replacements(n) {
  for (let i = 0; i <= 15; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

console.log(replacements(15));

/* -------------------------------------------------------------------------- */
/*                            5. split hello world                            */
/* -------------------------------------------------------------------------- */

function splitting(string) {
  let splitted = string.split(" ");
  return splitted;
}

//   console.log(splitting(mahkamah))



const sumArray = [1,2,3,4]
let sum = 0
for (let i = 0; i < sumArray.length; i++ ) {
  sum += sumArray[i];
}
const sums = sum/sumArray.length


console.log(sums)
