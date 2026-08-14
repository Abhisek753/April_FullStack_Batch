const API_URL="http://localhost:3000"
export const getJobs=async()=>{
    try{
        const url=`${API_URL}/jobs`
      const response=await fetch(url);
      return await response.json()
    }catch(err){

    }
}

export const getJobById=async(id)=>{
  try{
    
    const response=await fetch(`${API_URL}/jobs/${id}`);
    return await response.json();
  }catch(error){
    console.log(error);
    throw error
  }
}