import './sobre.css';
import grafico from './img/grafico.svg';

function Sobre(){
    return(
        <div className="sobre">
            <h1>Quem somos?</h1>

            <section>
                <img src={grafico} alt='Grafico'></img>
                <p>Somos uma corporação com o foco em divulgar dados de empresas listadas na bolsa de valores por meio de API.</p>
            </section>
            
        </div>
    );
}

export default Sobre;