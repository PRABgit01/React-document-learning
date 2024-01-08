import { useNavigate } from "react-router-dom"

export function DontExist(){
   const navigate=useNavigate()
   return(<>
        opps! 404 error
        <button onClick={()=>navigate(-1)}>go back </button>
    </>)
}