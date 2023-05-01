import React, {useState} from 'react'
//useState - function

const UseStateBasics = () => {
    console.log(useState('WELCOME TO USESTATE'));
    //const value = useState(1)[0];
    //const handler = useState(1)[1];
    //console.log(value, handler);
    const [text, setText] = useState('Random Title');

    const handleClick = () => {
        if (text === 'Random Title'){
            setText('Hello World');
        }else {
            setText('Random Title');
        }
    };
    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button className='btn btn-primary' onClick={handleClick}>
                change title
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;