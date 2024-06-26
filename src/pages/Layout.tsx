import { Outlet, useLoaderData, useSubmit } from "react-router-dom"
import Footer from "../components/footer/footer";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";
import RentModal from "../components/modals/RentModal";
import Header from "../components/header/Header";

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
   
    return(<div className="flex flex-col h-screen">
                <RentModal/>
                <Header/>
                <main className="w-5/6 mr-auto ml-auto flex-1">
                    <Outlet />
                </main> 
                <Footer/>
           </div>)
}

export default Layout;