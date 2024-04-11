async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); 
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error; 
    }
}

async function exampleUsage() {
    try {
        const result = await fetchData();
        console.log('Data:', result);
    } catch (error) {
        console.error('Failed to load data:', error);
    }
}

exampleUsage();
