import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { UPDATE } from '../../../features/Posts/postsSlice';
import { deletePost, likePost } from '../../../features/Posts/postActions'


const Posts = ({post, setcurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deletePost(post._id));
        console.log("Deleted da d3eeiiiii");
    }

    const onLike = () => {
        dispatch(likePost(post._id));
        console.log("like click dha panirken da");
    }

    console.log("POST ID", post._id)
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small"   onClick={() =>setcurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default"/></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary"  onClick={onLike}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                <Button size="small" color="primary" onClick={onDelete}><DeleteIcon fontSize="small"/> Delete</Button>
            </CardActions>
    </Card>
    )
}
// onClick={dispatch(deletePost(post._id))}
export default Posts
