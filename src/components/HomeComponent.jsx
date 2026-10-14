import React, { Component } from 'react'
import EmpleadosService from '../services/EmpleadosService'

export default class HomeComponent extends Component {

    service = new EmpleadosService();

    state = {
        empleados: []
    }

    cargarEmpleados = () => {
        this.service.cargarEmpleados().then((result) => {
            console.log(result);
            this.setState({
                empleados: result
            })
        })
    }

    componentDidMount = () => {
        this.cargarEmpleados();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((emp, index) => {
                                return (<tr key={index}>
                                    <td>{emp.apellido}</td>
                                    <td>{emp.oficio}</td>
                                    <td>{emp.salario}</td>
                                    <td>{emp.departamento}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
