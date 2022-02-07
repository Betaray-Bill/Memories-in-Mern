import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector  } from 'react-redux';
import {createPost, updatePost} from '../../features/Posts/postActions'
// import { selectPosts } from '../../features/Posts/postsSlice'

const Form = ({currentId, setcurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    // const posts = useSelector(state => currentId ?  state.posts.posts : "meow")
    // const posts = useSelector(state => state.posts)
    const [postData, setPostData] = useState({
        creator:'',
        title:'',
        message:'',
        selectedFile: ''
    })
    // console.log("new Post", posts)
    // useEffect(() => {
    //     if(posts) {setPostData(posts) }
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(postData)
        dispatch(createPost(postData))

        if(currentId){
            dispatch(updatePost(currentId, postData))
            console.log("Post Data", postData);
        }else{
            // dispatch(createPost(postData))
            console.log("first");
        }
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false}  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
