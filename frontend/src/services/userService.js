import axios from 'axios';


const getAllUsers = async () => {
    const res = await axios.get('http://localhost:3001/users',{headers: {'authorization': document.cookie}}).catch(error => {
        throw new Error(error.response.data);
    });

    if(res.status === 200){
        return res.data;
    }  else if(res.status === 401){
        throw new Error("Unauthorized cannot access this endpoint");
    }  else if(res.status === 403){
        throw new Error("User not authorized to get all users");
    }else{
        throw new Error(res.data.message);
    }



}

const getUserById = async (id) => {
    const res = await axios.get('http://localhost:3001/api/user',id,{headers: {'authorization': document.cookie}}).catch(error => {
        throw new Error(error.response.data);
    });
    
    if(res.status === 200){
        return res.data;
    }  else if(res.status === 401){
        throw new Error("Unauthorized cannot access this endpoint");
    }  else if(res.status === 403){
        throw new Error(`User not authorized to get user: ${id} `);
    }else{
        throw new Error(res.data.message);
    }
}

const createUser = async (user) => {
    const res = await axios.post('http://localhost:3001/api/user',user,{headers: {'authorization': document.cookie}}).catch(error => {
        throw new Error(error.response.data);
    });
    
    if(res.status === 201){
        return res.data;
    }  else if(res.status === 401){
        throw new Error("Unauthorized cannot access this endpoint");
    }  else if(res.status === 400){
        throw new Error(res.data.message);
    }else{
        throw new Error(res.data.message);
    }
}

const updateUser = async (id, user) => {


}

const getEventsByUserId = async (id) => {
    const res = await axios.get(`http://localhost:3001/api/user/${id}/events`,{headers: {'authorization': document.cookie}}).catch(error => {
        throw new Error(error.response.data);
    });
    
    if(res.status === 200){
        return res.data;
    }  else if(res.status === 401){
        throw new Error("Unauthorized cannot access this endpoint");
    }  else if(res.status === 403){
        throw new Error(`User not authorized to get events for user: ${id} `);
    }else{
        throw new Error(res.data.message);
    }
}

const addUserToEvent = async (userId, eventId) => {
    const res = await axios.post(`http://localhost:3001/api/user/${userId}/events`, {eventId},{headers: {'authorization': document.cookie}}).catch(error => {
        throw new Error(error.response.data);
    });

    if(res.status === 200){
        return res.data;
    }  else if(res.status === 401){
        throw new Error("Unauthorized cannot access this endpoint");
    }  else if(res.status === 403){
        throw new Error(`User not authorized to add user: ${userId} to event: ${eventId}`);
    }else if(res.status === 404){
        throw new Error("User or event not found");
    }else{
        throw new Error(res.data.message);
    }
}

export default {getAllUsers,
    getUserById,
    createUser,
    updateUser,
    getEventsByUserId,
    addUserToEvent}


