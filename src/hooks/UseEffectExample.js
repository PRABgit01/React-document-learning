import { useEffect, useState } from "react"

export function UseEffectexample(){

    const[windowWidth,setWindowWidth] =useState(window.innerWidth)

    const ResizeDisplay=()=>{
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",ResizeDisplay)
    },[])

    return(
        <>
            <div>
                {windowWidth}
            </div>
        </>
    )
}