import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="password" placeholder="Contraseña" />
          <button>Enviar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
