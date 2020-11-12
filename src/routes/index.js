import React, { useContext } from 'react';

import { AuthContext } from '../contexts/auth';

import Indicador from '../components/Indicator';

import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

function Routes() {
  const { signed, loading } = useContext(AuthContext);

      if(loading){
        return(
          <Indicador/>
        )
      }
      return (
        signed ? <AppRoutes /> : <AuthRoutes />
      ) 
}

export default Routes;