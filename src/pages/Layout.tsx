import { Outlet, useLoaderData, useSubmit } from "react-router-dom"
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

const Layout = ()=>{
    const token: any  = useLoaderData();
    const submit = useSubmit();
    
    useEffect(()=>{
        if(!token){
            return;
        }

        if(token === 'EXPIRED'){
            submit(null, {action: "/logout", method: 'post'});
            return;
        }

        setTimeout(()=>{
           submit(null, {action: "/logout", method: 'post'}) 
        }, getTokenDuration(token))

    }, [token, submit])
   
    return(<div className="general-container">
                <Header/>
                <main className="main-container">
                    <Outlet />
                </main> 
                <Footer/>
           </div>)
}

export default Layout;