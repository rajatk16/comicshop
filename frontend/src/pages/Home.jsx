import React, {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import ComicCard from '../components/ComicCard';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { comicListRequestAsync } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const {comics, loading, error} = useSelector(state => state.comics);

  useEffect(() => {
    dispatch(comicListRequestAsync());
  }, [dispatch])

  return (
    <>
      <h1>
        Latest Products  
      </h1> 
      {
        loading ? <Loading /> :  error ? <Message>{error}</Message> : (
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
        )
      }
    </>
  )
}

export default Home
