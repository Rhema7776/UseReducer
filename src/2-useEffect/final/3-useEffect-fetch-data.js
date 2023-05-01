import React, {useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

//second argument

const UseEffectSecondArgument = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        // console.log(users);
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <h3 className="animate__animated animate__backInLeft animate__delay-2s" style={{ margin: '2rem 0'}} >Github Users (Fetched)</h3>
            <div className='users container' style={{ margin: '4rem 0'}}>
                {users.map((user)=>{
                    const{ id, login, avatar_url, html_url} = user;
                    return (
                        <span key={id} className="gituser">
                            <img src={avatar_url} alt="" className='userimg' />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>profile</a>
                            </div>
                        </span>
                    );
                })}
            </div>
            
        </>
    )
};

export default UseEffectSecondArgument;