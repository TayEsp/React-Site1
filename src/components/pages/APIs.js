import { useEffect, useState } from 'react'

import styles from './APIs.module.css'

function APIs(props){
    const [starwarsList, setStarwarsList] = useState([])

    useEffect(()=>{
        fetch("https://swapi.dev/api/people",{method:"GET",headers:{"Content-Type":"application/json"}})
        .then((resp)=>resp.json())
        .then((data)=>{setStarwarsList(data.results)})
        .catch((err)=>console.log(err))
    },[])

    return(
        <div className={styles.API}>
            <h1 className={styles.elements}>{props.name}</h1>
            <h2 className={styles.elements}>Personagens do StarWars</h2>
                    {(starwarsList.length > 0) && starwarsList.map((starwarsList)=>(
                        <ul>
                            <li className={styles.li}>name: {starwarsList.name} -- altura: {starwarsList.height}</li>
                        </ul>
                    ))}
        </div>
    )
}

export default APIs