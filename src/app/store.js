import { configureStore } from '@reduxjs/toolkit';
import userReducers from '../features/userSlice'

export default configureStore({
    reducer:{
        user:userReducers
    }
})