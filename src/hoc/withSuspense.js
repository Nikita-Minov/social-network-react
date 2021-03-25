import Preloader from '../components/common/Preloader/Preloader';
import React, {Suspense} from 'react'

export const withSuspense = (Component) => {

  return (props) => {
    return (
      <Suspense fallback={<div><Preloader /></div>} >
        <Component {...props} />
      </Suspense>
    )
  };
};
