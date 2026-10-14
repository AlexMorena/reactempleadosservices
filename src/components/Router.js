import { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import HomeComponent from "./HomeComponent";
import OficioComponent from "./OficioComponent";

export default class Router extends Component {
    render() {
        function OficioElement() {
            let { oficio } = useParams();
            return (<OficioComponent oficio={oficio} />)
        }
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/oficios/:oficio" element={<OficioElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}