import React, { useState } from 'react'

export default function Tour(props) {
    const [readMore, setReadMore] = useState(true)

    return (
        <div className='tour'>
            <img className='tour-image' src={props.image} alt={props.name} />
            <div className='tour-title'>
                <h4 className='tour-name'>
                    {props.name}
                </h4>
                <h4 className='tour-price'>
                    ${props.price}
                </h4>
            </div>
            <p className="tour-info">
                {readMore ?
                    props.info.substring(0, 200) + '...' :
                    props.info
                }
                <button onClick={() => setReadMore(!readMore)} className=' readmore'>{readMore ? ' show more' : 'show less'}</button>
            </p>
            <div className='delete-btn'>
                <button onClick={props.handleDelete} >Not interested</button>
            </div>
        </div>
    )
}
