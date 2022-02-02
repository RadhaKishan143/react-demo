import { useState } from "react";
import {
    Button,
    Container
} from "react-bootstrap";
import { LOGIN_FORM_VALIDATION_SCHEMA } from "../utils/yupValidationSchema";
import api from "../api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(null);
        LOGIN_FORM_VALIDATION_SCHEMA.validate({
            username,
            password
        }, {
            abortEarly: false
        }).then(() => {
            loginUser();
        }).catch((error) => {
            console.log(error);
            error.inner.forEach((item) => {
                setErrors((prevError) => ({
                    ...prevError,
                    [item.path]: item.message
                }))
            })
        })
    }

    const loginUser = async () => {
        const { data } = await api.post("/login", {
            username,
            password,
        }).catch((error) => {
            console.log(error);
        });
        console.log(data);
        localStorage.setItem("userAccessToken", data?.data?.accessToken);
        api.defaults.headers.common['Authorization'] = data?.data?.accessToken;
        navigate("/", {
            replace: true,
        });
    }

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {errors && errors?.username && errors?.username !== "" && (
                    <p style={{ color: 'red' }}>{errors?.username}</p>

                )}
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors && errors?.password && errors?.password !== "" && (
                    <p style={{ color: 'red' }}>{errors?.password}</p>
                )}
                <button type="submit">SAVE</button>
            </form>
        </Container>
    )
}

export default SignIn;