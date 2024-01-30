import axios from "axios";

const API = "http://localhost:8000/";

export const getUser = async (userId) => {
    try {        
        const data = await axios.get(API + `user/${userId}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}