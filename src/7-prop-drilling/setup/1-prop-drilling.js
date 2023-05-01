import React, { useState, useEffect } from 'react';
import {data} from '../../data';
//more components
//fix - context api, redux (for more compplex cases)

const PropDrilling = () => {
    const [people,setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return( 
    <section>
        <h3>Prop drilling</h3>
        <List people={people} removePerson={removePerson} />
    </section>
    );
    
};

const List = ({people, removePerson}) => {
    return (
    <>
        {people.map((person) => {
            return( 
            <SinglePerson 
            key={person.id}
            {...person} 
            removePerson={removePerson} 
            />
            );
        })}
    </>
    );
}

const SinglePerson = ({id,name, removePerson}) => {
    return (
        <div className='btn btn-outline-info'>
           <h4>{name}</h4> 
           <button className='btn btn-primary' onClick={()=> removePerson(id)} type="submit">Remove</button>
        </div>
    )
}
export default PropDrilling;