import React, { Component } from 'react';

//^NOME DELLA FUNZIONE JS CON LO STESSO NOME DEL COMPONENTE
class Card extends Component {
    render() {
        return (
            <div className="col mb-5">
                <div className="card bg-light" style={{ width: '18rem' }}>
                    {/* //^Mettere il selfclosing tag ad img e l'attributo style va dato come fosse un oggetto */}
                    <img src={this.props.image} style={{ maxWidth: '18rem', height: '216px', objectFit: 'contain' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* IN REACT LE PROPS RICEVUTE DAL COMPONENTE PADRE SI SCRIVONO COSI NEL COMPONENTE FIGLIO */}
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">€{this.props.price}</p>
                        <button className="me-3">{this.props.quantity}</button>
                        <button href="#" className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Card;