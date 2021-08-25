const initialData = {
  loading : false,
  list: [],
  error: ''
};

const PostReducer = (state = initialData, action) => {
  switch (action.type) {
    case "FETCH_REQUEST_POST":
      return{
        loading: true
      }
    
    case "FETCH_SUCCESS_POST":
      return{
        loading: false,
        list : action.payload,
        error :''
      }

    case "FETCH_FAILURE_POST":
      return{
        loading : false,
        list : [],
        error : action.payload
      }  

    case "ADD_POST":
      const { id, title } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            title: title,
          },
        ]
      };
    case "DELETE_POST":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE_POST":
        return{
          ...state,
          list:[]
        }
    default:
      return state;

  }
};
export default PostReducer;
