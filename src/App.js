import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path = '/' component= {Home} />
        <Route exact path = '/About' component= {About} />
        <Route exact path = '/Contact' component= {Contact} />
        <Route exact path = '/Services' component= {Service} />
        <Redirect to = "/" />
      </Switch>
    <Footer />
    </>
  );
}

export default App;
