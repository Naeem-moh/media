import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { deleteUser } from '../thunks/deleteUser';

// Redux store is updated according to the dispatch as always, BUT this time the dispatches are caused by the thunk.
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        //data cause the key in the reducer in the store is users
        data: [],
        
        //* FINE GRAINED LOADING STATE */
        //* create loading state for each of the CRUD operations
        //* for loading the users and add user */
        //* ceate a temporary array to hold the id of the user being deleted to know which one is loading the delete.

        //* fine grained loading categeries */
        //* state in the components */
        //* RTKQ tracking the requests */

        isloading: false,
        error: null
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.isloading = true;
        })
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.isloading = false;
            state.error = action.payload ? action.payload.message : action.error.message
        })
        .addCase(fetchUsers.fulfilled, (state, action)=> {
            state.isloading = false;
            state.data = action.payload;
        }).addCase(addUser.pending, (state)=>{
            state.isloading = true;
        }).addCase(addUser.rejected, (state, action)=>{
            state.isloading = false;
            state.error = action.payload ? action.payload.message : action.error.message;
        }).addCase(addUser.fulfilled, (state, action)=> {
            state.isloading = false;
            state.data.push(action.payload);
        }).addCase(deleteUser.pending, (state, action)=>{
            state.isloading = true;
        }).addCase(deleteUser.rejected, (state, action)=>{
            state.isloading = false;
            state.error = action.payload ? action.payload.message : action.error.message;
        }).addCase(deleteUser.fulfilled, (state, action)=>{
            state.isloading = false;
            // correct way to update the state immutably
            state.data = action.payload;
            // incorrect way that mutates the state directly
            // state = state.data
        })
    }

});

export const usersReducer = usersSlice.reducer;