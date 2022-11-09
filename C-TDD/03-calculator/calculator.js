const add = (numbers) => {
    const result = numbers.split(",");
    return result.reduce((accumulatedValue, number) => {
      const integer = Number(number);
      if (integer > 1000) return accumulatedValue;
      if (integer < 0)
        throw new Error(`Negative numbers not allowed: ${integer}`);
      return accumulatedValue + integer;
    }, 0);
  }


  module.exports = add;