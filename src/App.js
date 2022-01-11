import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Products from './components/Products';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Developers from './components/Developers';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Header/>
        <Navbar />
        <Slideshow />
        <Products />
        <Services/>
        <Portfolio /> 
        <Developers/>
        <Signup />
        <Footer />
        
        
      </Router>
      
    </div>
  );
}

export default App;
