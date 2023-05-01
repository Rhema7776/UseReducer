import React, {useState, useEffect} from 'react';
import { useFetch } from './2-useFetch.js';

// const url = 'https://course-api.netlify.app/api/javascript-store-products';
const url = 'https://fakestoreapi.com/products';
const  Example = () => {
    const {loading,products} = useFetch(url)
    console.log(products);
    return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
}

export default Example
