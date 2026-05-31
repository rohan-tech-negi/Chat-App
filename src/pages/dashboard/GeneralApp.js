import React, {Suspense, lazy} from "react";
import Chats from "./Chats";
// const Cat = lazy(()=> import ('../../components/Cat.js'))
const GeneralApp = () => {

  return (
    <>
      <Chats></Chats>
    </>
  );
};

export default GeneralApp;
