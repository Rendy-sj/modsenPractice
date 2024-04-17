function sumOfFirstHalf(arr) {

    const middleIndex = Math.floor(arr.length / 2);
    let sum = 0;
    for (let i = 0; i < middleIndex; i++) {
        sum += arr[i];
    }

    return sum;
}

