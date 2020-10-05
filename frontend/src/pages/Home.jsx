import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import Axios from 'axios';

import ComicCard from '../components/ComicCard';

const Home = () => {
  const [comics, setComics] = useState([])
  useEffect(() => {
    const fetchComics = async () => {
      const response = await Axios.get('/api/comics')
      console.log(response.data)
      if (response) {
        setComics(response.data)
      }
    }
    fetchComics()
  }, [])
  return (
    <>
      <h1>
        Latest Products  
      </h1> 
      <Row>
        {comics.map(comic => (
          <Col 
            key={comic._id} 
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
