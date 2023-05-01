import React, {useState} from "react";

const useStateObject = () => {
    const [person,setPerson] = useState({
        name: 'Rhema',
        age: 29,
        message: 'Random message',
    });

    const[name, setName] = useState('Rhema');
    const[age, setAge] = useState(29);
    const[message, setMessage] = useState('Random message');

    
    const changeMessage = () => {
        // setMessage('hello world');
        if (message === 'Random message'){
            setMessage('Hello World!');
        }else {
            setMessage('Random message');
        }
        //setPerson({ ...person, message : 'hello world'});
        //setPerson({message : 'hello world'});
        //setPerson('hello world');
    };
    return (
        <>
         <h2>{name}</h2>
         <h2>{age}</h2>
         <h2>{message}</h2>
         <button className="btn btn-outline-info" onClick={changeMessage}>
            Change message
         </button>

         <h2>Refresh page or click the button above to get back previous message</h2>
        </>
    );
};

export default useStateObject;