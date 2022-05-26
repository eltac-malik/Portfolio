import {configureStore} from '@reduxjs/toolkit'
import styleSlice from './styleSlice'


export const store = configureStore({
    reducer:{
        style:styleSlice
    }
})