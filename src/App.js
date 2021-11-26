//^ LA MIA PAGINA PRINCIPALE

//? I FILE SI IMPORTANO COSI, COME SU VUE.JS
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  return (
    <>
      {/* //^SE VOGLIO METTERE PIU TAGS ACCANTO DEVO RACCHIUDERLI NEL FRAGMENT JSX ( <> </> )*/}
      <Navbar />
      <div className="row">
        <Card />
      </div>
    </>
  );
}

//^UNA VOLTA DEFINITO CON LA FUNZIONE SOVRASTANTE, IL FILE VA ESPORTATO COSI
export default App;
