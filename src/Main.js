import React, { useState, useEffect } from 'react'
import Tour from './Tour'
import Loading from './Loading'

export default function Main() {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const response = await fetch(process.env.REACT_APP_API_KEY)
        const data = await response.json()
        setTours(data)
    }

    useEffect(() => {
        try {
            fetchData()
            setLoading(false)
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
    return <>
        {loading ?
            <Loading /> :
            <main className='main'>
                {
                    tours.map(tour => {
                        return <Tour handleDelete={() => deleteTour(tour.id)} key={tour.id} {...tour} />
                    })
                }
            </main>
        }
    </>

}
