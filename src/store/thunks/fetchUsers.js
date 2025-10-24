import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await fetch('http://localhost:3005/users');
    const data = await response.json();
    await pause(3000); //! DEV ONLY
    return data;
}
);


//! DEV ONLY
export const pause = (duration)=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, duration)
    })
}

export { fetchUsers };