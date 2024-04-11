function delayCallback(callback) {
    setTimeout(callback, 2000);
}

function myCallback() {
    console.log('Callback function executed after 2 seconds');
}

delayCallback(myCallback);
