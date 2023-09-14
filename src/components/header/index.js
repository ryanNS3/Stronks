import './header.css';
import logo from './img/logo.png';
import sucesso from './img/sucesso.svg'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <div className="logo">
                <img src={logo} alt='Logo'></img>
                <p>STOnKS</p>
            </div>

            <div className='confira'>
                <section>
                    <p>Confira as principais <strong className='text-success'>ações</strong> da bolsa de valores</p>
                </section>
                <img src={sucesso} alt='Sucesso'></img>
            </div>
        </div>
        

        
    );
}

export default Header;