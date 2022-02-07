import React from 'react';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core'
import useStyles from './styles'
import {Link} from 'react-router-dom'
import memories from '../../Images/memories.png'
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth, logout } from '../../features/Auth/authSlice';

const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector(selectAuth)
    // console.log("USer",user.result.name) 
    // console.log("USer",user.auth.result.imageUrl)

    if(user){
        console.log("USer",user.result) 
    }else{
        console.log("Noopee")
    }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" align="center">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60" width="60" />
        </div>  
        <Toolbar className={classes.toolbar} >
{/* 
          {
                user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.auth.result.name} src={user.auth.result.imageUrl}>{user.auth.result.name}</Avatar>
                        <Typography className={classes.userName}>{user.auth.result}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={dispatch(logout())}>Logout</Button>
                    </div>
                ) 
                 : 
                 (
                     <Link to="/auth">
                        <Button color="primary">Sign In</Button>
                     </Link>
                 )
            } */}
        </Toolbar>
    </AppBar>
  )
};

export default Navbar;
