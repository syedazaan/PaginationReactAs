import React, { useState, useEffect } from 'react';
import "./styles.css";

const ProductCard = ({image, title}) => {
  return (<div className='product-name'>
    <img src={image} alt = {title} />
    <span>{title}</span>
  </div>)
}


export default function App(){
  const [products, setProducts] = useState([ ]);

  

  const fetchData = async ( ) => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, [ ]);


  return 
   (!products.length ?
   ( <h1>No products found</h1>) :
  (
    <div className='App'>
      <h1>
        Pagination
      </h1>
      <div>
      {
        products.map(
            p => <ProductCard key = {p.id} images={p.thumbnail}title = {p.title} /> 
            )
      }
      </div>
    </div>
  )
   )

}