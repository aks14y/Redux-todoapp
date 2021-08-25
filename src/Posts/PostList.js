import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deletePost } from '../actions/Actions';
import {Button } from "reactstrap"

function PostList(){

  const data = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();

  return(
    <div>
      <h1 className="text-center text-primary">Post List</h1>
      <ul>
        {
          data.list.map((post) => (
            <div key ={post.id}>
              <p className="text-primary" >title -{post.title}<br/>
              ID - {post.id}
              </p>
              <Button onClick={()=> dispatch(deletePost(post.id))}>
                delete
              </Button>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
export default PostList;