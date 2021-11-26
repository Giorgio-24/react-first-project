//^ LA MIA PAGINA PRINCIPALE

//? IMPORTO LA CLASSE COMPONENT PERCHE' LA UTILIZZO NEL COMPONENTE APP
import React, { Component } from 'react';

//? I FILE SI IMPORTANO COSI, COME SU VUE.JS
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

//^ SE DEVO MOSTRARE VALORI DINAMICAMENTE E PASSARE DEI DATI FRA COMPONENTI
//^ UTILIZZO IL CLASS COMPONENT 
class App extends Component {
  //^ FUNZIONE DI RENDER PER I CLASS COMPONENT
  render() {
    return (
      <>
        {/* //^SE VOGLIO METTERE PIU TAGS ACCANTO DEVO RACCHIUDERLI NEL FRAGMENT JSX ( <> </> )*/}
        < Navbar />
        <div className="container mt-5">
          <div className="row">
            <Card />

          </div>
        </div>
      </>
    );
  }
}

//^UNA VOLTA DEFINITO CON LA FUNZIONE SOVRASTANTE, IL FILE VA ESPORTATO COSI
export default App;
