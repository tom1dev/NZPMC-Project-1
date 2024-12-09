import axios from 'axios';

const getAllEvents = async () => {
    const res =  await axios.get('http://localhost:3001/api/event').headers({'authorization':document.cookie});
    if(res.status === 200){
        return res.data;
    }else if(res.status === 404){
        return null;
    }else{
        throw new Error(res.data.message);
    }
}

const getEventById = async (id) => {
    const res = await axios.get(`http://localhost:3001/api/event/${id}`,{headers: {'authorization': document.cookie}});
    if(res.status === 200){
        return res.data;
    }else if(res.status === 404){
        return null;
    }  else{
        throw new Error(res.data.message);
    }



}

const createEvent = async (event) => {
    const res =  await axios.post('http://localhost:3001/api/event', event,{headers: {'authorization': document.cookie}});
    if(res.status === 201){
        return res.data;
    }  else if(res.status === 403){
        throw new Error("Unauthorized cannot access this endpoint");
    }  else if(res.status === 401){
        throw new Error("User not authorized to create event");
    }else{
        throw new Error(res.data.message);
    }


}

export default {
    getAllEvents,
    getEventById,
    createEvent
}