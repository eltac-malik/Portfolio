import {createSlice} from '@reduxjs/toolkit'

export const styleSlice = createSlice({
    name:"style",
    initialState:{
        typing:""
    },
    reducers:{
        hideType:(state,action)=>
        {
            state.typing = action.payload
        }
    }
})

export const {hideType} = styleSlice.actions
export default styleSlice.reducer