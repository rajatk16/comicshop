import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Comic from './pages/Comic';

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/comics/:comicId" component={Comic} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
