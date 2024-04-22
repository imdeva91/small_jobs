import React from 'react'
import "./Search.css"

const SearchSection = () => {
  return (
    <div className='flex gap-10'>
        <div>
            <label className='block'>Job Title</label>
            <input type="text" placeholder='Enter job' />
        </div>
        <div>
            <label className='block'>Location/City</label>
            <input type="text" placeholder='Enter Location' />
        </div>
        
    </div>
  )
}

export default SearchSection;