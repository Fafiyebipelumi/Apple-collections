import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/product/:id'>
          <ProductDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
