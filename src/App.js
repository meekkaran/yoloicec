
import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter as Router ,Switch ,Route } from 
'react-router-dom';
import Location from './pages/Location';

function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <Switch>
        <Route path='/' exact />
        <Route path="/Location" component={Location} />
        
      </Switch>
    </Router>
    </>
  )
}

export default App;
