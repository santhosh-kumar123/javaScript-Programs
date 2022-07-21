let suit = ["Spade", "Diamond", "Club", "Heart"];
let value = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
let deck = [];
for (let i = 0; i < suit.length; i++) {
  for (let j = 0; j < value.length; j++) {
    let card = { value: value[j], suit: suit[i] };
    deck.push(card);
    }
    console.log(deck);
}
for (let i = deck.length-1; i > 0; i--) {
  let j = Math.floor(Math.random() * i); ;
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
for (let i = 0; i < 5; i++) {
  console.log(deck[i].value + " is " + deck[i].suit);
}
