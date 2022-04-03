import React, { createContext } from "react";

const UserContext = createContext();

const UserStore = (props) => {
  const users = {
    name: "woojin",
    job: "developer",
  };
  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};

export default UserStore;
