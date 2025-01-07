import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();



const MainLayout = () => {
   
    return (
        <div>
            <header className=" sticky top-0 z-50" >
                <Navbar></Navbar>
            </header>
            <main className="container mx-auto" > 
                <Outlet></Outlet>
            </main>
            <footer className=""> 
            <Footer></Footer>
            </footer>
           
        </div>
    );
};

export default MainLayout;