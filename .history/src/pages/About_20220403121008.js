import React, { useContext } from "react";
import { UserContext } from "./store/users";

const About = (props) => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <div>
      <h1>{context.name}</h1>
      <p>
        This is the TodoList app v1.0.0. It is part of a React crash course.
      </p>
    </div>
  );
};

export default About;
