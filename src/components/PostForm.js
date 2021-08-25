import React, { useState } from "react";
import { addPost, removePost } from "../actions/Actions";
import { useDispatch} from "react-redux";
import './FormStyle.scss'
import {Button,Input } from "reactstrap"

const TodoForm = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  
  
  const handleSubmit= ()=> {
    dispatch(addPost(inputData));
    setInputData("");
  }

  return (
    <>
      <div className="row">
        <br/>
        <Input size="sm"  className="mt-4 ms-3 me-3 w-25 col-1"
          type="text"
          value={inputData}
          placeholder="Add item here"
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button className=" mt-4 col-1" size="sm" onClick={handleSubmit}>
          Add
        </Button>
      </div>
  
        
      <div className="mt-2">
        <Button onClick={()=> dispatch(removePost())}>
          Checklist
        </Button>
      </div>
    </>
  );
};

export default TodoForm;
