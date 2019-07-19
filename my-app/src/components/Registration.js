import React from 'react'; 
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from './axiosWithAuth';

function RegistrationForm({values, errors, touched}) {
    return (
    <Form>
        <div>
            {touched.username && errors.name && <p>{errors.name}</p>}
            <Field type ="username" name="username" placeholder="Username" />
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <button>Register</button>
    </Form>
    );
}

const formikRegistrationForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Name is required")
            .min(3, "Name must be at least three characters long"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
    }),
    
    handleSubmit(values, { resetForm, setErrors, setSubmitting }){
        if (values.username ==="alreadytaken") {
            setErrors({ username: "This username is already taken" });
        } else {
            axiosWithAuth()
                .post("http://localhost:6000/api/register", values)
                .then(res => {
                    console.log(res);
                    resetForm();
                    setSubmitting(false);
            })
            .catch(err => {
                console.log(err);
                setSubmitting(false);
            });
        }
    }   
})(RegistrationForm);

export default formikRegistrationForm;