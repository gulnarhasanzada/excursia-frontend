import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import {json, redirect, useSearchParams} from "react-router-dom"
import { API_URL } from "../config/config";
import "./Auth.css"

const Auth = ()=>{
  const [searchParam] = useSearchParams();
  const isLogin = searchParam.get('mode') === 'login';
  return (<>
    
    <div className="row">
        <div className="col-sm-12 col-md-6 auth-page-img">
            <img src="https://cdn.pixabay.com/photo/2019/07/08/04/23/traveling-4323759_960_720.png" alt="travel-photo-art" />
        </div>
        <div className="col-sm-12 col-md-6 signup-container">
            <h2 className="mt-5">{isLogin ? "Login": "Sign up"}</h2>
            {!isLogin && <Signup />}
            {isLogin && <Login />}
        </div>
    </div>
    </>)
}

export default Auth;

export async function action({ request, params }: { request: Request, params: any }){
     const data = await request.formData();
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';
    let authData;
    if(mode === 'login'){
        authData = {
            email: data.get('email'),
            password: data.get('password')
        }
    }else if(mode === 'signup'){
        authData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            phoneNumber: data.get('phoneNumber'),
            email: data.get('email'),
            password: data.get('password')
        }
    }else{
        throw json({message: "Unsupportted mode." },{status: 422})
    }
    
    const response = await fetch(API_URL+ "/user/" + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },        body: JSON.stringify(authData)
    }); 

    if(response.status === 422 || response.status === 401){  
        return response;
    }

    if(!response.ok){
        throw json({message: "Could not authenticate user!" },{status: 500})
    }

    if(mode === "login"){
        const resData = await response.json();
        const token = resData.token;
        localStorage.setItem('token', token);
        return redirect('/')
    }else{
        return redirect('/auth?mode=login')
    }
}

