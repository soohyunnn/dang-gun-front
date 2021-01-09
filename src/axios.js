import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

/**
 * 회원가입
 * @param {*} url 
 * @param {*} user 
 */
export function addUserAPI(url , user){
    console.log('addUserApi Start, url : ',url , ' user : ' ,user);
    return axios.post(API_BASE_URL + url , user);
}