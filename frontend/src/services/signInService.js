const axios = require('axios');

const signIn = (email, password) => {
    return axios.post('http://localhost:3001/signin', {email, password}).then(response => {
        return response.data;
    }).catch(error => {
        return error.response.data;
    });
}

export default signIn;