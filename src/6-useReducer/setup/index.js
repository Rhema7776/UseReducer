import React, {useState, useReducer} from 'react';
import Modal from './Modal';
import {data} from '../../data';

//reducer function
import {reducer} from './reducer';

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent:'',
}
const Index = () => {
    const [name, setName] = useState('');  
    const [state,dispatch] = useReducer(reducer, defaultState);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            const newItem = {id:new Date().getTime().toString(),
            name}
            dispatch({type: 'ADD_ITEM',payload:newItem });
            setName('');
        }else{  
            dispatch({type: 'NO_VALUE'});     
        }
    };
    const closeModal = () => {
        dispatch({type:'CLOSE_MODAL'})
    }
    return (
        <>
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
            <form action="" onSubmit={handleSubmit} className="form" style={{marginBlockEnd: 30, paddingTop: 40}}>
                <div>
                    <input
                    type="text"
                    placeholder='type in a task(todo)' 
                    value={name} 
                    class="form-control container w-50"
                    style={{marginBlockEnd: 10}}
                    onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <button type='submit' className='btn btn-primary w-50 '>Add</button>
            </form>
            {state.people.map((person) => {
                return (
                    <div key={person.id} className='item animate__animated  animate__backInDown '>
                        <h4>{person.name}</h4>
                        <button className='btn btn-outline-primary' type="submit" onClick={()=> dispatch({type: 'REMOVE_ITEM', payload:
                        person.id })
                        }>
                            Remove
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export default Index;
