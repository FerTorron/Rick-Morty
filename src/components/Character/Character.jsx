import './Character.css'

const Character = ({ id, name, image, origin, status, gender }) => {
    return (
        <li className='characterLi'>
            <div className='characterImg'>
                <img src={image} alt={name} />
                <span className='idValue'>{id}</span>
                <span className={`statusValue ${status === 'Dead' ? 'statusValueDead' : ''}`}>{status}</span>
            </div>
            <h3>{name}</h3>
            <p>Gender: {gender}</p>
            <p>Location: {origin.name === "unknown" ? "Unknown" : origin.name}</p>
        </li>
    )
}

export default Character