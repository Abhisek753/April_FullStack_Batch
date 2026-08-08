const API_URL="http://localhost:3000"
export const getJobs=async()=>{
    try{
        const url=`${API_URL}/jobs`
      const response=await fetch(url);
      return await response.json()
    }catch(err){

    }
}