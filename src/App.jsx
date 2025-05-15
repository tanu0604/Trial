import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about/About";
import WhyChooseUs from "./components/about/WhyChooseUs";
import FutureRobotics from "./components/about/FutureRobotics";
import Courses from "./components/courses/Courses";
import Service from "./components/services/Service";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Achievements from "./components/achievements/Achievement";
import SchoolGallery from "./components/gallery/SchoolGallery";
import GalleryHome from "./components/gallery/GalleryHome";
const App = () => {
  return (
    <Router>
      {/* Entire layout with min-h-screen to fix spacing */}
      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/whychooseus" element={<WhyChooseUs />}></Route>
            <Route path="/future" element={<FutureRobotics />}></Route>
            <Route path="/services" element={<Service />}></Route>
            <Route path="/testimonials" element={<Testimonials />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/achievements" element={<Achievements />}></Route>
            <Route path="/gallery" element={<GalleryHome />} />
            <Route
              path="/gallery/:schoolId"
              element={<SchoolGallery />}
            ></Route>
          </Routes>
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
