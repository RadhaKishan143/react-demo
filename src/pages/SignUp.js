import { useState } from "react";
import api from "../api";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoadingStatus] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoadingStatus(true);
        try {
            const { data } = await api.post("/user", {
                username,
                password
            });
            alert(data.message);
            setLoadingStatus(false);
        } catch (error) {
            console.log(error);
            setLoadingStatus(false);
        }
    }

    return (
       <div>
           <form
            onSubmit={onSubmit}
           >
                <input 
                    placeholder="username" 
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    placeholder="password" 
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}   
                />  
                {
                    isLoading && (
                        <p>Loading...</p>
                    )
                }
               <button type="submit">SAVE</button>
           </form>
       </div>
    )
}

export default SignUp;