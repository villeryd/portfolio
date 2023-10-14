import { Routes, Route } from "react-router-dom";
import { Home } from "./Homepage/home";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
