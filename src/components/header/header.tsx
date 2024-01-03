import { Form, Link, useRouteLoaderData} from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import "./header.css"
import { IconButton } from "@mui/material";

const Header = ()=>{
    const token: any = useRouteLoaderData('root');
    return (
        <header className="header-container">
            <div className="header-main  d-flex">
                <div className="header-item header-logo">
                    <Link to="/"><img src="/excursia-logo.png" alt="excursia-logo" title="Excursia"/></Link>
                </div>
                <div className="header-item">

                </div>
                <div className="header-item header-auth">  
                    {token && <Form method="post" action="/logout"><IconButton aria-label="Sign out" type="submit" name="singout" title="Sign out"><PiSignOut/></IconButton></Form>}   
                    {!token && <Link to="/auth?mode=login" className="auth-link login"><FaUserCircle size="23" className="auth-icon"/>Login</Link>}
                    {!token && <Link to="/auth?mode=signup" className="auth-link signup"><FaUserPlus size="23" className="auth-icon"/>Signup</Link>}  
                </div>
            </div>
        </header>
      )
}

export default Header;