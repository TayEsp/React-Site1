import imagem1 from '../../galeria/imagem1.jpg'
import imagem2 from '../../galeria/imagem2.jpg'
import imagem3 from '../../galeria/imagem3.jpg'
import imagem4 from '../../galeria/imagem4.jpg'

import { useState } from 'react'

function Imagens(props){

    const[imagem,setImagem] = useState([])
    const[galeria,setGaleria] = useState([])
    var id = 0;
    
    let imagens = {
        imagem1,
         imagem2,
         imagem3,
         imagem4,
    }

    function trocarImagem(num){
        if (num == 1){
            return("imagem1")
        } else if(num == 2){
            return("imagem2")
        } else if(num == 3){
            return("imagem3")
        } else if(num == 4){
            return("imagem4")
        }
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
        setImagem({name: (trocarImagem(e.target.value))}, {id: (id=id+1)})
    }

    return(
        <div>
            <h1>{props.name}</h1>
            {console.log(galeria)}
            <p>Galeria de Imagens</p>
            <form >
                <input type="text" placeholder="Insira o número da imagem:" onChange={handleChange} />
                <button onClick={submit}>inserir</button>  
                <button onClick={remove}>excluir</button>
            </form>
            {galeria.map((imagem)=>(
                        <img src={imagens[imagem.name]} key = {imagem.id} style={{width:'20em'}} alt="imagens"/>
            ))}
        </div>
    )
}

export default Imagens