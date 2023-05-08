import golf from '../../images/golf.jpg'
import gol from '../../images/gol.jpg'
import impala from '../../images/impala.jpg'
import kombi from '../../images/kombi.jpg'

import { useState } from 'react'

function FormsAutomovel(props){

    const [automovel, setAutomovel] = useState([])

    let imagens = {
        golf,
        gol,
        impala,
        kombi,
    }

    function trocarModelo(tipo){
        if (tipo == "golf"){
            return("jeta")
        } else if(tipo == "gol"){
            return("fucks")
        } else if(tipo == "impala"){
            return("honda")
        } else if(tipo == "kombi"){
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
        <div>
            <form>
                <input type="text" placeholder="Insira o nome do automovél:" onChange={handleChange}/>
                <button onClick={submit}>inserir</button>  
                <button onClick={remove}>excluir</button>
            </form>
            {(props.tipoAutomovel.length > 0) && <p>Isto é um {props.tipoAutomovel[props.index][0]}</p>}
            {(props.tipoAutomovel.length > 0) &&<img src={imagens[props.tipoAutomovel[props.index][0]]} key = {props.index} onClick={mostrarAutomovel} style={{width:'20em'}} alt="imagens"/>}
            <button onClick={imagemAnterior}>anterior</button>
            <button onClick={imagemPosterior}>proximo</button>
        </div>
    )
}

export default FormsAutomovel