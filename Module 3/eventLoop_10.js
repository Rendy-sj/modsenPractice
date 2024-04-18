function generateRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        setTimeout(() => {
            if (randomNumber <= 5) {мис
                resolve(randomNumber);
            } else {
                reject(new Error(`Generated number ${randomNumber} is greater than 5`));
            }
        }, randomNumber * 1000); 
    });
}

generateRandomNumberWithDelay()
    .then(randomNumber => {
        console.log("Generated number:", randomNumber);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
