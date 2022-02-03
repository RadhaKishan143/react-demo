import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const SingleUser = () => {
    const params = useParams();
    const [user, setUser] = useState(null);
    const [isUserLoading, setUserLoadingStatus] = useState(true);

    useEffect(() => {
        fetchSingleUser();
    }, []);

    const fetchSingleUser = useCallback(async () => {
        try {
            const { data } = await api.get(`/users/${params.id}`);
            if (data?.success) {
                setUser(data?.data?.user);
            } else {
                console.log(data?.message);
            }
            setUserLoadingStatus(false);
        } catch (error) {
            console.log(error);
        }
    }, []); 

    if (!isUserLoading && !user) {
        return (
            <div>
                <h1>User not found</h1>
            </div>
        )
    }
    return (
        <div>
            <p>
                {
                    isUserLoading ? (
                        <p>Loading User...</p>
                    ) : (
                        <div>
                            <p>{user.username}</p>
                        </div>
                    )
                }
                {
                    !user && !isUserLoading && (
                        <p>User not found </p>
                    )
                }
            </p>
        </div>
    )
}

export default SingleUser;