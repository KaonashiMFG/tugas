let price: number = 5000;
let quant: number = 20;

console.log(price);

/* -------------------------------------------------------------------------- */
/*                          starting build in methods                         */
/* -------------------------------------------------------------------------- */

const lyrics = "indonesia";
const points = 100;
console.log(lyrics.toLocaleLowerCase());
console.log(points);

const Paragraph = "i have a million dogs and dogs";
console.log(Paragraph.replace(/dogs/gi, "cats"));
// console.log(Paragraph.)

const title = "     Title to one      ";
console.log(title.trim());

/* -------------------------------------------------------------------------- */
/*                                    date                                    */
/* -------------------------------------------------------------------------- */
console.log(new Date());

/* -------------------------------------------------------------------------- */
/*                               basic operator                               */
/* -------------------------------------------------------------------------- */
let saldo = 10;
saldo += 10;
console.log(saldo + 10);
console.log(saldo);
saldo++;
saldo--;
console.log(saldo);

//increment decrement
let pont = 10;
console.log(pont);
console.log(++pont);

console.log(pont++);
console.log(pont);

/* -------------------------------------------------------------------------- */
/*                             boolean conversion                             */
/* -------------------------------------------------------------------------- */

//falsy
//no.0
console.log(Boolean(0));

//empty string
console.log(Boolean(""));

//null
console.log(Boolean(null));

//undefined
console.log(Boolean(undefined));
