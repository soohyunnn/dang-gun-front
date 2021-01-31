const INPUT_CHANGE = "postInputs/INPUT_CHANGE";
const UPLOAD_IMAGE = "postInputs/UPLOAD_IMAGE";
const SAVE_DETAIL_POST = "postInputs/SAVE_DETAIL_POST";
const SAVE_IMAGE = "postInputs/SAVE_IMAGE";
const INPUT_DETAIL_CHANGE = "postInputs/INPUT_DETAIL_CHANGE";

export const inputchange = (name, value) => ({
  type: INPUT_CHANGE,
  name,
  value,
});
export const uploadimage = (file) => ({
  type: UPLOAD_IMAGE,
  file,
});
export const savedetailpost = (data) => ({
  type: SAVE_DETAIL_POST,
  data,
});
export const saveimage = (data) => ({
  type: SAVE_IMAGE,
  data,
});
export const inputdetailchange = (name, value) => ({
  type: INPUT_DETAIL_CHANGE,
  name,
  value,
});

const initialState = {
  post: {
    postId: 0,
    title: "",
    content: "",
    price: "",
    userEmail: "",
  },
  file: {},
  id: "",
  detailPost: {
    content: "",
    createAt: "",
    id: 0,
    viewCnt: 0,
    likeCnt: 0,
    modifiedAt: "",
    price: 0,
    title: "",
    userEmail: "",
    detailaddress: "",
  },
  images: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        post: {
          ...state.post,
          [action.name]: action.value,
        },
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        file: action.file,
      };
    case SAVE_DETAIL_POST:
      return {
        ...state,
        detailPost: action.data,
      };
    case SAVE_IMAGE:
      return {
        ...state,
        images: action.data,
      };
    case INPUT_DETAIL_CHANGE:
      return {
        ...state,
        detailPost: {
          ...state.detailPost,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}
