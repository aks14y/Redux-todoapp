import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import './FormStyle.scss'

const TodoForm = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducer.list);

  return (
    <>
      <div>
        <input
          type="text"
          value={inputData}
          placeholder="Add item here"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
          Add
        </button>
      </div>
      <div>
        {list.map((elam) => {
          return (
            <div className="form-container" key={elam.id}>
              <h3>{elam.data}</h3>
              <button onClick={() => dispatch(deleteTodo(elam.id))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
        
      <div className="button-checklist">
        <button onClick={()=> dispatch(removeTodo())}>
          Checklist
        </button>
      </div>
    </>
  );
};

export default TodoForm;
