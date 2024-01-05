import { Form, Link, useRouteLoaderData} from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import "./header.css"
import { IconButton } from "@mui/material";
import Container from "../Container";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = ()=>{
    const token: any = useRouteLoaderData('root');
    return (
        <header className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Link to="/"><img src="images/excursia-logo.png" alt="excursia-logo" title="Excursia" className="hidden md:block cursor-pointer"/></Link>
                        <Search />
                        <UserMenu />
                    </div>
                </Container>
                
                {/* <div className="">  
                    {token && <Form method="post" action="/logout"><IconButton aria-label="Sign out" type="submit" name="singout" title="Sign out"><PiSignOut/></IconButton></Form>}   
                    {!token && <Link to="/auth?mode=login" className="auth-link login"><FaUserCircle size="23" className="auth-icon"/>Login</Link>}
                    {!token && <Link to="/auth?mode=signup" className="auth-link signup"><FaUserPlus size="23" className="auth-icon"/>Signup</Link>}  
                </div> */}
            </div>
        </header>
      )
}

export default Header;