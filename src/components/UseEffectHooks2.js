//yarn add axios

//useEffect especially called in calling API because pages refresh so we useEffect for this
import React ,{useEffect,useState} from 'react'
import axios from "axios"

const UseEffectHooks2 = () => {
    const [data,setData]=useState("")
    const [count,setCount]=useState(0)

    useEffect(()=>{
        //whenever page page render so hello world will be called
      console.log('hello world');
      axios.get("https://jsonplaceholder.typicode.com/comments").
      then((response)=>{
// console.log(response.data)
setData(response.data[0].email)
console.log('API  Was called');

})
      
    },[]) 
    //before this API WAS CALLED PRINT 2 TIMES BUT using this[] now API WAS CALLED print 1 imes
  return (
    <div>
      <h1>HELLO WORLD</h1>
      
      <h4>{data}</h4>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default UseEffectHooks2
