//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Our_projects/Projects';
import Log from './Log/Log';
import Profiles from './Profiles/Profiles';


function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' exact component={Projects} element={<Projects/>}/>
          <Route path='/log/Speech%20Recognition' exact component={Log} element={< Log project = "speech"/>}/>
          <Route path='/log/Smart%20Glove' exact component={Log} element={< Log project = "glove"/>}/>
          <Route path='/log/Pulse' exact component={Log} element={< Log project = "pulse"/>}/>
          <Route path='/profiles' exact component={Profiles} element={<Profiles />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
