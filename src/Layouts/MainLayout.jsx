import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();



const MainLayout = () => {
   
    return (
        <div>
            <header className={` fixed z-50 w-full bg-gray-800 bg-opacity-40  transition-all duration-300  mb-28 ease-in-out
          }`}>
                <Navbar></Navbar>
            </header>
            <main  > 
                <Outlet></Outlet>
            </main>
            <footer className=""> 
            <Footer></Footer>
            </footer>
           
        </div>
    );
};

export default MainLayout;