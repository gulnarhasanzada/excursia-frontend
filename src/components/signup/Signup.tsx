import { Button, TextField } from "@mui/material";
import MuiPhoneNumber, { MuiPhoneNumberProps } from "mui-phone-number";
import "./Signup.css"
import { useState } from "react";
import { Form, Link} from 'react-router-dom';

const Signup = ()=>{
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [firstnameErr, setFirstnameErr] = useState<string>("");
  const [lastnameErr, setLastnameErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [phoneErr, setPhoneErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleOnChange: MuiPhoneNumberProps["onChange"] = (value:any)=>{
    setPhoneNumber(value.toString());
  }
  
  return (<>
    {error && <div className="alert alert-danger" role="alert">{error}</div>}
    <Form method="post">
      <TextField required
                id="standard-basic"
                label="Firstname" 
                variant="standard"
                className="input-field mb-4"
                name="firstName"
                helperText={firstnameErr}
      />
    
      <TextField required
                id="standard-basic"
                label="Lastname" 
                variant="standard"
                className="input-field  mb-4"
                name="lastName"
                helperText={lastnameErr}
      />

      <TextField required
                id="standard-basic"
                label="Email" 
                variant="standard"
                className="input-field mb-4"
                name="email"
                type="email"
                helperText={emailErr}
      />

      <TextField required
                id="standard-basic"
                label="Password" 
                variant="standard"
                className="input-field mb-4"
                name="password"
                type="password"
                helperText={passwordErr}
      />
      
      <MuiPhoneNumber required 
                      id="outlined-required" 
                      defaultCountry={'ca'} 
                      label="Phone"
                      name="phoneNumber"
                      onChange={handleOnChange}
                      className="input-field mb-4"
                      helperText={phoneErr}
      />
      
      <Button variant="contained" 
              className="input-field button  mb-4" 
              type="submit">Sign up</Button>
      
    </Form>

    <p className="mt-4">Already have an account? <Link to="/auth?mode=login" className="login-link">Login</Link></p> 
    </>)
}

export default Signup;


