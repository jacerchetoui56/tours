import React, { useState } from 'react'

export default function Tour({ name, id, handleDelete, image, info, price }) {
    const [readMore, setReadMore] = useState(true)

    return (
        <div className='tour'>
            <img className='tour-image' src={image} alt={name} />
            <div className='tour-title'>
                <h4 className='tour-name'>
                    {name}
                </h4>
                <h4 className='tour-price'>
                    ${price}
                </h4>
            </div>
            <p className="tour-info">
                {readMore ?
                    info.substring(0, 200) + '...' :
                    info
                }
                <button onClick={() => setReadMore(!readMore)} className=' readmore'>{readMore ? ' show more' : 'show less'}</button>
            </p>
            <div className='delete-btn'>
                <button onClick={handleDelete} >Not interested</button>
            </div>
        </div>
    )
}
