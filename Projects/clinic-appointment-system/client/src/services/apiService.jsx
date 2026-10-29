
export const apiurl = "http://localhost:5000";
export const getHeaders = () => {
    const headers = {
        "Content-Type": "application/json",
    };
  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
 
  };
  return headers;
}