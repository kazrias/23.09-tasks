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
    else throw new Error("Wrong balance");
  }

  credit(increaseAmount) {
    if (checkAmount(increaseAmount))
      this.#balance += increaseAmount
    else throw new Error("Wrong amount");
  }

  debit(decreaseAmount) {
    if (checkAmount(decreaseAmount) && decreaseAmount <= this.#balance)
      this.#balance -= decreaseAmount;
    else throw new Error("Wrong amount");
  }

  transferTo(anotherAcc, amount) {
    if (checkAmount(amount) && amount <= this.#balance) {
      this.#balance -= amount;
      anotherAcc.balance += amount;
    }
    else throw new Error("Wrong amount for transfer");
  }

  static identifyAccounts(...accounts) {
    const idsSet = new Set()
    for (const account of accounts) {
      if (idsSet.has(account.id))
        return false
      idsSet.add(account.id);
    }
    return [true, idsSet]
  }
}

