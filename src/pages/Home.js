import "../styles/home.modules.css"
import api from "../api";
import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addItem } from "../actions/cart";

const products = [
    {
        id: "asdad",
        title: "Product 1",
        quantity: 1,
        price: 100
    },
    {
        id: "asda2223d",
        title: "Product 2",
        quantity: 2,
        price: 200
    },
    {
        id: "asd",
        title: "Product 3",
        quantity: 1,
        price: 300
    },
    {
        id: "aasd22sdad",
        title: "Product 4",
        quantity: 1,
        price: 2
    },
    {
        id: "a2321sdad",
        title: "Product 5",
        quantity: 2,
        price: 100
    },
    {
        id: "sads23232",
        title: "Product 6",
        quantity: 1,
        price: 350
    },
]

const Home = () => {
    const [profile, setProfile] = useState(null);
    const [isProfileLoading, setProfileLoadingStatus] = useState(true);
    const cartReducer = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

    useEffect(async () => {
        const { data } = await api.get("/profile", {
            // headers: {
            //     "Authorization": localStorage.getItem("userAccessToken")
            // }
        }).catch((error) => {
            console.log(error);
            setProfileLoadingStatus(false);
        });
        if (data?.success) {
            setProfile(data?.data?.profile);
        } else {
            console.log(data);
        }
        setProfileLoadingStatus(false);
    }, []);

    const addToCart = (item) => {
        dispatch(addItem(item));
    }
    
    return (
        <div>
            <h1>Home</h1>
            <pre>
                {JSON.stringify(cartReducer, null, 2)}
            </pre>
            {
                isProfileLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <p>Username : {profile?.username}</p>
                    </div>
                )
            }
            <div className="row">
                {
                    products.map((item,index) => (
                        <div className="col-md-4 mb-4" key={index.toString()}>
                            <div className="card">
                                <div className="card-body">
                                    Name : {item.title}
                                </div>
                                <div className="card-footer">
                                    <button onClick={() => addToCart(item)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Home