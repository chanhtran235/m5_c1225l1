import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;
export async  function getAll(){
    try{
        const  res = await axios.get(`${API_URL}/classes`);
        return res.data;
    }catch (e){
        console.log("lỗi call api");
        console.log(e)
        return []
    }

}