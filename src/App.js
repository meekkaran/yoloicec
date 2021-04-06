
import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter as Router ,Switch ,Route } from 
'react-router-dom';
import Location from './pages/Location';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Icecreams from './homebuttons/Icecreams';
import Milkshakes from './homebuttons/Milkshakes';
import Cocktails from './homebuttons/Cocktails';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
       
      <Topbar/> 
      <Switch>  
          
        <Route path='/' exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Order" component={Order} />
        <Route path="/Location" component={Location} />
        <Route path="/Icecreams" component={Icecreams} />
        <Route path="/Milkshakes" component={Milkshakes} />
        <Route path="/Cocktails" component={Cocktails} />
      
      </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App;
