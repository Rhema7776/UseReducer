import React, {useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch';

const url = 'https://fakestoreapi.com/products';
//every time props or state changes, component re-renders

const Index = () => {
    const { products } = useFetch(url);
    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Count : {count}</h1>
        <button className='btn' onClick={() => setCount(count + 1)}>
            Click me
        </button>

        <BigList products={products} />
      
    </div>
  );
};

const BigList = React.memo(({ products }) => {
    useEffect(()=>{
        console.log('big list called');
    }, []);
    return (
        <section className='products'>
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product}></SingleProduct>;
            })}
        </section>
    );
})

const SingleProduct = ({ fields }) => {
    useEffect(()=> {
        console.count('single item called')
    });
    let { title, price } = fields;
    price = price / 100;
    const image = fields.image[0];

    return (
        <article className='product'>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>${price}</p>
        </article>
    );
}
export default Index;
