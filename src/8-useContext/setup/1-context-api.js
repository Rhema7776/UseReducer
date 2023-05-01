import React, { useState, useContext } from 'react';
import {data} from '../../data';
//more components
//fix - context api, redux (for more compplex cases)

const PersonContext = React.createContext();
//now we have access to two components- The Provider and The Consumer 
const ContextAPI = () => {
    const [people,setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return( 
    <PersonContext.Provider className="container" value={{removePerson, people}}>
        <h3>Context API /useContext</h3>
        <List />
    </PersonContext.Provider>
    );    
};

const List = ({people}) => {
    const mainData = useContext(PersonContext);
    console.log(mainData);
    return (
    <>
        {mainData.people.map((person) => {
            return( 
            <SinglePerson 
            key={person.id}
            {...person} 
            />
            );
        })}
    </>
    );
}
const SinglePerson = ({id,name}) => {
    const {removePerson} = useContext(PersonContext);
  
    return (
        <div className='item'>
           <h4>{name}</h4> 
           <button className="btn btn-primary" onClick={()=> removePerson(id) } type="submit">Remove</button>
           
           <h3>Refresh page to get list back</h3>
        </div>

        
    )
}
export default ContextAPI;
