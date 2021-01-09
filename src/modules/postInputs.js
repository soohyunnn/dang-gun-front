const ADD_POST = "postInputs/ADD_POST";
const INPUT_CHANGE = "postInputs/INPUT_CHANGE"

export const addpost = (post) => ({type: ADD_POST, post})
export const inputchange = (name, value) => ({type : INPUT_CHANGE, name, value})

const initialState = {
    post : {
        title : "",
        content : "",
        price : "",
    }
    
}

export default function reducer(state = initialState, action ){
    switch(action.type){
        case ADD_POST :
            console.log('ADD_POST', action.post);
            return {
                ...state,
                post: {
                    title : action.post.title,
                    content : action.post.title,
                    price : action.post.price,
                    imgPath : action.post.imgPath,
                    imgName : action.post.imgName
                }
        }
        case INPUT_CHANGE : 
            console.log('INPUT_CHANGE', action.name, '::',action.value);
            console.log('post',state.post)
            return {
                ...state,
                post: {
                    ...state.post,
                    [action.name] : action.value
                }

        }
        default :
            return state;
    }
}


