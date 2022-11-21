import {BsTrash} from 'react-icons/bs'
export function Card({ listTransactions , filterTransactions ,setListTransactions,setFilterTransactions, transaction }) {

   function removeTrasition(indexof){
    console.log(listTransactions);
  const newListTransactions =  listTransactions.filter(transition => transition.index !== indexof )
  const newfilter =  filterTransactions.filter(transition=> transition.index !== indexof )
  setListTransactions(newListTransactions)
  setFilterTransactions(newfilter)
  console.log(newListTransactions);
}
  return (
    <li>
      <div>
        <h2>{transaction.description}</h2>
        <p>{transaction.value}</p>
        <button onClick={()=>{removeTrasition(transaction.index)}}><BsTrash/></button>
      </div>
      <p>{transaction.type}</p>
    </li>
  );
}

