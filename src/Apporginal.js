// s
import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PracParent from "./components/PracParent";
import State from "./compPrac/State";
import EventBind from "./compPrac/EventBind";
import Refs from "./compPrac/Refs";
import FocusCompP from "./compPrac/FocusCompP";
import FwdREfP from "./compPrac/FwdREfP";
//for todo list
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserGreeting /> */}
        {/* <State /> */}
        <FwdREfP />
      </div>
    );
  }
}
// function App() {
//   return (
//     // <div className="App">

//     <Message />
//     // {/* <Greet name="Sameer" heroName="HEro">
//     //   <p>This is Children</p>
//     // </Greet>

//     // <Greet name="Sunar" heroName="zEro" />
//     // <Greet name="77" heroName="Piro" /> */}
//   );
// }

export default App;
