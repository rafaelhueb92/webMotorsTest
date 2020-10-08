import React, { Component } from 'react'
import AnuncioService from '../services/AnuncioService'

class ViewAnuncioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Anuncio: {}
        }
    }

    componentDidMount(){
        AnuncioService.getAnuncioById(this.state.id).then( res => {
            this.setState({Anuncio: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Anuncio Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Marca: </label>
                            <div> { this.state.Anuncio.marca }</div>
                        </div>
                        <div className = "row">
                            <label> Modelo: </label>
                            <div> { this.state.Anuncio.modelo }</div>
                        </div>
                        <div className = "row">
                            <label> Versão: </label>
                            <div> { this.state.Anuncio.versao }</div>
                        </div>
                        <div className = "row">
                            <label> Ano: </label>
                            <div> { this.state.Anuncio.ano }</div>
                        </div>
                        <div className = "row">
                            <label> Quilometragem: </label>
                            <div> { this.state.Anuncio.quilometragem }</div>
                        </div>
                        <div className = "row">
                            <label> Observação: </label>
                            <div> { this.state.Anuncio.observacao }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAnuncioComponent
