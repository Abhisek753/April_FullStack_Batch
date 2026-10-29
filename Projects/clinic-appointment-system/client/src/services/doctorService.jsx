import { getHeaders,apiurl } from "./apiService";


export const getDoctors = async (endpoint) => { 
    const response = await fetch(`${apiurl}${endpoint}`,{
        method: "GET",
        headers: getHeaders()
    });
    return response.json();
}

export const getDoctor = async (endpoint) => {
    const response = await fetch(`${apiurl}${endpoint}`,{
        method: "GET",
        headers: getHeaders()
    });
    return response.json();
}