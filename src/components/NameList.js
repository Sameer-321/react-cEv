import React from "react";
import Person from "./Person";
function NameList() {
  let persons = [
    {
      id: 1,
      name: "Sameer",
      age: 20,
      skill: "yes",
    },
    {
      id: 2,
      name: "Sunar",
      age: 21,
      skill: "yes",
    },
    {
      id: 3,
      name: "SamiSuna",
      age: 22,
      skill: "yes",
    },
  ];

  let personDes = persons.map((para) => <Person key={para.id} person={para} />);
  return <div>{personDes}</div>;
}

export default NameList;
