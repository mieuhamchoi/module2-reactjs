import React, { lazy, Suspense } from 'react';

const LazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyLoad;
