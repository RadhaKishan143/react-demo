import * as Yup from "yup";

export const LOGIN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
    username: Yup.string("lodu lalit").required("Username is requird"),
    password: Yup.string().required("Password is required"),
});