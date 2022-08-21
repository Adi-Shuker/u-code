const returnTime = function (time) {
    alert("The current time is: " + time);
};
const getTime = (func) => {
    const time = new Date();
    func(time);
};
getTime(returnTime);
