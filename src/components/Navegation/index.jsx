

export function Navegation({ listTransactions ,setFilterTransactions }) {

  function filtertransition(value){
    const transition= listTransactions.filter(element=> element.type === value)
    value? setFilterTransactions(transition) :setFilterTransactions(listTransactions)

  }
  return (
    <nav>
      <button onClick={()=>{filtertransition(false)}}>Todos</button>
      <button onClick={()=>{filtertransition("entrada")}}>Entrada</button>
      <button onClick={()=>{filtertransition("saída")}}>Saida</button>
    </nav>
  );
}
