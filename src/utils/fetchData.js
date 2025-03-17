import axios from "axios";

export const fetchData = async(endpoint, id)=>{
    const response = await axios.get(`http://localhost/Library_Exam/admin/api/${endpoint}/find?id=${id}`);
    return response.data;
            
}