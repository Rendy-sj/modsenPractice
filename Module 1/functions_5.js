function repeatOperation(operation, interval, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;
        if (count === repetitions) {
            clearInterval(intervalId);
        }
    }, interval);
}

function logHello() {
    console.log('Hello!');
}

repeatOperation(logHello, 1000, 5); 
