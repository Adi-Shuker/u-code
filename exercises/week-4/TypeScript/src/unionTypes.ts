//Union Types
let result: number | string;

result = 10; // OK
result = 'Hi'; // also OK
// result = false; // a boolean value, ERROR
//Type Aliases
type ID = number | string; // Type alias 'ID'

let returnedId: ID = 8; // OK
let newId: ID = '9'; // OK

type Type  = string | number | boolean
const val: Type  = true;

// function doX(val: Type ): Type  {
//     return val == 8;
// }

//console.log(doX(val));

// Literal Types and Enums
let favouriteColor: 'red' | 'blue' | true | 12;

favouriteColor = 'blue';
//favouriteColor = 'crimson'; // ERROR, Type "crimson" is not assignable to type 'red' | 'blue' | true | 12.

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
//   }
  
//   console.log(Direction.Up); // => 1
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  
  console.log(Direction.Up); // => UP