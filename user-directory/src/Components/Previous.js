import React from 'react'

function Previous(props) {
    let previous = '< Previous'

    return (
        <div>
            <button onClick={props.previousCard}>{previous}</button>
        </div>
    )
}

export default Previous