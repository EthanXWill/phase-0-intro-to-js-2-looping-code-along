const writtenCards = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        writtenCards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    };
    return writtenCards;
};

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}