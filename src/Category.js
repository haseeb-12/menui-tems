import React from 'react'

function Category({filterItem}) {
  return (
   < div className='btn-container'>
    <button className='filter-btn' onClick={()=>filterItem('all')}>All</button>
    <button className='filter-btn' onClick={()=>filterItem('breakfast')}>breakfast</button>
    <button className='filter-btn' onClick={()=>filterItem('shakes')}>Shakes</button>
    <button className='filter-btn' onClick={()=>filterItem('lunch')}>Lunch</button>
   </div>
  )
}

export default Category