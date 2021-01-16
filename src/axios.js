import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

/**
 * 회원가입
 * @param {*} url
 * @param {*} user
 */
export function addUserAPI(url, user) {
  console.log("addUserApi Start, url : ", url, " user : ", user);
  return axios.post(API_BASE_URL + url, user);
}

export function selectUserAPI(url, value) {
  console.log("selectUserAPI Start, url : ", url, " user : ", value);
  return axios.get(API_BASE_URL + url + "?email=" + value);
}

/**
 * 게시글등록
 * @param {*} url
 * @param {*} Post
 */
export function createPostAPI(url, Post) {
  console.log("createPostAPI Start, url : ", url, " user : ", Post);
  return axios.post(API_BASE_URL + url, Post);
}
