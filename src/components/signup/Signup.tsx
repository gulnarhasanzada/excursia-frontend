import { TextField } from "@mui/material";
import MuiPhoneNumber, { MuiPhoneNumberProps } from "mui-phone-number";
import { useEffect} from "react";
import { Form, Link,  useActionData,  useNavigate,  useNavigation} from 'react-router-dom';
import ErrorMessage from "../../util/ErrorMessage";
import { useAuth } from "../../util/useAuth";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";

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
                className="w-full mb-5"
                name="firstName"
      />
      {data && data.errors.firstName && <ErrorMessage errors={data.errors.firstName}/>}
    
      <TextField required
                id="standard-basic"
                label="Lastname" 
                variant="standard"
                className="w-full mb-5"
                name="lastName"
      />
      {data && data.errors.lastName && <ErrorMessage errors={data.errors.lastName}/>}

      <TextField required
                id="standard-basic"
                label="Email" 
                variant="standard"
                className="w-full mb-5"
                name="email"
      />
      {data && data.errors.email && <ErrorMessage errors={data.errors.email}/>}

      <TextField required
                id="standard-basic"
                label="Password" 
                variant="standard"
                className="w-full mb-5"
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
                      className="w-full mb-5"
      />
      {data && data.errors.phoneNumber && <ErrorMessage errors={data.errors.phoneNumber}/>}
      
      <Button label={isSubmitting? "Signing up...": "Sign up"} disabled={isSubmitting} type="submit"/>
      
    </Form>

    <p className="text-semibold text-gray-900 my-3">Already have an account? <Link to="/auth?mode=login" className="ml-1 no-underline text-semibold text-sky-600">Login</Link></p> 
    </>)
}

export default Signup;


