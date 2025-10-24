import React from "react"


export const useOpen = ()=>{
    const [open, setOpen] = React.useState(false);

    const toggle = ()=>{
        //this and not using the dependencies array saves us from memozing though useCallback()
        setOpen((open)=> !open)
    }

    return [open, toggle]
}