import React, { Component } from 'react';

//^NOME DELLA FUNZIONE JS CON LO STESSO NOME DEL COMPONENTE
class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: '18rem' }}>
                    {/* //^Mettere il selfclosing tag ad img e l'attributo style va dato come fosse un oggetto */}
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button href="#" clbuttonssName="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Card;