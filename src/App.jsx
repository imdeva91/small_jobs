import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Navbar />
      <About />
      {/* <Contact /> */}
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
