import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
    headers: {
        'X-Custom-Header': 'foobar',
        'Accept': 'application/json',
        'Authorization': 'Token ef3695bc4b59d216ad37b4ebcc5a6d2b62bee2a3'
    }
});

export default instance;