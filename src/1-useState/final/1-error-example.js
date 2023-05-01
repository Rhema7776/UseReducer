import React from 'react'

const ErrorExample = () => {
    let title = 'random title';

    const handleClick = () => {
        title = 'hello people';
        console.log(title);
    };
  return(
    <React.Fragment>
        <h2>{title}</h2>
        <button type='button' className='btn btn-primary' 
        onClick={handleClick}>
            change title
        </button>
        <p>Check your console to see what happens</p>
    </React.Fragment>
  );
}

export default ErrorExample;