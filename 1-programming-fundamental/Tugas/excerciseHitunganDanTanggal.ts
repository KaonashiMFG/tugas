//1. rectangle area
const panjang = 5;
const lebar = 3;
console.log(panjang * lebar);

//2. rectangle perimiter
console.log(panjang * 2 + lebar * 2);

//3. circle (diameter, circumference, area)
const r = 5;

//    diameter
console.log(r * 2);

//    circumference
let circum = 2 * Math.PI * r;
const stringCircum = String(circum);
console.log(stringCircum.slice(0, 7));

//    area
//              tadinya pengen Math.PI*r** ada error di bagian const-nya (Expression Expected)
let area = Math.PI * r ** 2;
const stringArea = String(area);
console.log(stringArea.slice(0, 7));

//4. triangle angles
let allAngles = 180;
let abang = 80;
let bagas = 65;
console.log(allAngles - abang - bagas);

//5. date conversion (year, month, date)
console.log(new Date(400));
const Today = new Date();

//6. date difference
let endDate = new Date("2022-01-22");
let initialDate = new Date("2022-01-20");
let diff = endDate.getTime() - initialDate.getTime();


/* -------------------------------------------------------------------------- */
/*                              ka nadif nomor 6                              */
/* -------------------------------------------------------------------------- */

const date1 = new Date('2023-08-17');
const date2 = new Date("2023-08-20");

console.log(date1.getTime());
console.log(date2.getTime());
const differ = date2.getTime() - date1.getTime();
console.log(differ);

const differString = new Date(differ);
console.log(differString);
