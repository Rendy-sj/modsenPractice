function fetchContents(urls) {
    const promises = [];

    for (const url of urls) {

        const promise = new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${url}`);
                    }
                    return response.text();
                })
                .then(content => {
                    resolve({ url: url, content: content });
                })
                .catch(error => {
                    reject(error);
                });
        });

        promises.push(promise);
    }

    return Promise.all(promises);
}

