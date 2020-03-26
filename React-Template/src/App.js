import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarPage from '../src/Components/Navbar/'
import Home from '../src/Pages/Home'
import About from './Pages/About/index'
import Contact from '../src/Pages/Contact'
import Projects from '../src/Pages/Portfolio';
import "./index.css";


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header>
        <NavbarPage />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/projects'  component={Projects} />
          </Switch>
          </header>
      </div>
    </Router>
  );
  }
}

export default App;
