function accessProperty(obj) {
    try {
        console.log("Property value:", obj.property);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("An error occurred:", error.message);
            console.error("The object is undefined or null.");
        } else {
            throw error;
        }
    }
}

const obj = undefined;
accessProperty(obj); 
