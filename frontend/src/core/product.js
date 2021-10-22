import React, {useState, useEffect} from 'react';
import { read } from './apiCore';
import Card from './Card';
import Navigation from './Navigation';

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  const loadSingleproduct = productId => {
    read(productId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  }

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleproduct(productId);
  }, [props])

  return (
    <>
    <Navigation/>
    <div className="container">
      <h2>This is the videogmae page!</h2>
      {
        product &&
        <Card product={product}/>
      }
    </div>
    </>
  )
}

export default Product;