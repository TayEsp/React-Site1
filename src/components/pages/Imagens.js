import imagem1 from '../../galeria/imagem1.jpg'
import imagem2 from '../../galeria/imagem2.jpg'
import imagem3 from '../../galeria/imagem3.jpg'
import imagem4 from '../../galeria/imagem4.jpg'

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
        <div>
            <h1>{props.name}</h1>
            <p>Galeria de Imagens</p>
            <form >
                <input type="text" placeholder="Insira o número da imagem:" onChange={handleChange} />
                <button onClick={submit}>inserir</button>  
                <button onClick={remove}>excluir</button>
            </form>
            {galeria.map((imagem)=>(
                        <img src={imagens[imagem.name]} key = {galeria.index} style={{width:'20em'}} alt="imagens"/>
            ))}
        </div>
    )
}

export default Imagens