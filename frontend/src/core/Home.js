import React, { useState, useEffect } from 'react';
import { getProducts } from './apiCore';
import Card from './Card';

import Navbar from './Navigation';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log("Error de conexion")
                setError(data.error)
            } else {
                setProducts(data);
                console.log(data);
            }
        })
    }

        useEffect(() => {
            loadProducts();
        }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    {products.map((product, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;