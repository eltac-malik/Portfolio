import "./App.css";
import Navbar from "components/Navbar";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Resume from "pages/Resume";
import Portfolio from 'pages/Portfolio'
import Skills from "pages/Skills";
import Contact from 'pages/Contact'
import Error from 'pages/Error'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate replace to ='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
