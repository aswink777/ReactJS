import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Effect() {
    const [count,setcount]=useState(0)
    useEffect(() => {
     
      alert(`it is ${count}time increment`)
    }, [count])
    
  return (
    <div>
        <h1>{count}</h1>
        <Button onClick={()=>setcount(count+1)}>Increment</Button>
    </div>
  )
}

export default Effect