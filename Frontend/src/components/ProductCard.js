import React from 'react';

const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '10px' }}>
    <h3>{product.title}</h3>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating} ⭐ ({product.reviews} reviews)</p>
    <a href={product.url} target="_blank" rel="noopener noreferrer">View on Amazon</a>
  </div>
);

export default ProductCard;
