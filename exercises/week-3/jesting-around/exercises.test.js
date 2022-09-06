const exercises = require("./exercises");

const exercise = new exercises();

//ex1
const oddNumbers = [1, 3, 5, 7, 9];
test.each(oddNumbers)("isEven function fails for non-even value %j", (num) =>
    expect(exercise.isEven(num)).toBeFalsy()
);

const evenNumbers = [0, 2, 4, 6, 8];
test.each(evenNumbers)("isEven function fails for even value %j", (num) =>
    expect(exercise.isEven(num)).toBeTruthy()
);

const isEvenEdgeCases = ["hello", null, undefined];
test.each(isEvenEdgeCases)(
    "isEven edge cases fails for even value %j",
    (input) => expect(exercise.isEven(input)).toBeFalsy()
);

//ex2
const removeAtLeastOneArray = [
    { arr: [1, 2, 3, 4], length: 4 },
    { arr: [1, 2, 3], length: 3 },
];
test.each(removeAtLeastOneArray)(
    "removeAtLeastOne function fails for input %j",
    (input) =>
        expect(exercise.removeAtLeastOne(input.arr).length).toBeLessThan(
            input.length
        )
);

const removeAtLeastOneEdgeCases = [
    { arr: [], length: 0 },
    { arr: 5, length: 0 },
    { arr: null, length: 0 },
    { arr: undefined, length: 0 },
];
test.each(removeAtLeastOneEdgeCases)(
    "removeAtLeastOne edge cases fails for input %j",
    (input) =>
        expect(exercise.removeAtLeastOne(input.arr).error).toBe("invalid input")
);

//ex3
const format = /[^!#.,']*/g;
const stringsArray = ["!.sfd", "asf", ""];
test.each(stringsArray)("simplify function fails for value %j", (str) =>
    expect(exercise.simplify(str)).toMatch(format)
);

const simplifyEdgeCases = [5, null, undefined];
test.each(simplifyEdgeCases)(
    "simplify edge cases fails for even value %j",
    (input) => expect(exercise.simplify(input).error).toBe("invalid input")
);

//ex4
const validateErrorsArray = [{ arr: [1, 2, 3] }, { arr: [] }];
test.each(validateErrorsArray)(
    "validate function fails for input %j",
    (input) =>
        expect(exercise.validate(input.arr).error).toBe(
            "Need at least one boolean"
        )
);

const validateArray = [
    { arr: [false, true, true], res: true },
    { arr: [false, 1, true, true], res: true },
    { arr: [true], res: true },
    { arr: [false, false, true], res: false },
    { arr: [false, 1, false, true], res: false },
    { arr: [false], res: false },
];
test.each(validateArray)("validate function fails for value %j", (input) =>
    expect(exercise.validate(input.arr)).toBe(input.res)
);

const validateEdgeCases = ["hello", null, undefined];
test.each(validateEdgeCases)("validate function fails for value %j", (input) =>
    expect(exercise.validate(input).error).toBe("Need at least one boolean")
);
