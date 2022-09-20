import React, { useRef } from 'react'
import UseImperativeHookButton from './UseImperativeHookButton'

const UseImperativeHandle = () => {
    const refBtn=useRef(null)
  return (
    <div>
        <button>button from parent</button>
        <UseImperativeHookButton refBtn/>
      
    </div>
  )
}

export default UseImperativeHandle
