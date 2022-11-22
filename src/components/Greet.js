import React from "react";

// function Greet() {
//   return <h1>Hello Vishwas</h1>;
// }

const Greet = ({ name, heroName, children }) => {
  return (
    <div>
      <h1>
        Hello, {name} a.k.a-{heroName}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
