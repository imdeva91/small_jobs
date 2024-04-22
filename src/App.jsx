import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import WorkerSignIn from "./pages/signIn/WorkerSignIn.jsx"

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Contact />
      <Home />
      <Footer />
      <WorkerSignIn />
    </>
  );
}

export default App;
