for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    const container = document.getElementById("container");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
    box.onmouseenter = function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    };
    box.setAttribute("class", "box");
    container.appendChild(box);
}
