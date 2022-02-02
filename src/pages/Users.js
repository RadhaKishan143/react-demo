import { useState, useEffect } from "react";
import api from "../api";
import Userform from "../components/Userform";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(async () => {
        try {   
            const { data } = await api.get("/users");
            setUsers(data?.data || []);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, []);

    const addUser = async (username, password) => {
        setUsers([
            ...users,
            {
                _id: `${Math.random}`,
                username,
                password
            }
        ])
    }    

    return (
       <div className="container">
           <div className="row py-5">
                <div className="col-md-12">
                    {
                        isLoading ? (
                            <p>Loading users....</p>
                        ) : (
                            <div className="">
                                <table className="table table-bordered table-hover table-striped">
                                    <thead>
                                        <th>Username</th>
                                        <th>Passsword</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user) => (
                                                <tr key={user._id}>
                                                    <td>{user.username}</td>
                                                    <td>{user.password}</td>
                                                    <td>
                                                        <a>Edit</a>
                                                        <a>Delete</a>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                </div>
           </div>
           <Userform onSaveClick={addUser} />
       </div>
    )
}

export default Users;