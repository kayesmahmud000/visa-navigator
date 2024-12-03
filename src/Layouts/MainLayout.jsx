import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <header className="w-11/12 mx-auto my-5">
                <Navbar></Navbar>
            </header>
            <main className="max-w-7xl px-4 mx-auto"> 
                <Outlet></Outlet>
            </main>
            <footer className="w-11/12 mx-auto my-5"> 
            <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default MainLayout;