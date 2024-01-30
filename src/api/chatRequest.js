import axios from "axios";

const API = "http://localhost:8000/";

export const userChats = async (id) => {
    try {        
        const data = await axios.get(API + `chat/${id}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}