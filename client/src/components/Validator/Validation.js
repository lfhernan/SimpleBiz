let Yup = require("yup");

export const LogInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be 8 characters or longer")
        .required("Password is required")
})

export const SignUpSchema = Yup.object().shape({
    companyName: Yup.string()
        .min(2, "Company's name is not valid")
        .required("Company name is required"),
    owner: Yup.string()
        .min(2, "Owner's name is not valid")
        .required("Owner's name is required"),
    email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
    industry: Yup.string()
        .min(2, "Industry type is not valid")
        .required("Industry type is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required")
})