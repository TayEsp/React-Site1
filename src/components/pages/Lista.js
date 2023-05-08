import { useState } from 'react'

function Lista(props){

    const [frutas, setFrutas] = useState(["maça", "banana", "uva", "goiaba", "morango"])
    const [fruta, setFruta] = useState()

    function mostrarFruta(){
        alert(`A fruta selecionada foi ${fruta}`)
    }
    
    function handleChange(e){
        setFruta(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        setFrutas([...frutas, fruta])
    }

    return(
        <div>
            <h1>{props.name}</h1>
            
            <forms>
                <select name="frutas" onChange={(e)=>setFruta(e.target.value)}>
                    <option>Selecione uma fruta:</option>
                    {frutas.map((frutas)=>(
                        <option value={frutas} key={frutas.index}>{frutas}</option>
                    ))}
                </select>
                
                <button type="submit" onClick={mostrarFruta}>Aperte para ver a fruta escolhida</button>

                <input type="text" placeholder="Digite uma nova fruta:" onChange={handleChange}/>
                <button type="submit" onClick={submit}>inserir</button>
            </forms>
        </div>
    )
}

export default Lista