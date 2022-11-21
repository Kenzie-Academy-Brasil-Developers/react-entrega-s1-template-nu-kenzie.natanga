import "./style.css";

export function ValueComplete({ listTransactions }) {
  const values = listTransactions.map((element) => element.type === "saída" ? element.value *-1 :  element.value);
  const value = values.reduce((accumulator, currentValue) => accumulator + currentValue,0);
  return (
    <article className="article">
      <div className="valuesAll">
        <p className="title4">Valor total:</p>
        <p className="colorPrimary title4">${value}</p>
      </div>
      <p className="headline">O valor se refere ao saldo</p>
    </article>
  );
}
