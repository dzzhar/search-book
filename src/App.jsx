import { Routes, Route } from "react-router-dom";
import Top from "./pages/top/";
import Featured from "./pages/books/";
import Home from "./pages/home/";
import About from "./pages/about";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/about" element={<About />} />
      <Route path="/pages/books" element={<Featured />} />
      <Route path="/pages/top" element={<Top />} />
    </Routes>
  );
};

export default App;