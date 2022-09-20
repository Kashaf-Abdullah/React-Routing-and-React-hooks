import React,{useRef, useState} from 'react'

const UseRefHook = () => {
    //in js  we use document.getElementById
    const inputRef=useRef(null)
    const [name,setName]=useState("")

    const onClick=()=>{
        console.log(inputRef.current.value)
    setName(inputRef.current.value);
    inputRef.current.value=""
    }
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="..." ref={inputRef}></input>
     <button onClick={onClick}>change name</button>
    </div>
  )
}

export default UseRefHook
