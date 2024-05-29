import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/favorite";
import Featured from "./pages/books";
import Home from "./pages/home";
import About from "./pages/about";
import Detail from "./pages/detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/about" element={<About />} />
      <Route path="/pages/books" element={<Featured />} />
      <Route path="/pages/favorite" element={<Favorite />} />
      <Route path="/pages/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
