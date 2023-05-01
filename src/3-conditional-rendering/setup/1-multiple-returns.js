import React, {useState, useEffect} from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
    const [isLoading,setisLoading] = useState(false);
    const [isError,setisError] = useState(false);
    const [user,setUser] = useState('default user');
    
    useEffect(()=>{
        setisLoading(true);
        fetch(url)
            .then((resp) => {
                if(resp.status >= 200 && resp.status <= 299){
                    return resp.json();
                }else{
                    setisLoading(false);
                    setisError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                const {login} = user;
                setUser(login);
                setisLoading(false);
                console.log(user)
            })
            .catch((error) => console.log(error));
    }, []);
    
    if(isLoading) {
        return(
           <div>
                <h1>Loading...</h1>
           </div>
        );
    }
    if (isError) {
        return(
           <div>
                <h1>Error...</h1>
           </div>
        );
    }
    return (
    <div>
        <h1 style={{ color: 'brown' }}>{user}</h1>
    </div>
    );
};

export default MultipleReturns;