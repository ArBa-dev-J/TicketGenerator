import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import Login from "./components/LoginForm/Login";
import Ticket from "./components/ticket/Ticket";


function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Ticket />} />
      </Routes>
    </>
  );
}

export default App;
