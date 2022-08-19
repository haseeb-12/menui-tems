import React, { useState } from 'react'

function SecondPage({ value, removeData }) {

  const [readMore, setReadMore] = useState(false)
  return (

    <article className='single-tour'>
      <img src={value.image} alt="" />
      <footer>
        <div className='tour-info'>
          <h4>{value.name}</h4>
          <h4 className='tour-price'>${value.price}</h4>
        </div>
        <p>
          {readMore ? value.info : `${value.info.substring(0, 200)}.....`}
        </p>
        <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>

        <button className='delete-btn' onClick={() => removeData(value.id)}>not interested</button>
      </footer>
    </article>

  )  
}

export default SecondPage