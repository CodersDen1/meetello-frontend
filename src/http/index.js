import axios from "axios";

const api=axios.create({
    baseURL:process.env.REACT_APP_API,
    headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
    }
});


//list of endpoints

export const sendOTP =(data)=> api.post('/api/users/generate',data)

export const verifyOtp=(data)=> api.post('/api/users/verify-otp',data)

export const activate =(data)=> api.post('/api/users/activate', data)

export default api;