import "./style.css";
import nuKenzie from "../../assets/img/nuKenzie.svg";
import { Form } from "../../components/Form";
import { ValueComplete } from "../../components/ValueComplete";
import { List } from "../../components/List";
import { Navegation } from "../../components/Navegation";
import { useState } from "react";


export function PageCalcule({ setEntry }) {
  const [listTransactions, setListTransactions] = useState([
    {index:1, description: "Salário recebido", type: "entrada", value: 2500 },
    {index:2, description: "Conta de luz", type: "saída", value: 150 },
  ]);
  const [filterTransactions, setFilterTransactions] = useState(listTransactions);
  return (
    <>
      <header>
        <div className="header container">
          <img src={nuKenzie} alt="logo" />
          <button onClick={() => { setEntry(false); }} > Home </button>
        </div>
      </header>
      <main className="container">
        <aside>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} setFilterTransactions={setFilterTransactions} />
          <ValueComplete listTransactions={listTransactions} />
        </aside>
        <section>
          <Navegation listTransactions={listTransactions} setFilterTransactions={setFilterTransactions} />
          <List listTransactions={listTransactions} filterTransactions={filterTransactions} setListTransactions={setListTransactions} setFilterTransactions={setFilterTransactions}/>
        </section>
      </main>
    </>
  );
}
