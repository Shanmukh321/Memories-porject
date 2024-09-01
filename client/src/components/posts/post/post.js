import React from 'react';
import useStyles from './styles.js';
import { Card, CardActions , CardContent ,Button , Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import {CardMedia} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deletePost,likePost } from '../../../actions/posts.js';
const Post = ({ post, setCurrentId }) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
            <Typography variant="h6">
                    {post.creator ? post.creator : "Default Creator"}
            </Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} 
                size='small' 
                onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='default'></MoreHorizIcon>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small'
                color="primary"
                 onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='default'></ThumbUpAltIcon>
                     Like 
                    {post.likeCount}
                </Button>
                <Button size='small' 
                color="primary" 
                onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='default'></DeleteIcon>
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}


export default Post;