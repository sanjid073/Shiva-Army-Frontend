import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseFirebase from '../Hooks/UseFirebase';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = UseFirebase()
    let location = useLocation();

    if(isLoading){
        return <div className="text-center">
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    }
    if(user.email){
        return children
    }
    

     return  <Navigate to="/adminLogin" state={{from : location}} />;

};

export default PrivateRoute;
