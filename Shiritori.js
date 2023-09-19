class Shiritori {
  #words = [];
  #game_over = false;
  play(word) {
    if (this.#game_over)
      return 'Game is over, restart it!'
    if (typeof word !== 'string' || word.replaceAll(' ', '').length < 2)
      return "Word's type must be string and length greater than 1"
    const len = this.#words.length;
    const wordToPush = word.toLowerCase();
    if (!len || this.#words[len - 1].at(-1) === wordToPush[0] && !this.#words.includes(wordToPush)) {
      this.#words.push(wordToPush)
      return this.#words
    }
    else {
      this.#game_over = true;
      return `${wordToPush} is wrong, game over!`
    }
  }
  restart() {
    this.#words = [];
    this.#game_over = false
    return 'Game restared!'
  }
  get words() {
    return this.#words
  }
  get status() {
    return this.#game_over ? 'Game is finished' : "Game isn't finished"
  }
}
