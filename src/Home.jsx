import React from 'react'
import {useDispatch} from'@reduxjs/toolkit'

const Home = (value) => {
const dispatch= useDispatch();
const value=20;


  return (
    <div>
<h1>{value}</h1>

      <button>increment</button>
<button>decrement</button>

    </div>
  )
}

export default Home
