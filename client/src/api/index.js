import axios from "axios";

// const url = "http://localhost:5000/posts"; // use this URL if running locally
const url = "https://reddit-clone-mern-stack.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const upvotePost = (id) => axios.patch(`${url}/${id}/upvotePost`);
export const downvotePost = (id) => axios.patch(`${url}/${id}/downvotePost`);
