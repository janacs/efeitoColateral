import { useEffect, useState } from "react"
//importar o useEffect


export default function App() {
  //o useEffect(()=> {})
    //recebe uma função
    // também pode receber um array de dependencias []
    //com apenas a função
    //com apenas a função e o array de dependências vazio []
    //será executado assim que o componente for montado
  useEffect(()=>{
    console.log("Entreguem o desafio da lâmpada e o da calculadora!")
  },[])

  //dependência específica
const [contador, setContador]= useState(0)
useEffect(() =>{ 
  console.log(`A contagem é: ${contador}`)
}, [contador])

//exibido, quer aparecer em todo momento
useEffect(()=>{
console.log("O amostradinho")
})

const[nome, setNome] = useState("batata")
  return(
    <main>
      <h1>useEffect</h1>
      <p>Gerenciador de efeitos colaterais</p>
      <h3>{contador}</h3>
      <button onClick={()=> setContador( contador +1) }>Incrementar</button>
      <p>{nome}</p>
      <button onClick={()=> setNome ("Pré-treino")}>Trocar nome</button>
    </main>
  )
}