import React from 'react'

const Search = ({ value, changeInput }) => {
    
  return (
    <div className='search-main'>
        <input type="text" placeholder="Search" value={value} onChange={changeInput} />
      </div>
  )
}

export default Search


