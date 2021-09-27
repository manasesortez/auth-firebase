import React from 'react';
import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('jwt');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`http://localhost:8001/api/auth-controller/authenticate`,
        'data':authRequest
    })
}


export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`http://localhost:8001/api/users`,
        headers:{
            'Authorization':'Bearer '+ getToken()
        }
    })
}
