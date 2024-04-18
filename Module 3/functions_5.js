function firstNonRepeatingChar(str) {

    const charFreq = {};

    for (let char of str) {
        charFreq[char] = (charFreq[char] || 0) + 1;
    }

    for (let char of str) {
        if (charFreq[char] === 1) {
            return char; 
        }
    }

    return null;
}

