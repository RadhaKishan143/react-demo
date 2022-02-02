import {
 Navbar,
 Container,
 Nav,
 NavDropdown   
} from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const cartReducer = useSelector((state) => state.cartReducer);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/sounds">Sounds</Link>
                    <Link className="nav-link" to="/skills">Skills</Link>
                    <Link className="nav-link" to="/skills2">Skills2</Link>
                    <Link className="nav-link" to="/plugin">Plugin</Link>
                    <Link className="nav-link" to="/about">About Us</Link>
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                    <Link className="nav-link" to="/users">Users</Link>
                    <Link className="nav-link" to="/cart">Cart-{cartReducer.totalItems}</Link>
                    <Link className="nav-link" to="/sign-in">Login</Link>
                    <Link className="nav-link" to="/sign-up">Register</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;