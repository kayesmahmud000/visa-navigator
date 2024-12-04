import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';

const PrivateRoute = ({children}) => {
    const {users ,loading}=useContext(authContext)
    const location=useLocation()

    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(users && users?.email){
        return children
    }
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;