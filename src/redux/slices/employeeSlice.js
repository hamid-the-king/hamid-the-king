import {createSlice} from "@reduxjs/toolkit";

const initialState={
    employees:[]
}
export const employeeSlice=createSlice({
    name:'employee',
    initialState,
    reducers:{
        ACTION_SET_EMPLOYEES:(state,action)=>{
            // console.log(action.payload,'sssssssss')
            // console.log(state.employees,'gfggg')
            state.employees=action.payload
            // console.log(state.employees,'last')
        },


    }

})

export const {ACTION_SET_EMPLOYEES}=employeeSlice.actions

export default employeeSlice.reducer