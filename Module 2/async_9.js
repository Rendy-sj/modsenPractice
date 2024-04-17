async function loadDataAndSendRequest() {
    try {
        const firstServerResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!firstServerResponse.ok) {
            throw new Error('Failed to load data from the first server');
        }
        const firstServerData = await firstServerResponse.json();

        const secondServerResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(firstServerData)
        });
        if (!secondServerResponse.ok) {
            throw new Error('Failed to send request to the second server');
        }
        const secondServerData = await secondServerResponse.json();

        return secondServerData;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error; 
    }
}


