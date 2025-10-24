import React, { useState } from 'react';
import { useThunk } from '../hooks/useThunk.js';
import { deleteUser } from '../store/thunks/deleteUser.js';
import Button from './Button.js';
import { AlbumList } from './AlbumList.js';
import { useOpen } from '../hooks/useOpen.js';

export const UserListItem = ({ user }) => {
    const [isDeleteUserLoading, doDeleteUser] = useThunk(deleteUser);
    const [open, toggle] = useOpen();

    const handleDeleteUser = (userId) => {
        doDeleteUser(userId);
    };

    return (
        <li className="mb-2">
            <div
                className={
                    'px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700 flex items-center justify-between cursor-pointer transition-colors duration-200' +
                    (open ? ' border-b-0 rounded-b-none' : '')
                }
                //functions reference the variables on their creation
                //variables are recreated each render.
                //old variables can't be removed from memory, cause they are referenced by the functions.
                //onClick={ () => setOpen(!open) }
                onClick={() => toggle()}
            >
                <h2 className="font-bold">{user.name}</h2>
                <div className="flex items-center gap-2">
                    <Button
                        danger
                        className="transition-colors duration-200 hover:bg-red-600 hover:border-red-600"
                        disabled={isDeleteUserLoading}
                        onClick={e => { e.stopPropagation(); handleDeleteUser(user.id); }}
                    >
                        {isDeleteUserLoading ? 'Deleting...' : 'Delete'}
                    </Button>
                    <span className={"ml-2 text-xs text-gray-500 select-none"}>{open ? '▲' : '▼'}</span>
                </div>
            </div>
            {open && (
                <div className="px-4 py-3 bg-gray-50 border border-t-0 border-gray-200 rounded-b">
                    <AlbumList user={user} />
                </div>
            )}
        </li>
    );
};