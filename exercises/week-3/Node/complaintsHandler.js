let dbData = require("./consts");
const handleComplaints = function (complaint) {
    if (complaint.type === dbData.variables.FINANCE) {
        console.log("Money doesn’t grow on trees, you know.");
    } else if (complaint.type === dbData.variables.WEATHER) {
        console.log("It is the way of nature. Not much to be done.");
    } else if (complaint.type === dbData.variables.EMOTIONS) {
        console.log("It’ll pass, as all things do, with time.");
    }
};
module.exports.handleComplaint = handleComplaints;
