import React from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles'
import {useSelector} from 'react-redux'
import {selectPosts} from '../../features/Posts/postsSlice'
// import {createPost} from '../../features/Posts/postActions'
const Posts = ({setcurrentId}) => {
    const classes = useStyles()
    const posts = useSelector(selectPosts)
    console.log("Post",posts)
    return (
        !posts.length ? (
            
          <div>
            <CircularProgress />
            <h3>Add Places</h3>
          </div>
          ) : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setcurrentId={setcurrentId}/>
                </Grid>
              ))}
            </Grid>
        )
    )
}

export default Posts
