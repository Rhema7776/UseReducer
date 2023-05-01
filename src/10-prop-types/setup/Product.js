import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/default-image.jpg';
const Product = ({ image,title,price,description }) => {
  return (
    <article className='product'>
      <img className='userimg2' src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price}</p>
      
    </article>
  );
};

Product.defaultProps = {
    title: 'default title',
    price: 3.99,
    image: defaultImage
}
export default Product;
