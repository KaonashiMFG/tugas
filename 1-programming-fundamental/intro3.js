const none = (NaN);

if (true) {
  console.log("Aku ada di sini");
}
if (false) {
  console.log("Aku tidak ada di sini");
}

const theGOAT = "RonaldO";

if (theGOAT.toLowerCase() === "ronaldo") {
  console.log("Yea the GOAT is Ronaldo");
} else {
  console.log("Messi!!");
}

/* -------------------------------------------------------------------------- */
/*                               switch and case                              */
/* -------------------------------------------------------------------------- */

const kacang = "mede";
const kacang2 = "disco";

switch (kacang.toLowerCase()) {
  case "mede":
    console.log("enak");
    console.log("banget");
  case "disco":
    console.log("enak");
    console.log("juga");
}

/* -------------------------------------------------------------------------- */
/*                                    loop                                    */
/* -------------------------------------------------------------------------- */
//      bukannya ada hasilnya mucul ampe 90 kali?
for (let i = 20; i <= 10; i--) {
  console.log("yuk makan");
}

//while loop
let counter = 1;

while (counter < 10) {
  console.log(counter);
  counter++;
}

//do while loop
let tracker = 11;

do {
  console.log(tracker);
  tracker++;
} while (tracker < 10);
