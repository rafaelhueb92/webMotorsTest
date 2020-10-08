import React, { Component } from 'react'
import AnuncioService from '../services/AnuncioService';

class CreateAnuncioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            marca: '',
            modelo: '',
            versao: '',
            ano:0,
            quilometragem:0,
            observacao:'',
        }
        this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
        this.changeModeloHandler = this.changeModeloHandler.bind(this);

        this.changeVersaoHandler = this.changeVersaoHandler.bind(this);
        this.changeAnoHandler = this.changeAnoHandler.bind(this);

        this.changeQuilometragemHandler = this.changeQuilometragemHandler.bind(this);
        this.changeObservacaoHandler = this.changeObservacaoHandler.bind(this);

        this.saveOrUpdateAnuncio = this.saveOrUpdateAnuncio.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AnuncioService.getAnuncioById(this.state.id).then( (res) =>{
                let Anuncio = res.data;
                this.setState({  marca: Anuncio.marca,
                modelo: Anuncio.modelo,
                versao: Anuncio.versao,
                ano:Anuncio.ano,
                quilometragem:Anuncio.quilometragem,
                observacao:Anuncio.observacao,
                });
            });
        }        
    }
    saveOrUpdateAnuncio = (e) => {
        e.preventDefault();

        const Anuncio = this.state;

        // step 5
        if(this.state.id === '_add'){
            Anuncio.id = 0;
            AnuncioService.createAnuncio(Anuncio).then(res =>{
                this.props.history.push('/Anuncios');
            });
        }else{
            Anuncio.id = parseInt(this.state.id);
            AnuncioService.updateAnuncio(Anuncio).then( res => {
                this.props.history.push('/Anuncios');
            });
        }
    }
    
    changeMarcaHandler= (event) => {
        this.setState({marca: event.target.value});
    }

    changeModeloHandler= (event) => {
        this.setState({modelo: event.target.value});
    }

    changeVersaoHandler= (event) => {
        this.setState({versao: event.target.value});
    }

    changeAnoHandler= (event) => {
        this.setState({ano: parseInt(event.target.value)});
    }

    changeQuilometragemHandler= (event) => {
        this.setState({quilometragem: parseFloat(event.target.value)});
    }

    changeObservacaoHandler= (event) => {
        this.setState({observacao: event.target.value});
    }

    cancel(){
        this.props.history.push('/Anuncios');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Incluir Anúncio</h3>
        }else{
            return <h3 className="text-center">Alterar Anúncio</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Marca: </label>
                                            <input placeholder="Marca" name="marca" className="form-control" 
                                                value={this.state.marca} onChange={this.changeMarcaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Modelo: </label>
                                            <input placeholder="Modelo" name="modelo" className="form-control" 
                                                value={this.state.modelo} onChange={this.changeModeloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Versão: </label>
                                            <input placeholder="Versão" name="versao" className="form-control" 
                                                value={this.state.versao} onChange={this.changeVersaoHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Ano: </label>
                                            <input placeholder="Ano" type="number" maxLength="4" name="ano" className="form-control" 
                                                value={this.state.ano} onChange={this.changeAnoHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Quilometragem: </label>
                                            <input placeholder="quilometragem" type="number" name="quilometragem" className="form-control" 
                                                value={this.state.quilometragem} onChange={this.changeQuilometragemHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Observação: </label>
                                            <input placeholder="Observação" name="observacao" className="form-control" 
                                                value={this.state.observacao} onChange={this.changeObservacaoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateAnuncio}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateAnuncioComponent
