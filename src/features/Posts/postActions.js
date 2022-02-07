import * as api  from '../../api/index'
import axios from 'axios'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from './postsSlice'

export const getPosts = () =>  async(dispatch) => {
    try{
        const result = await axios.get('http://localhost:5000/posts')
            .then(res => {
                dispatch(FETCH_ALL(res.data.postMessages))
                console.log(res.data.postMessages);
            }).catch(err => {
                console.log(err)
            })
        // result
    }catch(err){
        console.log(err);
    }
}


export const createPost = (post) => async(dispatch) => {
    try{
        const {data} = await api.createPost(post)
        dispatch(CREATE({data}))
    }catch(err){

    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try{
        const {data} = await api.updatePost(id,post)
        dispatch(UPDATE({data}))
        console.log("Notd")
    }catch(err){
        console.log("Nothing is updated")
    }
}


export const deletePost = (id) => async(dispatch) => {
    try{
        await api.deletePost(id)
        dispatch(DELETE({id}))
    }catch(err){
        console.log(err)
    }
}

export const likePost = (id) => async(dispatch) => {
    try{
        const {data} = await api.likePost(id)
        dispatch(LIKE(data))
        console.log("Liked")
    }catch(err){
        console.log("Nothing is updated")
    }
}