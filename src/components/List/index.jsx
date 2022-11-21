import "./style.css";
import { Card } from "../Card";

export function List({ listTransactions , filterTransactions ,setListTransactions,setFilterTransactions}) {
  return (
    <ul>
     {filterTransactions.map((transaction) =>
      <Card listTransactions={listTransactions}setListTransactions={setListTransactions}filterTransactions={filterTransactions}  setFilterTransactions={setFilterTransactions} transaction={transaction} key={transaction.index}/>)}
    </ul>
  );
}
