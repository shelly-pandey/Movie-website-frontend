import React from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import * as Yup from "yup";
import '../App.css'
import { Link } from "react-router-dom";

import axios from "axios";
import { Button } from "react-bootstrap";
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const initialValues = {
  
  
  email: "",
  password: "",
  
  
};
function SignIn() {
  return (
    <div className="landing">
    
      <Formik 
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values) => {
          console.log(' ---------- ' + JSON.stringify(values))
          axios
            .post("http://localhost:5000/api/v1/users/user", values)
            .then((data: any) => console.log(data));
        }}
      >
        {({ values, errors, touched }) => (
             <div className="box">
          <Form className="section2">

          <div className="box-1" ><LockOpenIcon/> Login to your Account </div>
          
            <div className="email">
              <Field id="email" name="email" placeholder="email"/>
              {errors.email && touched.email ? (
                <div className="Errors">{errors.email}</div>
              ) : null}
            </div>
            <div className="email">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <div className="Errors">{errors.password}</div>
              ) : null}
            </div>
            
            
            
            
            
            

              <Button variant="danger">Log In<LoginIcon/></Button>not a user? <Link className="title"to={'/signup'}>Sign up!</Link>

          </Form>
          </div>
        )}
      </Formik>
    </div>
    
  );
}

export default SignIn;

const userSchema = Yup.object().shape({
  
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(3, "Password should be min 3")
    .required("required"),
  
});

