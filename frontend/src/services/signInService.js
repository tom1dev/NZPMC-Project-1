const axios = require('axios');

const signIn = async (email, password) => {
    const res = await axios.post('http://localhost:3001/signin', {email, password}).catch(error => {
        throw new Error( error.response.data);
    });

    if(res.status === 200){
        return res.data;
    }else{
        throw new Error(res.data.message);
    }


}

export default signIn;