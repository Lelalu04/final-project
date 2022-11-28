import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [text, setText] = useState("null")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
            navigate('/SearchPage',{state:{text:text}});
    }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={(e) => setText(e.target.value)}></input>
        <input type="submit" value="Search"></input>
    </form>
  )
}

export default Search