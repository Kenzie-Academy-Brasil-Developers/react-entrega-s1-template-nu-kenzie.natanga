export function ValueComplete({ listTransactions }) {
  const values = listTransactions.map((element) => element.type === "saída" ? element.value *-1 :  element.value);
  const value = values.reduce((accumulator, currentValue) => accumulator + currentValue,0);
  return (
    <article>
      <div>
        <p>Valor total:</p>
        <p>{value}</p>
      </div>
      <p>O valor se refere ao saldo</p>
    </article>
  );
}
