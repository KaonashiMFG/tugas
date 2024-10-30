let message;
console.log(message);
message = "hello all";
console.log(message);

var replica = "makanan";
//symbol only allow $ and _
var $label = "dirhum";
//case sensitive
const Const = "darling";

console.log(replica);
{
  console.log(Const);
}

/* -------------------------------------------------------------------------- */
/*                               Data Type Check                              */
/* -------------------------------------------------------------------------- */

//typeof
console.log(typeof Infinity);

/* -------------------------------------------------------------------------- */
/*                                  TIPE DATA                                 */
/* -------------------------------------------------------------------------- */

//string
const string = "hutang";
const String = "kemana";
console.log(String);
console.log(string);

//number
const level = 1;
const lose = 2;
console.log(level - lose);

//boolean
console.log(true / false);
let isLoading = true;

//non primitive data types
//Object
const personIdentitiy = { name: "John Doe", age: 80, height: "120 cm" };

console.log(personIdentitiy.name);
console.log(personIdentitiy.name + ", " + personIdentitiy.age);
console.log(
  `halo, gw ${personIdentitiy.name}, gw idup selama ${personIdentitiy.age}, tingginya ${personIdentitiy.height}`
);
