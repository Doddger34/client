import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../queries/index';
import NotFound from '../Pages/404page';

const auth = condition => Component => props => {
    const { data, loading } = useQuery(GET_USER);
    if(loading) return null;
    return(
      <div>
        {
          condition(data) ? <Component {...props} /> : <NotFound />
        }
      </div>  
    );
}

export default auth;
