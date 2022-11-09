const add = (numbers) => {
    const result = numbers.toString().split(",");
    return result.reduce((accumulatedValue, number) => {
      const integer = Number(number);
      if (integer > 1000) return accumulatedValue;
      if (integer < 0)
        throw new Error(`Negative numbers not allowed: ${integer}`);
      return accumulatedValue + integer;
    }, 0);
  }
  console.log(add("7,1"))
  module.exports = add;