// import { add } from "./code";
const utils = require("./code");
test("add should return sum of a + b", () => {
    let sum = utils.add(1, 2);
    expect(sum).toBe(3);
});
test("add should return sqrt root of a^2 + b^2", () => {
    let c = utils.calculateHyp(3, 4);
    expect(c).toBe(5);
});
test("should remove all BUGs from list of code", () => {
    let code = [
        "great code",
        "good code",
        "BUG",
        "async await awesome code",
        "BUG",
        "BUG",
        "general code",
    ];
    let bugFreeCode = utils.removeBugs(code);
    expect(bugFreeCode).not.toContain("BUG");
    //expect(bugFreeCode).toContain("good code"); //this is just an example, there are other ways to check
});
test("should keep only HIGH priority tasks", () => {
    let tasks = [
        { text: "dummy", priority: "HIGH" },
        { text: "dummy", priority: "LOW" },
    ];
    let filteredTasks = utils.clearLowPriority(tasks);

    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0].priority).toBe("HIGH");
});
const PM = utils.PictureManager;

test("addPicture should add a picture URL to the pictureURLs array", function () {
    //sanity
    const picManager = new PM();
    expect(picManager.pictureURLs.length).toBe(0);

    picManager.addPicture("some_url");
    expect(picManager.pictureURLs.length).toBe(1); //test
    expect(picManager.pictureURLs).toContain("some_url"); //double check
});
test("removePicture should receive a picture URL and remove it from the pictureURLs array", function () {
    //sanity
    const picManager = new PM();
    expect(picManager.pictureURLs.length).toBe(0);

    picManager.addPicture("some_url");
    picManager.addPicture("some_url2");
    picManager.addPicture("some_url3");

    picManager.removePicture("some_url2");
    expect(picManager.pictureURLs.length).toBe(2);
    expect(picManager.pictureURLs.length).not.toContain("some_url2"); //here this isn't double checking, this is necessary
});
