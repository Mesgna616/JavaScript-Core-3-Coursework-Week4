// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let filteredNumber = numbers.filter(num => {
        return typeof num === 'number'
    })

    let totalOfFilteredNumbers = filteredNumber.reduce((num1, num2) => {
         return (num1 + num2)
    })
    return totalOfFilteredNumbers/filteredNumber.length
}


module.exports = average;
