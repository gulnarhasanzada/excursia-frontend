import { Button, TextField } from "@mui/material";
import MuiPhoneNumber, { MuiPhoneNumberProps } from "mui-phone-number";
import "./Signup.css"
import { useEffect} from "react";
import { Form, Link,  useActionData,  useNavigate,  useNavigation} from 'react-router-dom';
import ErrorMessage from "../../util/ErrorMessage";
import { useAuth } from "../../util/useAuth";

const Signup = ()=>{
    const isAuthenticated = useAuth();
    const navigation = useNavigation();
    const data: any = useActionData();
    const isSubmitting = navigation.state === "submitting";
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);


  const handleOnChange: MuiPhoneNumberProps["onChange"] = (value:any)=>{}
  
  return (<>
    <Form method="post">
      <TextField required
                id="standard-basic"
                label="Firstname" 
                variant="standard"
                className="input-field mb-4"
                name="firstName"
      />
      {data && data.errors.firstName && <ErrorMessage errors={data.errors.firstName}/>}
    
      <TextField required
                id="standard-basic"
                label="Lastname" 
                variant="standard"
                className="input-field  mb-4"
                name="lastName"
      />
      {data && data.errors.lastName && <ErrorMessage errors={data.errors.lastName}/>}

      <TextField required
                id="standard-basic"
                label="Email" 
                variant="standard"
                className="input-field mb-4"
                name="email"
      />
      {data && data.errors.email && <ErrorMessage errors={data.errors.email}/>}

      <TextField required
                id="standard-basic"
                label="Password" 
                variant="standard"
                className="input-field mb-4"
                name="password"
                type="password"
      />
      {data && data.errors.password && <ErrorMessage errors={data.errors.password}/>}
      
      <MuiPhoneNumber required 
                      id="outlined-required" 
                      defaultCountry={'ca'} 
                      label="Phone"
                      name="phoneNumber"
                      onChange={handleOnChange}
                      className="input-field mb-4"
      />
      {data && data.errors.phoneNumber && <ErrorMessage errors={data.errors.phoneNumber}/>}
      
      <Button variant="contained" 
              className="input-field button  mb-4" 
              type="submit"
              disabled={isSubmitting}>{isSubmitting? "Signing up...": "Sign up"}</Button>
      
    </Form>

    <p className="mt-4">Already have an account? <Link to="/auth?mode=login" className="login-link">Login</Link></p> 
    </>)
}

export default Signup;


