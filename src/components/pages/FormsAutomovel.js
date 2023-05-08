import automovel1 from '../../images/golf.jpg'
import automovel2 from '../../images/gol.jpg'
import automovel3 from '../../images/impala.jpg'
import automovel4 from '../../images/kombi.jpg'

import { useState } from 'react'

import styles from './FormsAutomoveis.module.css'

function FormsAutomovel(props){

    const [automovel, setAutomovel] = useState([])

    //a lista de imagens importadas fica aqui
    let imagens = {
        automovel1,
        automovel2,
        automovel3,
        automovel4,
    }

    function trocarModelo(tipo){
        if (tipo === "automovel1"){
            return("jeta")
        } else if(tipo === "automovel2"){
            return("fucs")
        } else if(tipo === "automovel3"){
            return("honda")
        } else if(tipo === "automovel4"){
            return("toyota")
        }
    }

    const submit = (e) => {
        e.preventDefault()
        props.setTipoAutomovel([...props.tipoAutomovel, automovel])
    }

    const remove = (e) => {
        e.preventDefault()
        props.setTipoAutomovel(props.tipoAutomovel.filter((aut)=> automovel[0] !== aut[0]))
    }

    function handleChange(e){
        setAutomovel([ (e.target.value), (trocarModelo(e.target.value))])
    }

    function imagemAnterior() {
        if(props.index > 0){
            props.setIndex(props.index - 1)
        }
    }

    function imagemPosterior() {
        if(props.index < (props.tipoAutomovel.length)-1){
            props.setIndex(props.index + 1)
        }
    }

    function mostrarAutomovel(){
        alert(`Este ${props.tipoAutomovel[props.index][0]} é um ${props.tipoAutomovel[props.index][1]}`)
    }

    return(
        <div className={styles.Forms}>
             {(props.tipoAutomovel.length > 0) && <p className={styles.elements}>Isto é um {props.tipoAutomovel[props.index][0]}</p>}

            <form>
                Insira o nome do automovel: <input type="text" placeholder="Insira o nome do automovél:" onChange={handleChange}/>
                <li className={styles.li}><button onClick={submit}>inserir</button>  
                <button onClick={remove}>excluir</button></li>
            </form>
            <div>
            {(props.tipoAutomovel.length > 0) && <img className={styles.img} src={imagens[props.tipoAutomovel[props.index][0]]} key = {props.index} onClick={mostrarAutomovel} alt="imagens"/>}

            <li button className={styles.buton}><button className={styles.elements} onClick={imagemAnterior}>anterior</button>
            <button className={styles.elements} onClick={imagemPosterior}>proximo</button></li>
            </div>
        </div>
    )
}

export default FormsAutomovel