import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post/post.js';
import useStyles from './styles.js';
import { Grid2 , CircularProgress } from '@mui/material';
const Posts = ( {setCurrentId}) => { 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    if (!Array.isArray(posts)) {
        console.error('Expected posts to be an array, but got:', posts);
        return <div>Error: Posts data is not an array</div>;
      }
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid2 className={classes.container} container alignitems="stretch" spacing={3}>
            {posts.map((post) => (
                    <Grid2 key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>    
                    </Grid2>
                ))}
        </Grid2 >
        )    
    );
};


export default Posts