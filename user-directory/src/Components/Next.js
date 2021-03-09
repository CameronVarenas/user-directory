import React from 'react'

function Next(props) {
    let next = 'Next >'

    return (
        <div>
            <h1 className='btns' onClick={props.nextCard}>{next}</h1>
        </div>
    )
}

export default Next