import React, { useEffect } from "react";
import {  fetchTodos } from "../actions/Actions";
import TodoForm from "../components/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";

function TodoContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.TodoReducer);

  useEffect(() => {
    
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <TodoForm/>
      {
      data.loading ? (<h2>Loading</h2>) : data.error ? (<h2>{data.error}</h2>) : (
      <div>
        <div>
          <TodoList />
        </div>
      </div>
      )}
    
    </div>
  );
}
export default TodoContainer;
