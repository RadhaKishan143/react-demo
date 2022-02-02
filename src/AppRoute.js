import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sounds from "./pages/Sounds";
import Plugin from "./pages/Plugin";

import Skills2 from "./pages/Skills2";

import Skills from "./pages/Skills";
import Browse from "./pages/Browse";
import Lessons from "./pages/Lessons";
import Completed from "./pages/Completed";

import About from "./pages/About";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Navigator from "./Navigator";
import useUser from "./hooks/useUser";

const AppRoute = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigator />}>
                    <Route index element={<Home />} />
                    <Route path="/sounds" element={<Sounds />} />
                    <Route path="/plugin" element={<Plugin />} />

                    <Route path="/skills2" element={<Skills2 />} />

                    <Route path="/skills" element={<Skills />} >
                        <Route index element={<Browse />} />
                        <Route path="/skills/lessons" element={<Lessons />} />
                        <Route path="/skills/completed" element={<Completed />} />
                    </Route>

                    <Route path="/users" element={<Users />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                </Route>

                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default AppRoute;