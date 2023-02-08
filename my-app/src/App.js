import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Smallb from "./Components/Smallb";
import Smallb2 from "./Components/Smallb2";
import Container from "./Components/Container";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div className="app">
      <Header />
      <Smallb />
      <div className="app__body">
        <Container />
        <Sidebar/>
      </div>
      <Smallb2  />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
