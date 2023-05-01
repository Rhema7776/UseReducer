import React, {useState, useEffect} from 'react';
// cleanup function
// second argument
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () =>{
  setSize(window.innerWidth);
  }

  useEffect(()=>{
    console.log("hello world");
    window.addEventListener('resize',checkSize);
    // return () => {
    //   console.log('cleanup');
    //   window.addEventListener('resize',checkSize);
    // };
  }, []);
  return (
    <>
    <h2>window</h2>
    <h2>{size}X</h2>
    <h4>Try adjusting the size of your window by inspecting and expanding or shrinking your screen</h4>
    </>
  )
}
export default UseEffectCleanup