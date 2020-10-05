import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import Rating from './Rating';

const ComicCard = ({comic}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/comics/${comic._id}`}>
        <Card.Img src={comic.imageURL} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/comics/${comic._id}`}>
          <Card.Title as="div">
            <strong>
              {comic.title}
            </strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating 
            value={comic.review} 
          />
        </Card.Text>
        <Card.Text as="div">
          U.S. Price: ${comic.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

ComicCard.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicCard
