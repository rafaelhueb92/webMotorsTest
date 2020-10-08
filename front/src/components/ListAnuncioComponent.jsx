import React, { Component } from 'react'
import AnuncioService from '../services/AnuncioService'

class ListAnuncioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Anuncios: []
        }
        this.addAnuncio = this.addAnuncio.bind(this);
        this.editAnuncio = this.editAnuncio.bind(this);
        this.deleteAnuncio = this.deleteAnuncio.bind(this);
    }

    deleteAnuncio(id){
        AnuncioService.deleteAnuncio(id).then( res => {
            this.setState({Anuncios: this.state.Anuncios.filter(Anuncio => Anuncio.id !== id)});
        });
    }
    viewAnuncio(id){
        this.props.history.push(`/view-Anuncio/${id}`);
    }
    editAnuncio(id){
        this.props.history.push(`/add-Anuncio/${id}`);
    }

    componentDidMount(){
        AnuncioService.getAnuncios().then((res) => {
            console.log(res.data)
            this.setState({ Anuncios: res.data});
        });
    }

    addAnuncio(){
        this.props.history.push('/add-Anuncio/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Anúncios</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAnuncio}> Incluir Anúncio</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Marca </th>
                                    <th> Modelo </th>
                                    <th> Versão </th>
                                    <th> Ano </th>
                                    <th> Quilometragem </th>
                                    <th> Observação </th>
                                    <th> Ações </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Anuncios.map(
                                        Anuncio => 
                                        <tr key = {Anuncio.id}>
                                             <td> { Anuncio.marca} </td>   
                                             <td> {Anuncio.modelo}</td>
                                             <td> {Anuncio.versao}</td>
                                             <td> { Anuncio.ano} </td>   
                                             <td> {Anuncio.quilometragem}</td>
                                             <td> {Anuncio.observacao}</td>
                                             <td>
                                                 <button onClick={ () => this.editAnuncio(Anuncio.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAnuncio(Anuncio.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAnuncio(Anuncio.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAnuncioComponent
