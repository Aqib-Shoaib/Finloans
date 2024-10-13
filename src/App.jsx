import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import Loans from "./Pages/Loans";
import About from "./Pages/About";
import ApplyLoan from "./Pages/ApplyLoan";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Elements from "./Pages/Elements";
import Faq from "./Pages/Faq";
import SingleBlog from "./Pages/SingleBlog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply-loan" element={<ApplyLoan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/single-blog" element={<SingleBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
