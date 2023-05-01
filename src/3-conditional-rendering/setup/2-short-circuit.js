import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const[text,setText] = useState('');
    const[isError, setisError] = useState(false);
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';

  return (
  <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
    {/* {text && <h1>hello world</h1>}
    {!text && <h1>hello world</h1>} */}
    <h1>{text || 'rhema chuks'}</h1>
    <button className='btn btn-outline-warning' onClick={() => setisError(!isError)}>
      toggle error (Click)
    </button>
    {isError && <h1 style={{ color: 'brown' }}>Errror...</h1>}
    {isError ? (
      <p style={{ color: 'brown' }}>there is an error...</p>
    ):(
      <div>
        <h2>there is no error</h2>
      </div>
    )}
  </>
  );
  
};

export default ShortCircuit;