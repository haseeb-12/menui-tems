import React from 'react'
import SecondPage from './SecondPage'
function Tours({ data,removeData }) {
    return (
        <section>
            <div className='title'>
                <h2>Ours tour</h2>
                <div className='underline'></div>
            </div>
            <div>
                {
                    data.map((value) => {
                        return <SecondPage id={value.id} value={value} removeData={removeData} />
                    })
                }
            </div>
        </section>
    )
}

export default Tours