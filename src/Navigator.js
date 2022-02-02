import Header from "./components/Header";
import {
    Outlet
} from "react-router-dom";

const Navigator = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Navigator;