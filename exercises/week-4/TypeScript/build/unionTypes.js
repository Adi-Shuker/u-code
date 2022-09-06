"use strict";
//Union Types
let result;
result = 10; // OK
result = 'Hi'; // also OK
let returnedId = 8; // OK
let newId = '9'; // OK
const val = true;
// function doX(val: Type ): Type  {
//     return val == 8;
// }
//console.log(doX(val));
// Literal Types and Enums
let favouriteColor;
favouriteColor = 'blue';
//favouriteColor = 'crimson'; // ERROR, Type "crimson" is not assignable to type 'red' | 'blue' | true | 12.
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
//   }
//   console.log(Direction.Up); // => 1
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up); // => UP
//# sourceMappingURL=unionTypes.js.map