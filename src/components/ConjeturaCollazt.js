import React, { Component } from 'react'

export default class Collazt extends Component {
    state = {
        listaNumeros: []
    }

    componentDidMount = () =>{
      this.collazt();
    }

    //recibe el  numero del input del usuario
    collazt = () => {
      var numero = parseInt(this.props.numero);

      var secuenciaNumeros = [];

        while ( numero !== 1){
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = (numero * 3) + 1;
            }
            //añado al array  
            secuenciaNumeros.push(numero);
        }

        console.log(secuenciaNumeros);
        //actualizo el state de listaNumeros con los numeros guardados en el array secuenciaNumeros
        this.setState({
            listaNumeros: secuenciaNumeros //se crean dos para que no se vayan acumulando los numeros, y se actualice con cada num que se introduzca
        })
    }

  render() {
    return (
      <div>
        <h1>Conjetura de Collazt</h1>
        <h2 style={{color:"blue"}}>Número: {this.props.numero}</h2>
        <ul>
            {this.state.listaNumeros.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
      </div>
    )
  }
}