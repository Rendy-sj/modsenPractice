async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort(); 
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId); 
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request timed out');
        } else {
            console.error('An error occurred:', error.message);
        }
        throw error; 
    }
}


