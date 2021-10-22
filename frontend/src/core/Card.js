
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import ShowImage from './ShowImage';

const Card = ({product}) => {
  const [count, setCount] = useState(product.count)

  return (
    <div className="card m-10 card-cont">
      <div className="">
        <ShowImage className="img" item={product} url="product"/>
        <p>{product.name}</p>
        <p>${product.price}</p>
        <p>{product.description}</p>
          <Link to={`/product/${product._id}`}>
            <button className="btn btn-success">Ver Mas</button>
          </Link>
      </div>
    </div>
  )
}

export default Card;