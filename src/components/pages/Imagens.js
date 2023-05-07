import {useNavigate} from 'react-router-dom'

import imagem1 from '../../galeria/imagem1.jpg'
import imagem2 from '../../galeria/imagem2.jpg'
import imagem3 from '../../galeria/imagem3.jpg'
import imagem4 from '../../galeria/imagem4.jpg'

import { useState , useEffect} from 'react'

function Imagens(props){

    const navigate = useNavigate()
    const[imagem,setImagem] = useState()
    const[galeria,setGaleria] = useState()
    
    let imagens = {
        imagem1,
         imagem2,
         imagem3,
         imagem4,
    }

    useEffect(()=>{
        fetch("http://localhost:5000/imagens",{method:"GET",headers:{"Content-Type":"application/json"}})
        .then((resp)=>resp.json())
        .then((data)=>{setImagem(data)})
        .catch((err)=>console.log(err))
    },[])


    function createPost(imagens) {
        fetch("http://localhost:5000/imagens",{method:"POST",headers:{"Content-Type":"application/json"},
        body: JSON.stringify(imagens)})
        .then((resp)=>resp.json())
        .then((data)=>{console.log })
        .catch((err)=>console.log(err))
    }

    function trocarImagem(num){
        if (num == 1){
            setImagem("imagem1")
        } else if(num == 2){
            setImagem("imagem2")
        } else if(num == 3){
            setImagem("imagem3")
        } else if(num == 4){
            setImagem("imagem4")
        }
    }

    const submit = (e) => {
        e.preventDefault()
        createPost(galeria)
    }

    return(
        <div>
            <h1>{props.name}</h1>
            <p>Galeria de Imagens</p>
            <form onSubmit={submit}>
                <input type="number" placeholder="Insira o número da imagem:" handleOnChange={createPost}/>
                <button type="submit">inserir</button>
                <button type="submit">excluir</button>
            </form>
            {galeria.map((galeria)=>(
                        <img src={imagens[galeria.src]} key={galeria.id} style={{width:'20em'}} alt="imagens"/>
            ))}
            <img src={imagens[imagem]} style={{width:'20em'}} alt="imagens"/>
        </div>
    )
}

export default Imagens