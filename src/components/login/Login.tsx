import { TextField } from "@mui/material";
import { Form, Link, useActionData, useNavigate, useNavigation } from "react-router-dom";
import ErrorMessage from "../../util/ErrorMessage";
import { useEffect} from "react";
import { useAuth } from "../../util/useAuth";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"

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
            className="w-full mb-5"
            name="email"
        />

        <TextField required
            id="standard-basic"
            label="Password" 
            variant="standard"
            className="w-full mb-5"
            name="password"
            type="password"
        />
    
        <Button label={isSubmitting? "Loggin in...": "Log in"} disabled={isSubmitting} type="submit"/>  
    </Form>
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} type="submit"/>
      <Button outline label="Continue with Github" icon={AiFillGithub} type="submit"/>
    </div>
    <p className="text-semibold text-gray-900 my-3">Don't have an account? <Link to="/auth?mode=signup" className="ml-1 no-underline text-semibold text-sky-600">Signup</Link></p> 
  </>)
}


export default Login;