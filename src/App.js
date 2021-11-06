//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home/Home';
// import About from './About/About';
import Projects from './Our_projects/Projects';


function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home}/>
        </Routes>
      </Router>
      <Projects></Projects>
    </div>
  );
}

export default App;
