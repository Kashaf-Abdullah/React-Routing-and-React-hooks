import React, { useEffect, useLayoutEffect,useRef } from 'react'
// useLayoutEffect: If you need to mutate the DOM and/or do need to perform measurements
// useEffect: If you don't need to interact with the DOM at all or your DOM changes are unobservable
//  (seriously, most of the time you should use this).




// One other situation you might want to use useLayoutEffect instead of useEffect is if you're updating a value (like a ref) and you
//  want to make sure it's up-to-date before any other code runs
const UseLayoutEffectHook = () => {

    const inputRef=useRef(null)
useLayoutEffect(()=>{
    console.log(inputRef.current.value);
    
},[])
    useEffect(()=>{
   inputRef.current.value="hello"
    
 })
    return (
    <div>
        <input ref={inputRef} value="PEDRO"></input>
      
    </div>
  )
}

export default UseLayoutEffectHook
