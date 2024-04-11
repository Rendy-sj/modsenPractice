function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Number is not an integer');
    }
}

try {
    checkInteger(5);  
    checkInteger(3.14);  
} catch (error) {
    console.error(error.message);
}
