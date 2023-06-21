import React, { lazy, Suspense } from 'react';
import Loading from './components/Loadings/Loading'

const LazyLoad = (importFunc) => {
  // const LazyComponent = lazy(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(importFunc());
  //     }, 500);
  //   });
  // });
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={<Loading></Loading>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyLoad;
