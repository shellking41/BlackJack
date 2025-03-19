import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BlackJackPage from "../Pages/BlackJackPage.jsx";

function GameRoutes() {
    return (
        <Routes>
            <Route path={"BlackJack"} element={<BlackJackPage/>}/>
        </Routes>
    );
}

export default GameRoutes;