function sumFirstAndLastDigits(number) {
 
    const numberStr = number.toString();

    const firstDigit = parseInt(numberStr[0]);
    const lastDigit = parseInt(numberStr[numberStr.length - 1]);

    const sum = firstDigit + lastDigit;

    console.log("Sum of first and last digits:", sum);
}


