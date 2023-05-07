import styles from './Home.module.css'

function Home(props){
    return(
        <section>
            <h1>{props.name}</h1>
            <div>
                <h3>Bem vindo! esta é a {props.name} do site do Trabalho 1</h3>
                <p>Trabalho feito para desenvolvimento front-end</p>
            </div>
        </section>
    )
}

export default Home