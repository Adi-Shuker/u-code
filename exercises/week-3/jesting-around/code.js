const add = function (a, b) {
    return a + b;
};
const calculateHyp = (num1, num2) => {
    return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2), 2);
};
const removeBugs = function (code) {
    return code.map((c) => c != "BUG");
};
const clearLowPriority = (items) => {
    return items.filter((item) => item.priority === "HIGH");
};

class PictureManager {
    constructor() {
        this.pictureURLs = [];
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL);
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
    }
}

const utils = {
    add,
    calculateHyp,
    removeBugs,
    clearLowPriority,
    PictureManager,
};

// export default utils;
module.exports = utils;
