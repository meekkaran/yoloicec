
import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter as Router ,Switch ,Route } from 
'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
    </>
  )
}

export default App;
