import React, { useEffect } from "react";
import {  fetchPosts } from "../actions/Actions";
import PostForm from "../components/PostForm";
import { useDispatch, useSelector } from "react-redux";
import PostList from "./PostList";

function PostContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.PostReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <PostForm/>
      {
      data.loading ? (<h2>Loading</h2>) : data.error ? (<h2>{data.error}</h2>) : (
      <div>
        <div>
          <PostList />
        </div>
      </div>
      )}
    
    </div>
  );
}
export default PostContainer;
