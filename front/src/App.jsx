import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ticket" element={<Ticket />} /> */}
      </Routes>
    </>
  );
}

export default App;
