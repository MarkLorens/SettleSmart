import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomerReview from "./pages/CustomerReview";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customerreview" element={<CustomerReview />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
