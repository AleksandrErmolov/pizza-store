import {Header} from "./components";
import {Home, Cart} from "./pages";
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import {setPizzas} from "./redux/action/pizzas"
import store from "./redux/store";


function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas/').then(({data}) => {
            dispatch(setPizzas(data))
        });
    }, []);


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/cart' element={<Cart/>} exact/>
                </Routes>
            </div>
        </div>
    )
}


export default App;
