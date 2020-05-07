import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarPage from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About/index'
import Contact from './Pages/Contact'
import Projects from './Pages/Portfolio';
import Resume from './Pages/Resume';
import "./index.css";
import Footer from './Components/Footer/footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarPage />
          <header>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/resume' component={Resume} />
            </Switch>
          </header>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
