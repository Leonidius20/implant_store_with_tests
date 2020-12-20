const API_URL = 'https://my-json-server.typicode.com/Leonidius20/implant_store/';

export function fetchFromEndpoint(endpoint) {
    return fetch(API_URL + endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}

export function postToEndpoint(endpoint, data) {
    return fetch(API_URL + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}

export function putToLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key)) || {};
}