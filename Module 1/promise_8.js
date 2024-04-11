function asyncOperationsSequential(operations) {
    let promise = Promise.resolve();

    operations.forEach(operation => {
        promise = promise.then(operation);
    });

    return promise;
}

const operations = [
    () => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Operation 1');
                resolve();
            }, 1000);
        });
    },
    () => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Operation 2');
                resolve();
            }, 2000);
        });
    },
    () => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Operation 3');
                resolve();
            }, 1500);
        });
    }
];

asyncOperationsSequential(operations)
    .then(() => {
        console.log('All operations completed');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
