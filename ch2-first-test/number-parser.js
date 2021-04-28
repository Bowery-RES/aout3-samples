class NumberParser {
  
  constructor() {
    this.total = 0;
  }

  sum(numbers) {
    const [a, b] = numbers.split(',');

    const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
    this.total += result;

    return result;
  }
}

module.exports = {
  NumberParser
};