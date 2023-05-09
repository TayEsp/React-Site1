import { useState } from 'react'

import styles from './Lista.module.css'

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
        <div className={styles.Lista}>
            <h1 className={styles.elements}>{props.name}</h1>
            
            <forms >
                <li className={styles.li}><select name="frutas" onChange={(e)=>setFruta(e.target.value)}>
                    <option>Selecione uma fruta:</option>
                    {frutas.map((frutas)=>(
                        <option value={frutas} key={frutas.index}>{frutas}</option>
                    ))}
                </select></li>
                
                <li className={styles.li}><button type="submit" onClick={mostrarFruta}>Aperte para ver a fruta escolhida</button></li>

                <input type="text" placeholder="Digite uma nova fruta:" onChange={handleChange}/>
                <li className={styles.buton}><button type="submit" onClick={submit}>inserir</button></li>
            </forms>
        </div>
    )
}

export default Lista