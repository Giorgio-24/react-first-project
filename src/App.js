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
  //^ DICHIARO LA VARIABILE STATE COME ARRAY DI OGGETTI CHE SARANNO POI LE PROPS
  //^ CHE PASSERÒ IN MODO CICLICO NEI COMPONENTI
  state = {
    cards: [
      { id: 1, name: "Kiwi", price: 2.99, image: "https://www.longacres.co.uk/Images/Product/Default/xlarge/fresh-fruit-and-vegetables-kiwi-single.jpg", quantity: 0 },
      { id: 2, name: "Banana", price: 0.99, image: "https://image.shutterstock.com/image-photo/banana-isolated-260nw-366770894.jpg", quantity: 0 },
      { id: 3, name: "Apple", price: 0.99, image: "https://image1.masterfile.com/getImage/NjU5LTAzNTI3NzUxZW4uMDAwMDAwMDA=ABu8x2/659-03527751en_Masterfile.jpg", quantity: 0 },
      { id: 4, name: "Watermelon", price: 3.49, image: "https://img.etimg.com/thumb/msid-64446447,width-640,resizemode-4,imgsize-364438/densuke-watermelons.jpg", quantity: 0 },
      { id: 5, name: "Pineapple", price: 4.99, image: "https://www.kindpng.com/picc/m/68-682668_pineapple-png-background-single-fruits-and-vegetables-transparent.png", quantity: 0 },
      { id: 6, name: "Avocado", price: 3.99, image: "https://farmingbase.com/wp-content/uploads/2020/10/Which-fruit-has-a-single-seed-Apricot-00.jpg", quantity: 0 },
      { id: 7, name: "Grapes", price: 1.99, image: "https://www.pngitem.com/pimgs/m/42-427313_single-fruits-and-vegetables-hd-png-download.png", quantity: 0 },
      { id: 8, name: "Coconut", price: 4.99, image: "https://previews.123rf.com/images/boarding1now/boarding1now1607/boarding1now160700058/61743595-coconut-coconuts-fruit-fresh-fruits-isolated-on-a-white-background.jpg", quantity: 0 },
    ]
  }

  //^ FUNZIONE DI RENDER PER I CLASS COMPONENT
  render() {
    return (
      <>
        {/* //^SE VOGLIO METTERE PIU TAGS ACCANTO DEVO RACCHIUDERLI NEL FRAGMENT JSX ( <> </> )*/}
        < Navbar />
        <div className="container mt-5">
          <div className="row">
            {/* CICLO SULLA CARDA CON LA FUNZIONE MAP CHE HA COME PARAMETRO PROPRIO LA CARTA */}
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                image={card.image}
                name={card.name}
                price={card.price}
                quantity={card.quantity} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

//^UNA VOLTA DEFINITO CON LA FUNZIONE SOVRASTANTE, IL FILE VA ESPORTATO COSI
export default App;
