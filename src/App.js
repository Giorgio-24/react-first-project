//^ LA MIA PAGINA PRINCIPALE

//? I FILE SI IMPORTANO COSI, COME SU VUE.JS
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <Navbar />
  );
}

//^UNA VOLTA DEFINITO CON LA FUNZIONE SOVRASTANTE, IL FILE VA ESPORTATO COSI
export default App;
