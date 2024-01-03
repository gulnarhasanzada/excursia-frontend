import { Form, Link, useRouteLoaderData} from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./header.css"
import { Button } from "@mui/material";

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
                    {!token && <Link to="/auth?mode=login" className="auth-link login"><FaUserCircle size="23" className="auth-icon"/>Login</Link>}
                    <Link to="/auth?mode=signup" className="auth-link signup"><FaUserPlus size="23" className="auth-icon"/>Signup</Link>
                    {token && 
                    <Form method="post" action="/logout">
                      <Button name="logout" type="submit"><FaUserPlus size="23" className="auth-icon"/>Logout</Button>
                    </Form>}
                </div>
            </div>
        </header>
      )
}

export default Header;