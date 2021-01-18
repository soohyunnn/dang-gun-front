const INPUT_CHANGE = "postInputs/INPUT_CHANGE";
const UPLOAD_IMAGE = "postInputs/UPLOAD_IMAGE";

export const inputchange = (name, value) => ({
  type: INPUT_CHANGE,
  name,
  value,
});
export const uploadimage = (file) => ({
  type: UPLOAD_IMAGE,
  file,
});

const initialState = {
  post: {
    title: "",
    content: "",
    price: "",
    user: {
      id: "",
      username: "",
    },
  },
  file: {},
  id: "",
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
    default:
      return state;
  }
}
