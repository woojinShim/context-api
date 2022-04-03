import React, { useContext } from "react";
import { UserContext } from "./store/users";

const Profile = (props) => {
  const context = useContext(UserContext);
  return (
    <div>
      <h1>{context.job}</h1>
    </div>
  );
};

export default Profile;
