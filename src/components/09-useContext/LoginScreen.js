import { UserContext } from "./UserContext";
import { useContext } from "react";


export const LoginScreen = ()=>{

    const {setUser} = useContext(UserContext);
     

    return (
        <div>
            <h1>login Screen</h1>
            <hr />
            <button
                    className="btn btn-info"
                    onClick={ ()=>setUser({
                        id:123,
                        name:'enrique'
                    }) }

            >setUser

                
            </button>
        </div>
      
    )
}