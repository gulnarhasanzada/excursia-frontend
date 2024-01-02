import { Button, TextField } from "@mui/material";
import MuiPhoneNumber, { MuiPhoneNumberProps } from "mui-phone-number";
import "./Signup.css"
import { useState } from "react";
import { Form, Link,  useActionData,  useNavigation} from 'react-router-dom';
import ErrorMessage from "../../util/ErrorMessage";

const Signup = ()=>{
  const navigation = useNavigation();
  const data: any = useActionData();
  console.log(data)
  const isSubmitting = navigation.state === "submitting";

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
    <Form method="post">
      <TextField required
                id="standard-basic"
                label="Firstname" 
                variant="standard"
                className="input-field mb-4"
                name="firstName"
      />
      {data && <ErrorMessage errors={data.errors.firstName}/>}
    
      <TextField required
                id="standard-basic"
                label="Lastname" 
                variant="standard"
                className="input-field  mb-4"
                name="lastName"
      />
      {data && <ErrorMessage errors={data.errors.lastName}/>}

      <TextField required
                id="standard-basic"
                label="Email" 
                variant="standard"
                className="input-field mb-4"
                name="email"
      />
      {data && <ErrorMessage errors={data.errors.email}/>}

      <TextField required
                id="standard-basic"
                label="Password" 
                variant="standard"
                className="input-field mb-4"
                name="password"
                type="password"
      />
      {data && <ErrorMessage errors={data.errors.password}/>}
      
      <MuiPhoneNumber required 
                      id="outlined-required" 
                      defaultCountry={'ca'} 
                      label="Phone"
                      name="phoneNumber"
                      onChange={handleOnChange}
                      className="input-field mb-4"
      />
      {data && <ErrorMessage errors={data.errors.phoneNumber}/>}
      
      <Button variant="contained" 
              className="input-field button  mb-4" 
              type="submit"
              disabled={isSubmitting}>{isSubmitting? "Signing up...": "Sign up"}</Button>
      
    </Form>

    <p className="mt-4">Already have an account? <Link to="/auth?mode=login" className="login-link">Login</Link></p> 
    </>)
}

export default Signup;


