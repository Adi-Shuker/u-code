const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
};
const checkReservation = function () {
    const name = document.getElementById("name").value;
    if (reservations[name] !== undefined) {
        if (!reservations[name].claimed) {
            console.log(`Welcome ${name}`);
        } else {
            console.log("Hmm, someone already claimed this reservation");
        }
    } else {
        console.log("You have no reservation");
    }
};
