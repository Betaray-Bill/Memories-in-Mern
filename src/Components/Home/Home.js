import React, {useEffect, useState} from 'react';
import { Container, Typography, Grow, Grid, AppBar} from '@material-ui/core'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles'
import { getPosts } from '../../features/Posts/postActions';

const Home = () => {
    const classes = useStyles() 
    const dispatch = useDispatch()
    const [currentId, setcurrentId] = useState(null)
    useEffect(() => {
      dispatch(getPosts())
    }, [])
  
    return (
        <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setcurrentId={setcurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setcurrentId={setcurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
