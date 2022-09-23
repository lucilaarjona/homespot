import axios from "axios";

const axiosHelper = axios.create({
    baseURL: "http://3.137.124.253:8080/",
    headers: {
        "Content-type":"application/json",
        
    }
})

export default axiosHelper
