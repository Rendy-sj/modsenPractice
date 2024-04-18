function fetchDataFromMultipleAPIs(apiUrls) {
    // Создаем массив промисов для каждого API
    const promises = apiUrls.map(apiUrl => {
        return new Promise((resolve, reject) => {
            // Запрос данных с каждого API
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch data from ${apiUrl}`);
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    });

    // Возвращаем промис, который разрешится, когда все запросы завершатся
    return Promise.all(promises);
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchDataFromMultipleAPIs(apiUrls)
    .then(results => {
        console.log("Combined results:", results);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
