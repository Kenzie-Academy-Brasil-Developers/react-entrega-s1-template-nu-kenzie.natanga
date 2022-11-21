import "./style.css";

export function Navegation({ listTransactions ,setFilterTransactions }) {

  function filtertransition(value){
    const transition= listTransactions.filter(element=> element.type === value)
    value? setFilterTransactions(transition) :setFilterTransactions(listTransactions)
  }
  return (
    <nav className="containerNav">
      <button className="buttonSecond" onClick={()=>{filtertransition(false)}}>Todos</button>
      <button className="buttonSecond" onClick={()=>{filtertransition("entrada")}}>Entrada</button>
      <button className="buttonSecond" onClick={()=>{filtertransition("saída")}}>Saida</button>
    </nav>
  );
}
