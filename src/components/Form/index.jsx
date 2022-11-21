import { useState } from "react";
import "./style.css";

export function Form({listTransactions,setListTransactions,setFilterTransactions}) {
  const [descripition, setDescripition] = useState("");
  const [coin, setCoin] = useState(1);
  const [typeValue, setTypeValue] = useState("entrada");

   function sendValue(event){
    event.preventDefault()
    let indexof = 0
    listTransactions.forEach(ele=> ele.index >= indexof ? indexof =  ele.index  + 1 : ele)
    const item ={ 
      index:indexof,
      description:descripition ,
      value:coin * 1 ,
      type : typeValue
    }
    const newTrasitions= [...listTransactions,item]
    setListTransactions(newTrasitions);
    setFilterTransactions(newTrasitions)
    setDescripition("")
    setCoin(1)
    setTypeValue("entrada")
   }

  return (
    <form onSubmit={(event)=>sendValue(event)}>
      <label className="headline" htmlFor="descripition">Descrição</label>
      <input className="textareas" type="text" id="descripition" required value={descripition} placeholder="Digite aqui sua descrição" onChange={(event)=>{setDescripition(event.target.value)}}/>
      <div className="containerValues">
        <div>
          <label className="headline" htmlFor="descripition">Valor</label>
          <input className="textareas" type="number" id="descripition" required value={coin} onChange={(event)=>{setCoin(event.target.value)}}/>
        </div>
        <div>
          <label className="headline" htmlFor="typeValue">Tipo de valor</label>
          <select className="textareas" name="" id="typeValue"onChange={(event)=>{setTypeValue(event.target.value)}}>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button className="buttonText" type="submit">Inserir valor</button>
    </form>
  );
}
