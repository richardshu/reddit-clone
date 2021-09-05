import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPVOTE,
  DOWNVOTE,
} from "../constants/actionTypes";

// Action Creators (functions that return actions)
// We use redux-thunk's dispatch function since fetching data is an async process
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const upvotePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.upvotePost(id);
    dispatch({ type: UPVOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const downvotePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.downvotePost(id);
    dispatch({ type: DOWNVOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};
