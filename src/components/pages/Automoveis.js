import FormsAutomovel from "./FormsAutomovel"

import { useState } from 'react'

import styles from './Automoveis.module.css'

function Automoveis(props){
    
    const [tipoAutomovel, setTipoAutomovel] = useState([])
    const [index, setIndex] = useState(0)
    
    return(
        <div className={styles.Auto}>
            <h1>{props.name}</h1>

            {(tipoAutomovel.length > 0) && <p>É um {tipoAutomovel[index][0]}</p>}
            <FormsAutomovel tipoAutomovel={tipoAutomovel} setTipoAutomovel={setTipoAutomovel} index={index} setIndex={setIndex}/>
        </div>
    )
}

export default Automoveis