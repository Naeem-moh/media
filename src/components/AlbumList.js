import { useFetchAlbumsQuery } from "../store"
import { useAddAlbumMutation } from "../store/api/albumsApi.js";
import { AlbumsListItem } from "./AlbumsListItem.js";
import Button from "./Button.js";
import { ShimmerSkeleton } from "./ShimmerSkeleton.js";
export function AlbumList({ user }) {

    const { data, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, result] = useAddAlbumMutation();
    console.log(result);
    const handleAddAlbum = () => {
        addAlbum(user);
    }
    return (
    <>
        <h3 className="mb-2">Album List for {user.name}</h3>
        <Button //disabled={isAddUserLoading} 
        //warning={isAddUserLoading} 
        className="mb-4" 
        onClick={handleAddAlbum}
        >
                        Add Album
                    </Button>
                    {isLoading ? (
                        <ShimmerSkeleton count={3} />
                    ) : (
                    <ul>
                    
                    {data && data.map(album => (
                    <AlbumsListItem key={album.id} album={album} />
                                ))}
                            </ul>)}
                
    </>
    )
}