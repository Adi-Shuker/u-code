const MathOperations = function () {
    const add = function (x, y) {
        return x + y;
    };

    const subtract = function (x, y) {
        return x - y;
    };

    const multiply = function (x, y) {
        return x * y;
    };

    const divide = function (x, y) {
        return x / y;
    };
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide,
    };
};

const UsersModule = function () {
    const _users = ["Aaron", "Avi"];

    const addUser = function (user) {
        _users.push(user);
    };

    const listUsers = function () {
        for (let user of _users) {
            console.log(user);
        }
    };

    return {
        addUser: addUser,
        listUsers: listUsers,
    };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.addUser("Adi");
usersModule.listUsers();
console.log(usersModule._users);
