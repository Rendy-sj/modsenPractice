function increaseByTenPercent(numbers) {
    return numbers.map(number => number * 1.1);
}

const numbers = [10, 20, 30, 40];
const increasedNumbers = increaseByTenPercent(numbers);
console.log(increasedNumbers);
