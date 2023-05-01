import React from 'react';
import {data} from '../../data';

const UseStateArray = () => {
    const [people,setPeople] = React.useState(data);

    const removeItem = (id) => {
        // let newPeople = people.filter((person)=> person.id !== id)
        // setPeople(newPeople)

        //OR , WE USE THE FUNCTIONAL APPROACH
        setPeople((newPerson) =>{
            let newPeople = newPerson.filter((person) => person.id !== id);
            return newPeople;           
        })
    };
    return (
        <>
        {people.map((person) =>{
            const {id, name} = person
            return (
            <div key={id} className='item'>
                <h3>{name}</h3>
                <button className='btn btn-danger' onClick={() => removeItem(id)}>remove</button>
            </div>
            );
        })}
        <button className='btn btn-outline-warning' onClick={() => setPeople([])}>
            clear items
        </button>
        <h3>Refresh page to get list of Items back</h3>
        </>
    );
};

export default UseStateArray;