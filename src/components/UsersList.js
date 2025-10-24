import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import { ShimmerSkeleton } from './ShimmerSkeleton';
import  Button  from './Button';
import { addUser } from '../store';
import { useThunk } from '../hooks/useThunk.js';
import { deleteUser } from '../store/thunks/deleteUser.js';
import { UserListItem } from './UserListItem.js';
export const UsersList = () => {
    //local state to control the loading and error of the fetchUsers thunk
    const [isDataLoading, dataLoadingError, doFetchUsers] = useThunk(fetchUsers);
    // local state to control the loading and error of the addUser thunk
    const [isAddUserLoading, addUserError, doAddUser] = useThunk(addUser);

    useEffect(()=>{
       doFetchUsers();
    },[ doFetchUsers]);

    //we don't isolate the data selection here, because we are using the same state slice accross the components
    // immer mutation! (new array when the immer modifies the state)
    // useSelector receives the whole state but only render if the returned value from the callback is changed
    const {data} = useSelector((state)=>state.users)
    const handleAddUser = () => {
       doAddUser();
    }

    if (dataLoadingError) {
        return <h1>{dataLoadingError} :(</h1>;
    }
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Users List</h1>
            <Button disabled={isAddUserLoading} warning={isAddUserLoading} className="mb-4" onClick={handleAddUser}>
                Add User
            </Button>
            {isDataLoading ? (
                <ShimmerSkeleton count={5} />
            ) : (
                <ul className="space-y-2">
                    {data && data.map((user) => (
                        <UserListItem key={user.id} user={user} />
                    ))}
                </ul>
            )}
        </div>
    );
};

