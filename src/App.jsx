import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Postpartum from "./components/postpaturm/Postpartum"
import BirthClasses from './components/birthclasses/BirthClasses'
import Salon from './components/salon/Salon'
import './App.css'
import BirthSupport from "./components/birthsupport/BirthSupport"
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/postpartum-care" element={<Postpartum />} />
        <Route path="/spa" element={<Postpartum />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/birth-support" element={<BirthSupport />} />
        <Route path="/birth-classes" element={<BirthClasses />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
