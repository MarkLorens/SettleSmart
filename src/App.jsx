import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomerReview from "./pages/CustomerReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customerreview" element={<CustomerReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
