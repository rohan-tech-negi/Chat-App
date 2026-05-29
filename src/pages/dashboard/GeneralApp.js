import React, {Suspense, lazy} from "react";
const Cat = lazy(()=> import ('../../components/Cat.js'))
const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="loading..">
        <Cat />
      </Suspense>
    </>
  );
};

export default GeneralApp;
