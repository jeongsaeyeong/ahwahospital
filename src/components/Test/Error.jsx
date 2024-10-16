import React from 'react'

const Error = ({ sorry, setPop }) => {
    return (
        <div className='Error_wrap'>
            <div className="popup">
                <p>{sorry}</p>
                <button onClick={() => { setPop(false) }}>죄송합니다.</button>
            </div>
        </div>
    )
}

export default Error