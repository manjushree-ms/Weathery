import React, { useState } from 'react'

function Searchweather() {
    const [search,setsearch]=useState("")
  return (
    <div className='searchcard'>
        <input
        type='text'
        placeholder='search city'
        value={search}></input>
        <i class="bi bi-search"></i>

    </div>
  )
}

export default Searchweather