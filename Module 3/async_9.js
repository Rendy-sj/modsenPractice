async function fetchDataFromMultipleServers(urls) {
    try {
        const promises = urls.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${url}`);
            }
            return response.json();
        });

        const results = await Promise.all(promises);

        return results;
    } catch (error) {
        console.error("Error fetching data:", error);

        throw error;
    }
}

const serverUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/1'
];

fetchDataFromMultipleServers(serverUrls)
    .then(results => {
        console.log("Combined results:", results);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
