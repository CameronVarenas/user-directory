import React from 'react'

function Previous(props) {
    let previous = '< Previous'

    return (
        <div>
            <h1 className='btns' onClick={props.previousCard}>{previous}</h1>
        </div>
    )
}

export default Previous