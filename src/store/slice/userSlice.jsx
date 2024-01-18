import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "users",
   initialState:[],
   reducers:{
   
    addusers(state,action){
      state.push(action.payload)
    },
    removeusers(state,action){
      // console.log("hii" + action.payload )
      state.splice(action.payload, 1)

    },
    clearusers(state,action){
      // console.log("hii")
      return []
    },
    
   },
})

export default userSlice.reducer

export const  {addusers,removeusers,clearusers} = userSlice.actions