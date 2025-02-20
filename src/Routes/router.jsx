
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import AllVisas from '../Pages/AllVisas';
import AddVisa from '../Pages/AddVisa';
import Myaddedvisas from '../Pages/Myaddedvisas';
import VisaApplications from '../Pages/VisaApplications';
import ErrorPage from '../Pages/ErrorPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import VisaDetailsPage from '../Pages/VisaDetailsPage';
import PrivateRoute from './PrivateRoute';
import AboutPage from '../Pages/AboutPage';
import Contact from '../Pages/Contact';
import Privacy from '../Pages/Privacy';
import Terms from '../Pages/Terms';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/allVisas",
          element:<AllVisas></AllVisas>,
          loader:()=>fetch("https://visa-nevigator.vercel.app/addVisas")
        },
        {
          path:"/AddVisa",
          element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
        },
        {
          path:"/about",
          element:<AboutPage></AboutPage>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/privacy",
          element:<Privacy></Privacy>
        },
        {
          path:"/terms",
          element:<Terms></Terms>
        },
        {
          path:"/myVisa",
          element:<PrivateRoute><Myaddedvisas></Myaddedvisas></PrivateRoute>
        },
        {
          path:"/visaApplication",
          element:<PrivateRoute><VisaApplications></VisaApplications></PrivateRoute>,
          
          
        },
        {
          path:"/detailsPage/:id",
          element:<PrivateRoute><VisaDetailsPage></VisaDetailsPage></PrivateRoute>,
          loader:({params})=>fetch(`https://visa-nevigator.vercel.app/visa/${params.id}`)
        },
      ]
    },
    
    {
      path:"/login",
      element:<LoginPage></LoginPage>

    },
    {
      path:"/register",
      element:<RegisterPage></RegisterPage>

    },
    {
      path:"*",
      element:<ErrorPage></ErrorPage>
    }
  ]);

export default router;