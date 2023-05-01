import React, {useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const useRefbasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    };

    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus();
    });
    console.log(refContainer);
    return (
        <>
            <form className='form' action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} placeholder="type in something" />
                    <button className='btn btn-success' type='submit'>Submit</button>
                </div>
            </form>
            <div ref={divContainer}>hello guys</div>
            <h2>Check your console while you submit </h2>
        </>
    )
}

export default useRefbasics