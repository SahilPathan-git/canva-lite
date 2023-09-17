import React from "react";
import LoginComponent from "./LoginComponent";
import ContextUser from "./ContextUser";

const Main = () => {
  return (
    <div>
      <ContextUser>
        <LoginComponent />
      </ContextUser>
    </div>
  );
};

export default Main;
