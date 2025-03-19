import {useEffect, useState} from "react";

import "./App.css";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {MainRoutes} from "./Routes/MainRoutes.jsx";
import GameRoutes from "./Routes/GameRoutes.jsx";

function App() {
    return (

        <Router>

            <MainRoutes/>
            <GameRoutes/>

        </Router>
    );
}

export default App;
