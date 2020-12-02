function Hangman (word) {
  this.correctWord = word;
  this.correctWordArray = word.split('');
  this.answers = [];
  this.errors = 6;
  this.mistakeLetter = [];

  this.answersArray = () => {
    this.answers = this.correctWordArray.map(() => '_');
  }
  
  this.guess = (letter) => {
    this.correctWordArray.map((el, index) => {
      if (el === letter) {
        this.answers[index] = letter;
      }
    })

    if (!this.answers.includes(letter)) {
      this.errors--;
      this.mistakeLetter.push(letter);

      if (this.errors > 0) {
        console.log(`wrong letter, errors left ${this.errors} | ${this.mistakeLetter.join(',')}`);
      } else {
        console.log(`You made the maximum number of mistakes and lost. Correct word ${this.correctWord}`);
      }

    }

    if (!this.answers.includes('_')) {
      console.log(`${this.correctWord} | You won!`);
    }

    console.log(this.answers.join(''));

    return this;
  };

  this.getGuessedString = () => {
    return this.answers.join('');
  };

  this.getErrorsLeft = () => {
    return this.errors;
  };

  this.getWrongSymbols = () => {
    return this.mistakeLetter;
  };

  this.getStatus = () => {
    return `${this.answers.join('')} | errors left ${this.errors}`;
  };

  this.startAgain = (newWord) => {
    this.correctWord = newWord;
    this.correctWordArray = newWord.split('');
    this.answers = [];
    this.errors = 6;
    this.mistakeLetter = [];

    this.answersArray();

    return this;
  };
}

let hangman = new Hangman('webpurple');

module.exports = hangman;
