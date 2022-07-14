import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="This is an amazing react course" />
          <div className="container">
            <Home />

            <Routes>
              <Route exact path="/" />
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/login" element={<Signup />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
