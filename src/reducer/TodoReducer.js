const initialData = {
  loading : false,
  list: [],
  error: ''
};

const TodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return{
        loading: true
      }
    
    case "FETCH_SUCCESS":
      return{
        loading: false,
        list : action.payload,
        error :''
      }

    case "FETCH_FAILURE":
      return{
        loading : false,
        list : [],
        error : action.payload
      }  

    case "ADD_TODO":
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
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
        return{
          ...state,
          list:[]
        }
    default:
      return state;

  }
};
export default TodoReducer;
