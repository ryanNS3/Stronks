import { useState, useEffect } from "react";
import api1 from "../../services/api";
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import 'bootstrap/dist/css/bootstrap.css'; 
import "./style.css"

function Grafico(){
    const [financas, setFinancas] = useState([])
    // let [data, setData] = useState([])

    // requisição da api antes do app rodar
    useEffect(() =>{
        async function Requisicao(){
            // promise
            const result = await api1.get()
            if( result != 0){
                setFinancas(result.data.results);
            } else{
                <h1>Carregando..</h1>
            }
        
        }
    //    chamando a função requisição
        Requisicao()
    }, [])
        // passando o nome de cada coluna 
        const labels = financas.map((item)=> item.symbol)

        const data = {
    
          labels: labels,
          datasets: [
            {
            // nome da tabela
              label: "Valorização do dia",
              backgroundColor: "rgb(78, 209, 126)",
              borderColor: "rgb(78, 209, 126)",
              // Passando os valores númericos via api para a comparação
              data: financas.map((item)=>  item.regularMarketChangePercent.toFixed(2)),
            },
          ],
        };
    
    return(
        // chamando o componente do grafico e passando o objeto data
        <section className="Box">
            <h1>Valorização diária</h1>
            <p>Principais empresas: {financas.map((item)=> item.shortName + ", ")}</p>
            <Bar data={data} className="grafico "/>
        </section>
    )
}

export default Grafico;