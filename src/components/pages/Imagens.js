import imagem1 from '../../galeria/imagem1.jpg'
import imagem2 from '../../galeria/imagem2.jpg'
import imagem3 from '../../galeria/imagem3.jpg'
import imagem4 from '../../galeria/imagem4.jpg'

import style from './Imagens.module.css'

import { useState } from 'react'

function Imagens(props){

    const[imagem,setImagem] = useState([])
    const[galeria,setGaleria] = useState([])
    
    //a lista de imagens importadas fica aqui
    let imagens = {
        imagem1,
         imagem2,
         imagem3,
         imagem4,
    }

    function trocarImagem(num){
        const img = ("imagem" + num)
        return (img)
    }

    const submit = (e) => {
        e.preventDefault()
        setGaleria([...galeria, imagem])
    }

    const remove = (e) => {
        e.preventDefault()
        setGaleria(galeria.filter((img)=> imagem.name !== img.name))
    }

    function handleChange(e){
        setImagem({name: (trocarImagem(e.target.value))})
    }

    return(
        <div className={style.Imagens}>
            <h1 className={style.elements}>{props.name}</h1>
            <p className={style.elements}>Galeria de Imagens</p>
            <form className={style.elements}>
                <input type="text" placeholder="Insira o número da imagem:" onChange={handleChange} />
                <li className={style.li}><button onClick={submit}>inserir</button>
                    <button onClick={remove}>excluir</button></li>
            </form>
            {galeria.map((imagem)=>(
                        <img src={imagens[imagem.name]} key = {galeria.index} style={{width:'20em'}} alt=""/>
            ))}
        </div>
    )
}

export default Imagens