import React, { useState, useEffect } from 'react'
import Tour from './Tour'
export default function Main() {
    const [tours, setTours] = useState([])

    useEffect(() => {
        try {
            async function fetchData() {
                const response = await fetch('https://course-api.com/react-tours-project')
                const data = await response.json()
                setTours(data)
            }
            fetchData()
        } catch (error) {
            console.log(error.message)
        }
    }, [])
    function deleteTour(id) {
        setTours(prev => {
            return ([
                ...prev.filter(tour => tour.id !== id)
            ])
        })
    }
    return (
        <main className='main'>
            {
                tours.map(tour => {
                    return <Tour handleDelete={() => deleteTour(tour.id)} key={tour.id} {...tour} />
                })
            }
        </main>
    )
}
