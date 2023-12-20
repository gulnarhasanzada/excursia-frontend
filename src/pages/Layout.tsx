import { Outlet } from "react-router-dom"
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Layout = ()=>{
    return(<div className="general-container">
                <Header/>
                <main className="main-container">
                    <Outlet />
                </main> 
                <Footer/>
           </div>)
}

export default Layout;