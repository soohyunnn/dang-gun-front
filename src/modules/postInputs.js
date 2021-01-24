const INPUT_CHANGE = "postInputs/INPUT_CHANGE";
const UPLOAD_IMAGE = "postInputs/UPLOAD_IMAGE";
const SAVE_DETAIL_POST = "postInputs/SAVE_DETAIL_POST";
const SAVE_IMAGE = "postInputs/SAVE_IMAGE";

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

const initialState = {
  post: {
    title: "",
    content: "",
    price: "",
    userId: "",
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
    userName: "",
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
      console.log("UPLOAD_IMAGE::", action.file);
      return {
        ...state,
        file: action.file,
      };
    case SAVE_DETAIL_POST:
      //console.log("SAVE_DETAIL_POST::", action.data);
      return {
        ...state,
        detailPost: action.data,
      };
    case SAVE_IMAGE:
      console.log("SAVE_IMAGE::", action.data);
      return {
        ...state,
        images: action.data,
      };
    default:
      return state;
  }
}
