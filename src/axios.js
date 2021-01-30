import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const token = sessionStorage.getItem("token");
console.log("token", token);
axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * 회원가입
 * @param {*} url
 * @param {*} user
 */
export function addUserAPI(url, user) {
  console.log("addUserApi Start, url : ", url, " user : ", user);
  return axios.post(API_BASE_URL + url, user);
}
/**
 * 중복회원 검사
 * @param {*} url
 * @param {*} value
 */
export function selectUserAPI(url, value) {
  console.log("selectUserAPI Start, url : ", url, " user : ", value);
  return axios.get(API_BASE_URL + url + "?email=" + value);
}

/**
 * 로그인
 * @param {*} url
 * @param {*} user
 */
export function loginUserAPI(url, user) {
  console.log("loginUserAPI Start, url : ", url, " user : ", user);
  return axios.post(API_BASE_URL + url, user);
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
 * 게시글수정
 * @param {*} url
 * @param {*} data
 */
export function updatePostAPI(url, data) {
  console.log("updatePostAPI Start, url : ", url, " Post : ", data);
  return axios.put(API_BASE_URL + url, data);
}

/**
 * 게시글 전체 조회
 * @param {} url
 */
export function selectAllPostAPI(url) {
  console.log("selectAllPostAPI Start, url : ", url);
  return axios.get(API_BASE_URL + url);
}

/**
 * 게시글 상세 조회
 * @param {*} url
 * @param {*} id
 */
export function selectOnePostAPI(url, id) {
  console.log("selectOnePostAPI Start, url : ", url, "id: ", id);
  return axios.get(API_BASE_URL + url);
}

/**
 * 게시글에 해당하는 이미지 조회
 * @param {*} url
 * @param {*} id
 */
export function selectOneImageAPI(url, id) {
  console.log("selectOneImageAPI Start, url : ", url, "id: ", id);
  return axios.get(API_BASE_URL + url);
}

export function deletePostAPI(url, data) {
  console.log("updatePostAPI Start, url : ", url, " Post : ", data);

  return axios.delete(
    API_BASE_URL + url + "?postId=" + data.id + "&userEmail=" + data.userEmail
  );
}
