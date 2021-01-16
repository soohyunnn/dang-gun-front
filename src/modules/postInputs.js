const INPUT_CHANGE = "postInputs/INPUT_CHANGE";

export const inputchange = (name, value) => ({
  type: INPUT_CHANGE,
  name,
  value,
});

const initialState = {
  post: {
    title: "",
    content: "",
    price: "",
    userId: {
      id: "",
      username: "",
    },
  },
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
    default:
      return state;
  }
}
