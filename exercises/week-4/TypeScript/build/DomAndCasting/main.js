"use strict";
// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement", someElement.value);
const someElement = document.querySelector(".foo");
if (someElement) {
    someElement.addEventListener("blur", (event) => {
        const target = event.target;
        console.log("event", target.value); // WORKS
    });
}
//# sourceMappingURL=main.js.map