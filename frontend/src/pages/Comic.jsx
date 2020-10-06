import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';

import Rating from '../components/Rating';
import { comicDetailRequestAsync } from '../redux/actions';
import Loading from '../components/Loading';
import Message from '../components/Message';

const Comic = ({match}) => {
  const dispatch = useDispatch();
  const {comic, loading, error} = useSelector(state => state.comic)
  
  useEffect(() => {
    dispatch(comicDetailRequestAsync(match.params.comicId))
  }, [match.params.comicId, dispatch])

  return comic ? (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading 
      ? <Loading /> 
      : error 
      ? <Message>{error}</Message> 
      : (
        <Row>
          <Col>
            <Image src={comic.imageURL} alt={comic.title} fluid />
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{comic.title}</h3>
                <p>{comic.pages} pages</p>
                <p>Sale Date: {moment(comic.saledate).format("MMM DD YYYY")}</p>
                <p>Rated {comic.rating}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={comic.review} text={`${comic.numReviews} reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
                {comic.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Card>
              <Card.Title style={{textAlign: 'center'}}>
                Talent
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item style={{display: 'flex', flexDirection: 'row'}}>
                    <Col>
                      Art By
                      {comic.talent.artby.map((person, i) => (
                        <Row key={`${person}-${i}`}>
                          {person}
                        </Row>
                      ))}
                    </Col>
                    <Col>
                      Written By
                      {comic.talent.writtenby.map((person, i) => (
                        <Row key={`${person}-${i}`}>
                          {person}
                        </Row>
                      ))}
                    </Col>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title style={{textAlign: 'center'}}>
                Starring
              </Card.Title>
              <Card.Body style={{textAlign: 'center'}}>
                {comic.starring.map((star, i) => (
                  <Card.Text key={`${star}-${i}`}>
                    {star}
                  </Card.Text>
                ))}
              </Card.Body>
            </Card>
            <div style={{display: "flex", justifyContent: "center", marginTop: '10px'}}>
              <Button variant="success" style={{display: "flex", justifyContent: "space-between", width: '100%'}}>
                {comic.available ? "Buy Now" : "Pre Order"}
                <span>${comic.price}</span>
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </>
  ) : (
    <p>Loading...</p>
  )
}

export default Comic;