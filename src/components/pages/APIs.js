import { useEffect, useState } from 'react'

function APIs(props){
    const [starwarsList, setStarwarsList] = useState([])

    useEffect(()=>{
        fetch("https://swapi.dev/api/people",{method:"GET",headers:{"Content-Type":"application/json"}})
        .then((resp)=>resp.json())
        .then((data)=>{setStarwarsList(data.results)})
        .catch((err)=>console.log(err))
    },[])

    return(
        <div>
            <h1>{props.name}</h1>
            <h2>Personagens do StarWars</h2>
                    {(starwarsList.length > 0) && starwarsList.map((starwarsList)=>(
                        <ul>
                            <li>name: {starwarsList.name}, altura: {starwarsList.height}</li>
                        </ul>
                    ))}
        </div>
    )
}

export default APIs