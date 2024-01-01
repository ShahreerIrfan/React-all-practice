/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h3>All post are {posts.length}</h3>
            <div>
                {
                    posts.map(post=><PostDetails
                        key={post.id}
                        post={post}
                    ></PostDetails>)
                }
            </div>
        </div>
    );
};

export default Post;