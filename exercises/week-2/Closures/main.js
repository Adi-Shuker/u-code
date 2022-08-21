const family = () => {
    const members = [];
    const birth = function (name) {
        members.push(name);
        console.log(members);
    };
    return birth;
};
const giveBirth = family();
giveBirth("Adi");
giveBirth("Shani");
giveBirth("Aviv");
