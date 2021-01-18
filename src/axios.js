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
export function createPostAPI(url, data) {
  console.log("createPostAPI Start, url : ", url, " Post : ", data);
  return axios.post(API_BASE_URL + url, data);
}

/**
 * 이미지등록  => 사용 X, 나중에 삭제
 * @param {*} url
 * @param {*} data
 */
export function uploadImageAPI(url, data) {
  console.log("uploadImageAPI Start, url : ", url, " file : ", data);
  return axios.post(API_BASE_URL + url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
