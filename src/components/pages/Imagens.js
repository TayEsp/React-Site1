import {useNavigate} from 'react-router-dom'

import imagem1 from '../../galeria/imagem1.jpg'
import imagem2 from '../../galeria/imagem2.jpg'
import imagem3 from '../../galeria/imagem3.jpg'
import imagem4 from '../../galeria/imagem4.jpg'

import { useEffect, useState } from 'react'

function Imagens(props){

    const navigate = useNavigate()
    const[imagem,setImagem] = useState([])
    const[galeria,setGaleria] = useState([])
    var id = 0;
    
    let imagens = {
        imagem1,
         imagem2,
         imagem3,
         imagem4,
    }

    useEffect(()=>{
        fetch("http://localhost:5000/galeria",{method:"GET",headers:{"Content-Type":"application/json"}})
        .then((resp)=>resp.json())
        .then((data)=>{setImagem(data)
            console.log(data)})
        .catch((err)=>console.log(err))
    },[])

    function createPost(galeria) {
        fetch("http://localhost:5000/galeria",{method:"POST",headers:{"Content-Type":"application/json"},
        body: JSON.stringify(galeria)})
        .then((resp)=>resp.json())
        .then((data)=>{console.log(data)
            document.location.reload(false)})
        .catch((err)=>console.log(err))
    }

    function removeProject(id){

        fetch(`http://localhost:5000/galeria/${trocarImagem(id)}`,{method:'DELETE',headers:{"Content-Type":"application/json"}})
        .then(resp => resp.json())
        .then(data => {setGaleria(galeria.filter((galeria)=> galeria.name !== trocarImagem(id)))
            document.location.reload(false)})
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
        createPost(galeria)
    }

    const remove = (e) => {
        e.preventDefault()
        removeProject(id)
    }

    function handleChange(e){
        setGaleria({...galeria, name: (trocarImagem(e.target.value))}, {[e.target.key]: (id=id+1)})
    }

    return(
        <div>
            <h1>{props.name}</h1>
            <p>Galeria de Imagens</p>
            <form onSubmit={submit}>
                <input type="text" placeholder="Insira o número da imagem:" onChange={handleChange} />
                <button type="submit">inserir</button>  
                <button type="submit" onClick={remove}>excluir</button>
            </form>
            {imagem.map((imagem)=>(
                        <img src={imagens[imagem.name]} key = {imagem.key} style={{width:'20em'}} alt="imagens"/>
            ))}
        </div>
    )
}

export default Imagens