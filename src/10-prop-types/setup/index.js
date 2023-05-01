import React from 'react';
import Product from './Product';
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch';
import defaultImage from '../../assets/default-image.jpg';
const url = 'https://fakestoreapi.com/products';

const Index = () => {
    const {products } = useFetch(url);
    return (
        <div>
            <h2>products</h2>
            {/* <img src={defaultImage} alt="" /> */}
            <section className='products'>   
                {products.map((product) => {
                    return <Product key={product.id} {...product} />;
                })}
            </section>
        </div>
    );
};

export default Index;
