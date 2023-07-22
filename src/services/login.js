import axios from "axios";

export const login = async (url, params)=>{
    axios.post(url, {
        ...params
    }).then(res=>{
        if(res.status === 200){
            localStorage.setItem('token', res.data.token);
            return true;
        }
    }).catch(err=>{
        localStorage.removeItem('token');
    });
}