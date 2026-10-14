import axios from "axios";
import Global from "../Global";

export default class EmpleadosService{
    // getHospitales() {
    //     return new Promise(function (resolve) {
    //         let request = "api/hospitales"
    //         let url = Global.urlApiHospitales;

    //         axios.get(url + request).then((response) => {
    //             console.log("Leyendo hospitales");
    //             resolve(response.data) //resolve es para devolver el dato de la promesa que tu quieras
    //             //En este caso le devolvemos los hospitales de forma asíncrona
    //         })
    //     })
    // }
    cargarEmpleados(){
        return new Promise(function (resolve){
            let request = "api/empleados/";
            let url = Global.urlApiEmpleados;

            axios.get(url + request).then((response) => {
                console.log("Leyendo empleados");
                resolve(response.data);
            })
        })
    }

    cargarEmpleadoOficio(oficio){
        return new Promise(function(resolve){
            let request = "api/empleados/empleadosoficio/" + oficio
            let url = Global.urlApiEmpleados;

            axios.get(url + request).then((response) => {
                console.log("Leyendo empleados por oficio");
                resolve(response.data);
            })
        })
    }

    cargarOficios(){
        return new Promise(function(resolve){
            let request = "api/empleados/oficios"
            let url = Global.urlApiEmpleados;

            axios.get(url + request).then((response) => {
                console.log("Cargando oficios");
                resolve(response.data);
            })
        })
    }

}