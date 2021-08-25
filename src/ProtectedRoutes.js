import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoutes({auth,component: Component, ...rest}) {
  return (
    <div>
      <Route {...rest} render={(props) => {
        if(auth) return <Component {...props} />;
        if(!auth) return <Redirect to={{path:"/"}} />;
      }}
      />;
    </div>
  )
}

export default ProtectedRoutes
