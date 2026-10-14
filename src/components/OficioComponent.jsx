import React, { Component } from 'react'
import EmpleadosService from '../services/EmpleadosService'

export default class OficioComponent extends Component {
    service = new EmpleadosService();

    state = {
        empleados: []
    }

    cargarOficio = (oficio) => {
        this.service.cargarEmpleadoOficio(oficio).then((result) => {
            this.setState({
                empleados: result
            })
        })

    }

    componentDidMount = () => {
        this.cargarOficio(this.props.oficio);
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.oficio != this.props.oficio){
            this.cargarOficio(this.props.oficio)
        }
    }
    render() {
        return (
            <div>
                <h1>Oficio</h1>
                {
                    this.state.empleados.map((empl, index) => {
                        return (<div key={index} style={{backgroundColor: "lightcyan"}}>
                            <h3>{empl.apellido}</h3>
                            <h3>{empl.oficio}</h3>
                            <h3>{empl.salario}</h3>
                            <h3>{empl.departamento}</h3>
                        </div>)
                    })
                }
            </div>
        )
    }
}
