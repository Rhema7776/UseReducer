import React, {useState, useEffect} from 'react';
//JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
//value, onChange

const Controlledinputs = () => {
    const[firstName, setFirstName] = useState('');
    const[email, setEmail] = useState('');
    const[people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // console.log(firstName, email);
        if(firstName && email) {
            const person = { id: new Date().getTime().toString(),
            firstName, email };
            console.log(person);
            setPeople((people) => {
                return [...people, person];
            });
            setFirstName('');
            setEmail('');
        }else{
            console.log('empty values');
        }
    };
    return (
        <>
            <article>
                <form action="" className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="firstName">Name : </label>
                        <input 
                        type="text" 
                        id='firstName' 
                        name='firstName' 
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email : </label>
                        <input
                         type="text"
                         id='email'
                         name='email' 
                         value={email} 
                         onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Add person</button>
                </form>
                {people.map((person) => {
                    const {id, firstName, email} = person;
                    return(
                        <div className='item animate__animated  animate__backInDown ' key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    );
                })}
            </article>
        </>
    );
};
export default Controlledinputs;