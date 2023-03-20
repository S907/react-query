import axios from "axios";


axios.interceptors.request(request=>{
    console.log('Interceptor');
})