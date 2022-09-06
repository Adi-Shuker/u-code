// const someElement = document.querySelector(".foo") as HTMLInputElement;
// console.log("someElement", someElement.value);

const someElement = document.querySelector(".foo");
if(someElement){
    someElement.addEventListener("blur", (event) => {
        const target = event.target as HTMLInputElement;
        console.log("event", target.value); // WORKS
      });
}
