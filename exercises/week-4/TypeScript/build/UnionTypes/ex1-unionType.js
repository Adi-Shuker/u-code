"use strict";
const concat = (str, shouldPrint) => {
    let concatString = "";
    if (shouldPrint > 1) {
        return;
    }
    if (shouldPrint) {
        if (typeof str === "string") {
            concatString = str;
        }
        else {
            concatString = str.reduce((concatString, str) => concatString + str);
        }
        console.log(concatString);
    }
};
concat(["hello", "hi"], true);
concat("hello-true", true);
concat(["hello", "hi"], false);
concat("hello", false);
concat(["hello0"], 0);
concat(["hello1"], 1);
// concat(["hello2"], 2)
//# sourceMappingURL=ex1-unionType.js.map