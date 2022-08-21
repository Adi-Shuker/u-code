const addError = function (massage) {
    const errors = document.getElementById("errors");
    const error = document.createElement("div");
    error.innerHTML = massage;
    error.setAttribute("class", "error");
    errors.appendChild(error);
};
const validate = function () {
    const name = document.getElementById("name").value;
    console.log("name", name);
    const desiredSalary = document.getElementById("desired-salary").value;
    console.log("desiredSalary", desiredSalary);
    const birthday = document.getElementById("birthday").value;
    console.log("birthday", birthday);
    const phone = document.getElementById("phone").value;
    console.log("phone", phone);
    let massage = "";
    if (name === undefined || name.length <= 2) {
        addError("name is to short");
    }
    if (
        desiredSalary === undefined ||
        isNaN(parseInt(desiredSalary)) ||
        parseInt(desiredSalary) < 10000 ||
        parseInt(desiredSalary) > 16000
    ) {
        addError("salary is not valid");
    }
    if (phone == undefined || phone.length < 10) {
        addError("phone number is not valid");
    }
};
