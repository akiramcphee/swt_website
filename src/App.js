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
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/team' component={Profiles}/>
          <Route path='/log' component={Log}/>
          <Route path='/join' component={() => {
            window.location.href = 'https://www.challeng.unsw.edu.au/challeng-projects/smart-wearable-tech';
            return null;
          }}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
