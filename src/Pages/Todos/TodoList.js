import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteTodo } from '../../actions/Actions';
import {Button } from "reactstrap"

function TodoList(){

  const data = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();

  return(
    <div>
      <h1 className="text-center">Todo List</h1>
      <ul>
        {
          data.list.map((todo) => (
            <div key ={todo.id}>
              <p>title -{todo.title}<br/>
              ID - {todo.id}
              </p>
              <Button color="primary" onClick={()=> dispatch(deleteTodo(todo.id))}>
                delete
              </Button>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
export default TodoList;