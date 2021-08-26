import React, { useState } from "react";
import { addTodo, removeTodo } from "../actions/Actions";
import { useDispatch} from "react-redux";
import './FormStyle.scss'
import {Button,Input } from "reactstrap"

const TodoForm = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  
  
  const handleSubmit= ()=> {
    dispatch(addTodo(inputData));
    setInputData("");
  }

  return (
    <>
      <div className="row" >
        <Input bsSize="sm"  className="mt-4 ms-3 me-3 w-25 col-1"
          
          type="text"
          value={inputData}
          placeholder="Add item here"
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button color="primary" className=" mt-4 col-1" size="sm" onClick={handleSubmit}>
          Add
        </Button>
      </div>
  
        
      <div >
        <Button color="primary" className="mt-2"  onClick={()=> dispatch(removeTodo())}>
          Checklist
        </Button>
      </div>
    </>
  );
};

export default TodoForm;
