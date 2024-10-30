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
let area = Math.PI * r * 5;
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
let initialDate = new Date('2022-01-20')
let endDate = new Date ('2022-01-22')
var diff = initialDate.getTime() - endDate.getTime()
console.log(diff)