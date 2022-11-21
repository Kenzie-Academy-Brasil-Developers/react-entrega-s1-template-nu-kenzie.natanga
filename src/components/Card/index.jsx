import "./style.css";
import {BsTrash} from 'react-icons/bs'
export function Card({ listTransactions , filterTransactions ,setListTransactions,setFilterTransactions, transaction }) {

  function removeTrasition(indexof){
    const newListTransactions =  listTransactions.filter(transition => transition.index !== indexof )
    const newfilter =  filterTransactions.filter(transition=> transition.index !== indexof )
    setListTransactions(newListTransactions)
    setFilterTransactions(newfilter)
  }
  return (
    <li>
      <div className="containerDiv">
        <div>
          <h2 className="title3">{transaction.description}</h2>
          <p className="body">{transaction.type}</p>
        </div>
          <p className="body colorPrimary">R$ {transaction.value}</p>
          <button className="buttonTree" onClick={()=>{removeTrasition(transaction.index)}}><BsTrash/></button>
      </div>
    </li>
  );
}

