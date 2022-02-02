import { useState } from "react";

const Userform = ({ onSaveClick }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const onSubmit = async () => {
        await onSaveClick(user, pass);
        setUser("");
        setPass("");
    }


    return (
        <div>
            <input placeholder="username" value={user} onChange={(e) => setUser(e.target.value)} />
            <input placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button  onClick={onSubmit}>SAVE</button>
        </div>
    )
}

export default Userform;