import { useState, useEffect } from 'react'
import './CharacterContainer.css'
import Character from '../Character/Character'

const CharacterContainer = () => {
    const [personajes, setPersonajes] = useState([])
    const [page, setPage] = useState(1)

    const upPage = () => {
        if (page < 42) {
            setPage(page + 1)
        }
    }
    const downPage = () => {
        if (page === 1) {
            return
        }
        setPage(page - 1)
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => res.json())
            .then(data => setPersonajes(data.results))
            .catch(error => console.log(error))
    }, [personajes])

    return (
        <div className='characterContainer'>
            <div className="paginationContainer">
                {page !== 1 ? <button onClick={downPage}>Previous</button> : null}
                <button onClick={upPage}>Next</button>
            </div>
            <ul>
                {
                    personajes.map(pj => (
                        <Character key={pj.id} {...pj} />
                    ))
                }
            </ul>
        </div>
    )
}

export default CharacterContainer