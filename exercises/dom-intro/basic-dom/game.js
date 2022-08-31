const moveRight = document.getElementById("right");
moveRight.onclick = function () {
    if ((parseInt(document.getElementById("ball").style.left) || 0) <= 400) {
        document.getElementById("ball").style.left =
            (parseInt(document.getElementById("ball").style.left) || 0) +
            15 +
            "px";
    }
};
const moveLeft = document.getElementById("left");
moveLeft.onclick = function () {
    if (parseInt(document.getElementById("ball").style.left) || 0 > 0) {
        document.getElementById("ball").style.left =
            (parseInt(document.getElementById("ball").style.left) || 0) -
            15 +
            "px";
    }
};
const moveUp = document.getElementById("up");
moveUp.onclick = function () {
    if ((parseInt(document.getElementById("ball").style.top) || 0) > 0) {
        document.getElementById("ball").style.top =
            (parseInt(document.getElementById("ball").style.top) || 0) -
            15 +
            "px";
    }
};
const moveDown = document.getElementById("down");
moveDown.onclick = function () {
    if ((parseInt(document.getElementById("ball").style.top) || 0) <= 400) {
        document.getElementById("ball").style.top =
            (parseInt(document.getElementById("ball").style.top) || 0) +
            15 +
            "px";
    }
};
// לשלוף כמה אלמנטים מאותו סוג פעם אחת ולמנוע קריאות מרבות מהדום
//     ball < 40 ? command : null;
// 

