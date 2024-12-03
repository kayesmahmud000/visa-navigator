
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
          element:<AllVisas></AllVisas>
        },
        {
          path:"/AddVisa",
          element:<AddVisa></AddVisa>
        },
        {
          path:"/myVisa",
          element:<Myaddedvisas></Myaddedvisas>
        },
        {
          path:"/visaApplication",
          element:<VisaApplications></VisaApplications>
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