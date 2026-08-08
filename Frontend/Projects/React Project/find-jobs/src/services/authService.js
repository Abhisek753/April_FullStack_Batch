const API_URL="http://localhost:3000";

export const signup= async (userData)=>{
    try{
        const response=await fetch(`${API_URL}/users`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const data=await response.json();
        return data;
    }catch(error){
        console.error("Error occurred while signing up:", error);
        throw error;
    }
}
export const login= async (email,password)=>{
    console.log(typeof(password));
    console.log(email,password,"test");
    try{
        const response=await fetch(`${API_URL}/users?email=${email}&password=${password}`);
        console.log(response)
        const data=await response.json();
        console.log(data,"data");
        if(data.length>0){
            return data[0];
        }else{
            throw new Error("Invalid email or password");
        }
    }catch(error){
        console.error("Error occurred while logging in:", error);
        throw error;
    }   
}    