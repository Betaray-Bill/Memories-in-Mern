import React, {useState} from 'react';
import {Avatar, Button , Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import useStyles from './styles'   
import { LocalAtmOutlined } from '@material-ui/icons';
import Input from './Input';
import {GoogleLogin} from "react-google-login"
import {useDispatch} from 'react-redux'
import {login} from '../../features/Auth/authSlice'
import {useNavigate } from 'react-router-dom';
import {signin, signup} from '../../features/Auth/authAction'

const Auth = () => {
    const state = null
    const initialstate= {
        firstName: '',
        lastName: '',
        email:'',
        password: '',
        confirmPassword: ''
    }
    const classes = useStyles()
    const [showpassword, setpassword] = useState(false)
    const [isSignup, setisSignup] = useState(false)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(initialstate)
    const handleShowPassword = () => setpassword((p) => !p)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        if(isSignup){
            dispatch(signin(formData))
        
        }else{
            dispatch(signup(formData))
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const switchMode = () => {
        setisSignup((p) => !p)
        setpassword(false)
    }


    const googleSuccess = async(res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try{
            console.log(result);
            dispatch(login({result, token}))
            navigate('/')
            localStorage.setItem('profile', {token, result})
            console.log(token);
        }catch(err){
            console.log(err);
        }
    }
    const googleFailure =(err) => {
        console.log(err);
    }

    return (
        <Container component="main"  maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LocalAtmOutlined />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    {
                        isSignup ? (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6}/>
                            </>
                        ) : (<></>)
                    } 
                    <Input name="email" label="Email" handleChange={handleChange} type="email"/>
                    <Input name="password" label="password" handleChange={handleChange} type="password" type={ showpassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {
                        isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}/>
                    }
                    </Grid>
                    <Button type="submit" className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
                    <GoogleLogin 
                        clientId="85571469987-ki104sisgjl9gsk81fra61cfhg29q90h.apps.googleusercontent.com"
                        render={renderProps => (
                            <Button className={classes.googleButton} onClick={renderProps.onClick} disabled={renderProps.disabled} color="primary" fullWidth variant="contained">Google Sign In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                            {
                                isSignup ? 'Already have an account' : "Don't have an account, Signup"
                            }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
