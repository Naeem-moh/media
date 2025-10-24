import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "./fetchUsers";

export const deleteUser = createAsyncThunk('users/delete', async (id,{getState})=>{
   const request = await fetch('http://localhost:3005/users/'+id+'',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //await bro
    await pause(3000); //! DEV ONLY
    return getState().users.data.filter((user=>user.id !== id));
})