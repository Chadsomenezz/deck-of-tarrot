class Cards{
    constructor() {
        this.cardList = [
            'ace-of-cups','ace-of-pentacles','ace-of-swords','ace-of-wands','death','eight-of-cups','eight-of-pentacles',
            'eight-of-swords','eight-of-wands','five-of-cups','five-of-pentacles','five-of-swords','five-of-wands','four-of-cups',
            'four-of-pentacles','four-of-swords','four-of-wands','judgement','justice','king-of-cups','king-of-pentacles','king-of-swords',
            'king-of-wands','knight-of-cups','king-of-wands','knight-of-pentacles','knight-of-swords','knight-of-wands','nine-of-cups',
            'nine-of-pentacles','nine-of-swords','nine-of-wands','page-of-cups','nine-of-pentacles','page-of-pentacles','page-of-swords',
            'page-of-wands','queen-of-cups','queen-of-pentacles','queen-of-swords','queen-of-wands','seven-of-cups','seven-of-pentacles',
            'seven-of-swords','seven-of-wands','six-of-cups','seven-of-swords','six-of-pentacles','six-of-swords','six-of-wands','strength',
            'strength','temperance','ten-of-cups','ten-of-pentacles','ten-of-swords','strength','ten-of-wands','the-chariot','strength','the-devil',
            'the-emperor','the-empress','the-fool','the-hanged-man','the-hermit','the-hierophant','the-high-priestess','the-lovers','the-magician',
            'the-moon','the-star','the-sun','the-tower','the-world','three-of-cups','three-of-pentacles','three-of-swords','three-of-wands',
            'two-of-cups','two-of-pentacles','two-of-swords','two-of-wands','wheel-of-fortune'
        ]
    }
    show_card_list(){
        console.log(this.cardList);
        return this;
    }
}

class Deck extends Cards{
    constructor() {
        super();
        this.selectedCards = [];
    }
    player_cards(player_card){
        if ( player_card.length === 7){
            for (let i=0;i<player_card.length;i++){
                this.selectedCards.push(this.cardList[player_card[i]]);
            }
            return this;
        }else {
            console.log("Please Select 7 Cards");
            return this;
        }
    }
    show_player_cards(){
        console.log(this.selectedCards);
        return this;
    }
    shuffle(){
        let arr = this.cardList;
        let randNum = null;
        let currentCard = null;
        for(let i= arr.length - 1; i>=0; i--){
            //generate random between 0 - current i;
            randNum = Math.floor(Math.random() * (i + 1) )
            //if the current index number is the same with the random do nothing, and skip the current loop
            if(i === randNum){continue;}
            currentCard = arr[i];
            arr[i] = arr[randNum];
            arr[randNum] = currentCard;
        }
        return this;
    }
}

let deck = new Deck();
deck.shuffle().shuffle()
    .show_card_list()
    .player_cards([1,2,3,4,5,6,7])
    .show_player_cards();