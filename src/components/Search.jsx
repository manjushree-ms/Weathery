import React, { useState } from 'react';
import '../App.css';

function Search({ handlesearch }) {
  const [searchloc, setsloc] = useState("");

  function searchinp(event) {
    setsloc(event.target.value);
  }
  function handleclick()
  {handlesearch(searchloc);
    setsloc("")
  }

  return (
    <div className='searchbar'>
      <button onClick={() => handleclick()
      }>
        <i className="bi bi-search"></i>
      </button>
      <input
        type='text'
        placeholder='Search location'
        value={searchloc}
        onChange={searchinp}
      />
    </div>
  );
}

export default Search;
