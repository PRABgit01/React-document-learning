import { useNavigate } from "react-router-dom"

export function HomePage(){
    const  navigate=useNavigate()
    return(
        <>
        <button onClick={()=>navigate("dontexist")}> placed order</button>
        <button onClick={()=>navigate("dontexist",{replace:true}) }>exit</button>

            home
        </>
    )
}