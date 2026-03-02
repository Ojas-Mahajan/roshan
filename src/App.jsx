import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import MapSection from "./components/map";
import FloatingSocial from "./components/floatingsocial";
import ScrollToTop from "./components/ScrollToTop.jsx";
import MenuPage from "./pages/menupage";
import GalleryPage from "./pages/gallerypage";
import ContactPage from "./pages/contactpage.jsx";

// Blogs
import Blog from "./pages/Blog.jsx";
import BestCafeinChandigarh from "./pages/BestCafeinChandigarh.jsx";
import Conversations from "./pages/Conversations";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
      <MapSection />
      <FloatingSocial />
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contactpage" element={<ContactPage />} />  
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<BestCafeinChandigarh />} /> 
        <Route path="/blog/2" element={<Conversations />} />

      </Routes>

      <Footer />
    </>
  );
}