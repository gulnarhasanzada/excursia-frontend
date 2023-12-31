import { Button, TextField } from "@mui/material";
import { Form, Link, useActionData, useNavigate, useNavigation } from "react-router-dom";
import ErrorMessage from "../../util/ErrorMessage";
import { useEffect} from "react";
import { useAuth } from "../../util/useAuth";

const Login = ()=>{
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

    return(<>
    {data && <ErrorMessage errors={[data.error]}/>}
    <Form method="post">
            <TextField required
                id="standard-basic"
                label="Email" 
                variant="standard"
                className="input-field mb-4"
                name="email"
            />

    <TextField required
              id="standard-basic"
              label="Password" 
              variant="standard"
              className="input-field mb-4"
              name="password"
              type="password"
    />
    
    <Button variant="contained" 
            className="input-field button  mb-4" 
            type="submit"
            disabled={isSubmitting}>{isSubmitting? "Loggin in...": "Log in"}</Button>
    
  </Form>

  <p className="mt-4">Don't have an account? <Link to="/auth?mode=signup" className="login-link">Signup</Link></p> 
  </>)
}


export default Login;