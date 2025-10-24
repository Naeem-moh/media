import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "./fetchUsers";
import { faker } from '@faker-js/faker';

export const addUser = createAsyncThunk('users/add', async ()=>{
    const response = await fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: faker.name.fullName(),
        })
    });
    const data = await response.json();
    await pause(3000); //! DEV ONLY
    return data;
})