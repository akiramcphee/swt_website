//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Projects from './OurProjects/Projects';
import Log from './Log/Log';
import Profiles from './Profiles/Profiles';
import Footer from './components/Footer/Footer';
import Heading from './components/Heading/Heading';
import HomeText from './components/Homepage_Title/HomeText';


function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/sensors' exact component={Projects} element={<Projects/>}/>
          <Route path='/log/speech' exact component={Log} element={< Log project = "speech"/>}/>
          <Route path='/log/glove' exact component={Log} element={< Log project = "glove"/>}/>
          <Route path='/log/Pulse' exact component={Log} element={< Log project = "pulse"/>}/>
          <Route path='/profiles' exact component={Profiles} element={<Profiles />}/>
          <Route path='/join' exact component={() => {
            window.location.href = "https://www.challeng.unsw.edu.au/challeng-projects/smart-wearable-tech";
            return null;
          }}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
