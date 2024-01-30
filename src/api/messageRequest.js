import axios from "axios";

const API = "http://localhost:8000/";

// getting msg betwwen two user by sending chat id
export const messageData = async (id) => {
    try {        
        const data = await axios.get(API + `message/${id}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const addMessage = async (msg) => {
    try {        
        const data = await axios.post(API + `message/`, msg);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}