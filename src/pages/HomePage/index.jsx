import imgPage from "../../assets/img/imgPage.svg";
import "./styles.css";

function HomePage({setEntry}) {
  return (

    <div className="App">
      <header className="App-header">
        <div className="container">
          <section className="homeinfo">
            <h1><span className="colorPrimary">Nu</span> Kenzie</h1>
            <p>Centralize o controle das suas finanças</p>
            <p>de forma rápida e segura</p>
            <button onClick={() => setEntry(true)}>iniciar</button>
          </section>
          <section>
            <img src={imgPage} alt="home" />
          </section>
        </div>
      </header>
    </div>
   );
}
export default HomePage;