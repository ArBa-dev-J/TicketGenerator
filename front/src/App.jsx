import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import Login from "./components/LoginForm/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/:id/ticket" element={<Ticket />} /> */}
      </Routes>
    </>
  );
}

export default App;
