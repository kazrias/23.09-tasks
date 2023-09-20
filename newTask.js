function createUniqId() {
  return Math.random().toString(16).slice(2)
}

function checkAmount(amount) {
  return typeof amount === 'number' && !isNaN(amount) && amount > 0
}

class Account {
  #balance = 0;
  constructor(name) {
    this.name = name;
    this.id = createUniqId();
  }
  get balance() {
    return this.#balance;
  }
  set balance(newBalance) {
    if (checkAmount(newBalance))
      this.#balance = newBalance
    else throw new Error("Wrong amount");
  }
  credit(increaseAmount) {
    if (checkAmount(increaseAmount))
      this.#balance += increaseAmount
    else throw new Error("Wrong amount");
  }
  debit(decreaseAmount) {
    if (checkAmount(decreaseAmount) && decreaseAmount <= this.#balance)
      this.#balance -= decreaseAmount;
    else throw new Error("Insufficient funds");
  }
  transferTo(anotherAcc, amount) {
    if (checkAmount(amount) && amount <= this.#balance) {
      this.#balance -= amount;
      anotherAcc.balance += amount;
    }
    else
      throw new Error("Insufficient funds transfer");
  }
  static identifyAccounts(...accounts) {
    const ids = {}
    for (const id of accounts) {
      if (id in ids)
        return false
      ids[id] = true;
    }
  }
}

const first = new Account('Tyom')
const second = new Account('Armin')

first.credit(5000)
second.credit(5000)

console.log(first.balance);
console.log(second.balance);