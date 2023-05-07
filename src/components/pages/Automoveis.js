import FormsAutomovel from "./FormsAutomovel"

function Automoveis(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <FormsAutomovel/>
        </div>
    )
}

export default Automoveis