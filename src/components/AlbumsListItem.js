import { useOpen } from "../hooks/useOpen"
import Button from "./Button";

export const AlbumsListItem = function ({album}){

    const [open, toggle] = useOpen();
    return(
        <li className="mb-2">
                    <div
                        className={
                            'px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700 flex items-center justify-between cursor-pointer transition-colors duration-200' +
                            (open ? ' border-b-0 rounded-b-none' : '')
                        }
                        //functions reference the variables on their creation
                        //variables are recreated each render.
                        //old variables can't be removed from memory, cause they are referenced by the functions.
                        onClick={() => toggle()}
                    > 
                    <h3>{album.title}</h3>                       
                    <div className="flex items-center gap-2">
                            <Button
                                danger
                                className="transition-colors duration-200 hover:bg-red-600 hover:border-red-600 "
                                //disabled={isDeleteUserLoading}
                               // onClick={e => { e.stopPropagation(); handleDeleteUser(user.id); }}
                            >
                                X
                                {/* {isDeleteUserLoading ? 'Deleting...' : 'Delete'} */}
                            </Button>
                            <span className={"ml-2 text-xs text-gray-500 select-none"}>{open ? '▲' : '▼'}</span>
                        </div>
                    </div>
                    {open && (
                        <div className="px-4 py-3 bg-gray-50 border border-t-0 border-gray-200 rounded-b">
                            {/* to be the songs */}
                        </div>
                    )}
                </li>
    )
}