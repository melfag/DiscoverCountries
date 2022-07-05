import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Countries from "./components/Countries";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/" element={<Countries />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/countries/:capital" element={<Country />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
