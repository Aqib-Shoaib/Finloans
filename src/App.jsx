import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import { lazy } from "react";

//lazy loading
const ApplyLoan = lazy(() => import("./Pages/ApplyLoan"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Loans = lazy(() => import("./Pages/Loans"));
const Blog = lazy(() => import("./Pages/Blog"));
const Contact = lazy(() => import("./Pages/Contact"));
const Elements = lazy(() => import("./Pages/Elements"));
const Faq = lazy(() => import("./Pages/Faq"));
const SingleBlog = lazy(() => import("./Pages/SingleBlog"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/loans' element={<Loans />} />
          <Route path='/about' element={<About />} />
          <Route path='/apply-loan' element={<ApplyLoan />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/elements' element={<Elements />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/single-blog' element={<SingleBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
