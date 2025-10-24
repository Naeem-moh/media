import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";



export const useThunk = (thunk) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    // this is where an argument can be passed to the thunk function
    const fireThunk = useCallback((arg)=>{
        setIsLoading(true)
      return  dispatch(thunk(arg)).unwrap().catch(err=>setError(err.message)).finally(()=>setIsLoading(false))
    }, [dispatch, thunk]);

    return [isLoading, error, fireThunk];
}