import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import APIs from './pages/APIs';
import Lista from './pages/Lista';
import Imagens from './pages/Imagens';
import Automoveis from './pages/Automoveis';

import Container from './layout/Container';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function Main() {

    return (
      <Router>
        <Navbar/>
        <Container customClass="min-height">
            <Routes>
                    <Route exact path="/" element={<Home name="Home"/>}/>

                    <Route  path="/imagens" element={<Imagens name="Imagens"/>}/>

                    <Route  path="/lista" element={<Lista name="Lista"/>}/>
        
                    <Route  path="/automoveis" element={<Automoveis name="Automovéis"/>}/>

                    <Route  path="/apis" element={<APIs name="API's"/>}/>
            </Routes>
        </Container>
        <Footer/>
      </Router>   
    )
  }
  
  export default Main;