//yarn add axios
import React ,{useEffect,useState} from 'react'
import axios from "axios"

const UseEffectHooks = () => {
    const [data,setData]=useState("")

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
    </div>
  )
}

export default UseEffectHooks
