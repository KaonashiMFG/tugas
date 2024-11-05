/* -------------------------------------------------------------------------- */
/*                           1. even or odd checker                           */
/* -------------------------------------------------------------------------- */

const value = 25;
const value2 = 2;
//niatnya dijadiin objek nanti tinggal panggil per-valuenya di if-nya
const values = { value1: 25, value2: 2 };

if (value % 2 === 0) {
  console.log("evenNumber");
} else {
  console.log("oddNumber");
}

if (value2 % 2 === 0) {
  console.log("evenNumber");
} else {
  console.log("oddNumber");
}

/* -------------------------------------------------------------------------- */
/*                           2. prime or not checker                          */
/* -------------------------------------------------------------------------- */

const minyak = 7;
const minyak2 = 6;

if (minyak / minyak === 1 && minyak / 1 === minyak) {
  console.log("primeNumber");
} else {
  console.log("compositeNumber");
}
//persyaratannya agak salah
if (minyak2 / minyak2 === 1 && minyak2 / 1 === minyak2) {
  console.log("primeNumber");
} else {
  console.log("compositeNumber");
}

/* -------------------------------------------------------------------------- */
/*                              3. sum of 1 to N                              */
/* -------------------------------------------------------------------------- */

const n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum = sum + 1;
}

/* -------------------------------------------------------------------------- */
/*                                5. fibonacchi                               */
/* -------------------------------------------------------------------------- */

const number = 0;

for (let i = 1; i == 15; i++) {
  const fibonacchi = number - 1 + number - 2;
  console.log(fibonacchi);
}
