import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import TheDungeon from "./pages/TheDungeon"
import TankSurvival from './pages/TankSurvival';
import Darkness from './pages/Darkness';
import TankGame from './pages/TankGame';
import RealmWarp from './pages/RealmWarp';
import BekkaTheBokka from './pages/BekkaTheBokka';
import Colorfoul from './pages/Colorfoul';
import ShellShocked from './pages/ShellShocked';
import Contact from "./pages/Contact"
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    console.log(process.env) // remove this after you've confirmed it is working
  }, [process.env])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/projects/thedungeon' element={<TheDungeon />} />
          <Route path='/projects/tanksurvival' element={<TankSurvival />} />
          <Route path='/projects/darkness' element={<Darkness />} />
          <Route path='/projects/tankgame' element={<TankGame />} />
          <Route path='/projects/realmwarp' element={<RealmWarp />} />
          <Route path='/projects/bekkathebokka' element={<BekkaTheBokka />} />
          <Route path='/projects/colorfoul' element={<Colorfoul />} />
          <Route path='/projects/shellshocked' element={<ShellShocked />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
