import React from 'react';
import {Container} from 'react-bootstrap';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <h1>Welcome to ComicShop</h1>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;