import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { upvotePost, downvotePost, deletePost } from "../../../actions/posts";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleUpvotePost = () => {
    dispatch(upvotePost(post._id));
  };

  const handleDownvotePost = () => {
    dispatch(downvotePost(post._id));
  };

  const handleDeletePost = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <Card className={classes.card}>
      {/* Post image */}
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />

      {/* [x] hours ago timestamp */}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      {/* Edit post button */}
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      {/* Hashtags */}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      {/* Post title */}
      <Typography className={classes.title} variant="h5">
        {post.title}
      </Typography>

      {/* Post message */}
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>

      {/* Upvote, Downvote, and Delete buttons */}
      <CardActions className={classes.cardActions}>
        <span>
          <Button size="small" color="primary" onClick={handleUpvotePost}>
            <ArrowUpwardIcon />
          </Button>

          {post.upvotes}

          <Button size="small" color="primary" onClick={handleDownvotePost}>
            <ArrowDownwardIcon />
          </Button>
        </span>

        <Button size="small" color="secondary" onClick={handleDeletePost}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
