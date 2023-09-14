import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "../Card/style.css"
import 'bootstrap/dist/css/bootstrap.css';

function Card(){
    // na variavel de estado, assim que a requisção for bem sucessedidad recebremos um json
    const [financas, setFinancas] = useState([])
    const [loading,setLoading] = useState(false)

    // antes de carregar a pagina recebemos as informações como uma array
    useEffect(() =>{
        async function Requisicao(){
            const result = await api.get()
            if( result != 0){
                setFinancas(result.data.results);
            } else{
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </div>
            }
            
            
        }

        
       
        Requisicao()
    }, [])


    return(
    
        <div className="box-card" id="Card">
           <h1>Consulte</h1>
            {financas.map((item) =>(
                <div className="card">
                    
                    <img src={item.logourl} className="card-img-top"></img>
                
                    
                    <div  className="card-body">
                        <h5 className="card-title">{item.symbol }</h5>
                        <p className="card-text">{item.longName}</p>
                        
                    </div>
                    
                   <ul className="list-group list-group-flush lista">
                        <li className="list-group-item"> Cotação Atual: R${item.regularMarketPrice}</li>
                        <li className="list-group-item"> Valorização no dia: {item.regularMarketChangePercent.toFixed(2)}%</li>
                        <li className="list-group-item"> Valorização nos ultimos 200 dias: {item.twoHundredDayAverageChangePercent.toFixed(2)}%</li>
                        
                   </ul>

                </div>
            )
           
            )}
            
       </div>
    )


}

export default Card;