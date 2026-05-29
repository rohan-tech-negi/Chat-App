import React, {Suspense, lazy} from "react";
const Cat = lazy(()=> import )
const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="loading..">

      </Suspense>
    </>
  );
};

export default GeneralApp;
