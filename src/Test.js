import React, { useRef } from 'react';

function Test() {
  // Create a ref using the useRef hook
//   const myRef = useRef(null);
//   const myRef2 =useRef(null);
  

  const handleClick = () => {
    // Access and manipulate the DOM element using the ref
    // if (myRef.current || myRef2.current) {
    //   myRef.current.style.backgroundColor = 'blue';
    //   myRef2.current.style.backgroundColor = "red";

    // }
        document.getElementById("element1").style.backgroundColor = "blue";

    

  };

  return (
    <div>
      <button onClick={handleClick} >Change Color</button>
      <div id='element1' className='' >This is a DOM element 1.</div>
    </div>
  );
}
export default Test;
