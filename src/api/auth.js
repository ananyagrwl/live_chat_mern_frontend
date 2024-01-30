import axios from "axios";

const API = "http://localhost:8000/"

export const signup = async (name, email, password) => {
    console.log("inside API");
    console.log(name, email,password);
    try {
        const data = await axios.post(API+'auth/signup', { name, email, password});
        console.log("Api data",data);
        if (data.data) console.log(data.data);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const login = async (email, password ) => {
    try {        
        const data = await axios.post(API + 'auth/login', { email, password });
        return data.data;
    } catch (error) {
        console.log(error);
    }
}