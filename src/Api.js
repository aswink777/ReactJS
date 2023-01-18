import React, { useState } from 'react'
import axios from 'axios'

function Api() {
    axios.get("https://dummyjson.com/products").then((arg)=>{
        console.log(arg.data.products)
        setfirst(arg.data.products)
    })
    const [first, setfirst] = useState([])
  return (
    first.map((asw)=>
    <div>{asw.title}</div>
    )
  )
}

export default Api