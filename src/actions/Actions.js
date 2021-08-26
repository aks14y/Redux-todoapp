import axios from "axios";
import { ENDPOINTS } from "../App";


export const fetchRequest = () => {
  return{
    type: "FETCH_REQUEST"
  }
}

export const fetchSuccess = (data) => {
  return{
    type: "FETCH_SUCCESS",
    payload: data
  }
}

export const fetchFailure = (error) => {
  return{
    type: "FETCH_FAILURE",
    payload: error
  }
}

export const fetchRequestPost = () => {
  return{
    type: "FETCH_REQUEST_POST"
  }
}

export const fetchSuccessPost = (data) => {
  return{
    type: "FETCH_SUCCESS_POST",
    payload: data
  }
}

export const fetchFailurePost = (error) => {
  return{
    type: "FETCH_FAILURE_POST",
    payload: error
  }
}


export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      title: data,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};
export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchRequest())
    axios.get(ENDPOINTS.posts)
    .then(res => {
      const data=res.data
      dispatch(fetchSuccess(data))
    })
    .catch(err => {
      const errMessage=err.message
      dispatch(fetchFailure(errMessage))
    })
  }

}

export const addPost = (data) => {
  return {
    type: "ADD_POST",
    payload: {
      id: new Date().getTime().toString(),
      title: data,
    },
  };
};
export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    id
  };
};
export const removePost = () => {
  return {
    type: "REMOVE_POST",
  };
};


export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchRequestPost())
    axios.get('/posts')
    .then(res => {
      const data=res.data
      dispatch(fetchSuccessPost(data))
    })
    .catch(err => {
      const errMessage=err.message
      dispatch(fetchFailurePost(errMessage))
    })
  }

}


