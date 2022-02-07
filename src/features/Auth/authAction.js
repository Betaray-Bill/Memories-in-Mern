import * as api from '../../api/index'
import axios from 'axios'
import { Navigate } from "react-router-dom"
import { login } from './authSlice'

export const signin = (formData) => async(dispatch) => {
    const { data } = await api.signIn(formData)
    try {
        dispatch(login({ data }))
        Navigate("/")
    } catch (err) {
        console.log("Error da vena")
    }
}

export const signup = (formData) => async(dispatch) => {
    const { data } = await api.signUp(formData)
    try {
        dispatch(login({ data }))
        Navigate("/")
    } catch (err) {
        console.log("Error da vena")
    }
}