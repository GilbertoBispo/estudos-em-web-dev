import { useEffect, useState } from "react";

function App() {
  
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetch("/api/pessoas")
    // arrow functions com chaves "{}" necessitam do "return"
      .then((res) => { return res.json() })
      .then((dados) => { return setPessoas(dados) })
      .catch((err) => { return console.log(err) });
    }, [])
    
    //console.log(pessoas);

  return (
    <>
      <h1>Olá, mundo</h1>
      <ul style={{ padding: "10px" ,width: "250px", height: "fit-content", backgroundColor: "lightgrey", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center"}}>
        {
          pessoas.map((pessoa) => {
            return (
              <li style={{display: "flex", width: "100%", justifyContent: "space-between"}} key={pessoa.id}>
                <span style={{width: "fit-content"}}><strong>Nome:</strong> {pessoa.nome}</span>
                <span style={{width: "fit-content"}}><strong>Idade:</strong> {pessoa.idade}</span>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
