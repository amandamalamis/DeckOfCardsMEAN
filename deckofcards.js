class Card {
    constructor(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
    showcard() {
        console.log(` This is the ${this.name} of ${this.suit}.`);
    }
}

class Deck {
    constructor() {
        this.resetdeck();
        this.shuffle();
    }
    reset() {
        let deckreset = [];
        const values = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
        const suits = ["diamonds", "clubs", "hearts", "spades"];

        suits.forEach(suit => {
            values.forEach(function (values, idx) {
                deckreset.push(new Card(suit, name, idx + 1))
            })
        })
        return deckreset
    }
    dealcards(){
        let lessdeck = Math.floor(Math.random()* this.cards.length);
        let card = this.cards.splice(lessdeck, 1);
        return card[0];
    }

    shuffle(){
        let thiscard = this.cards
        for(let i = thiscard.length-1; i > 0; i--){
            let lessdeck = Math.floor(Math.random() * (i+1))
            let dealt = thiscard[lessdeck];
            thiscard[lessdeck] = thiscard[i];
            thiscard[i] = dealt;
        }
    }
}


class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }   
    
    drawcard(deck){
        let card = deck.deal();
        this.hand.push(card);
    }

    discard(){
        return this.hand.shift();
    }

}