import React, { useState , useEffect} from 'react';
import {Container, AppBar, Typography, Grow,  Grid2} from '@mui/material';

import memories from './images/memories.png';
import { getPosts } from './actions/posts.js';
import Posts from './components/posts/posts.js';
import Form from './components/form/form.js';

import useStyles from './styles.js';

import { useDispatch } from 'react-redux';


const App = () => {
    const [currentId , setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    },[currentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading}variant='h2' align="center">
                    Memories
                </Typography>
                <img src={memories} alt="memories" height="60"/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid2 container justify="space-between" alignItems="stretch" >
                        <Grid2 xs={12} sm={7}>

                            <Posts setCurrentId={setCurrentId}></Posts>

                        </Grid2>
                        <Grid2 xs={12} sm={7}>
                            <Form currentId = {currentId} setCurrentId={setCurrentId}></Form>
                        </Grid2>
                    </Grid2>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;