import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
