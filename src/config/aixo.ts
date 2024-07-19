import axios from "axios";
const cong =axios.create({
    baseURL: 'http://localhost:3000'
})
cong.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token');

        config.headers['Authorization']= token ? `Bearer ${token}`: null; 
        return config;
    },
    (error) => {
         Promise.reject(error);
    }

)

export default cong