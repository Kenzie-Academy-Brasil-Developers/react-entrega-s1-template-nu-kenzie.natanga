import { useState } from "react";

export function Form({listTransactions,setListTransactions,setFilterTransactions}) {
  const [descripition, setDescripition] = useState("");
  const [coin, setCoin] = useState();
  const [typeValue, setTypeValue] = useState("entrada");

   function sendValue(event){
    event.preventDefault()
    
    const item ={ 
      index:listTransactions.map(ele=> ele.index > )
      description:descripition ,
      value:coin ,
      type : typeValue
    }
    const newTrasitions= [...listTransactions,item]
    setListTransactions(newTrasitions);
    setFilterTransactions(newTrasitions)
    setDescripition("")
    setCoin()
    setTypeValue("entrada")
   }

  return (
    <form onSubmit={(event)=>sendValue(event)}>
      <label htmlFor="descripition">Descrição</label>
      <input type="text" id="descripition" required value={descripition} placeholder="Digite aqui sua descrição" onChange={(event)=>{setDescripition(event.target.value)}}/>
      <label htmlFor="descripition">Valor</label>
      <input type="number" id="descripition" required value={coin} onChange={(event)=>{setCoin(event.target.value)}}/>
      <label htmlFor="typeValue">Tipo de valor</label>
      <select name="" id="typeValue"onChange={(event)=>{setTypeValue(event.target.value)}}>
        <option value="entrada">Entrada</option>
        <option value="saída">Saída</option>
      </select>
      <button type="submit">Inserir valor</button>
    </form>
  );
}
