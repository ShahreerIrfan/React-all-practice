/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./postDetails.css"
import { Link } from 'react-router-dom';

const PostDetails = ({post}) => {
    return (
        <div className='single-post'>
            <h4>Full post Details</h4>
            <h2>post title is: {post.title}</h2>
            <h4>Post body is: {post.body}</h4>
            <Link to={`/post/${post.id}`}>Details</Link>
            <button>Show post details</button>
        </div>
    );
};

export default PostDetails;



// ..