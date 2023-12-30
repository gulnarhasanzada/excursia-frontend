import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Layout from "./Layout";

const ErrorPage =  ()=>{
    return <div className="general-container">
    <Header/>
    <main className="main-container">
    <h1>404 Page not found!</h1>
    </main> 
    <Footer/>
</div>
}

export default ErrorPage;