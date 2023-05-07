import { useEffect, useState } from 'react'

function Lista(props){

    const [frutas, setFrutas] = useState([])
    const [fruta, setFruta] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/frutas",{method:"GET",headers:{"Content-Type":"application/json"}})
        .then((resp)=>resp.json())
        .then((data)=>{setFrutas(data)})
        .catch((err)=>console.log(err))
    },[])

    function mostrarFruta(){
        alert(`A fruta selecionada foi ${fruta}`)
    }
    
    return(
        <div>
            <h1>{props.name}</h1>
            <forms>
                <select name="frutas" onChange={(e)=>setFruta(e.target.value)}>
                    <option>Selecione uma fruta:</option>
                    {frutas.map((frutas)=>(
                        <option value={frutas.name} key={frutas.id}>{frutas.name}</option>
                    ))}
                </select>
                <button type="submit" onClick={mostrarFruta}>Aperte para ver a fruta escolhida</button>
                <input type="text" placeholder="Digite uma nova fruta:" />
                <button type="submit">inserir</button>
            </forms>
        </div>
    )
}

export default Lista