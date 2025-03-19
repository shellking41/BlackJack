import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../Pages/MainPage.jsx";

export function MainRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
        </Routes>
    );
}

