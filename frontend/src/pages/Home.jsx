import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ComicCard from '../components/ComicCard';

import {comics} from '../assets/data.json';

const Home = () => {
  return (
    <>
    <h1>
      Latest Products  
    </h1> 
    <Row>
      {comics.map(comic => (
        <Col 
          key={comic.id} 
          sm={12} 
          md={4} 
          lg={4} 
          xl={4}
        >
          <ComicCard comic={comic} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Home
