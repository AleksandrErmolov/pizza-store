import {Header} from "./components";
import {Home, Cart} from "./pages";
import {connect} from "react-redux";

import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import {setPizzas} from "./redux/action/pizzas"


// function App() {

//     useEffect(() => {
// axios.get('http://localhost:3000/db.json')
//     .then(({data}) => {
//         setPizzas(data.pizzas)
//     })},[])
//
//
//
//     return (
//
//     );
// }


class App extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            console.log("data", data.pizzas)
                window.store.dispatch(setPizzas(data.pizzas));
            console.log("ДАТА!!!" , data)
        });
    }


    render() {

        console.log("Это пропсы", this.props)


        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home items={this.props.items} />}/>
                        <Route path='/cart' element={<Cart/>} exact/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Это стейт" , state.pizzas.items)
    return {
        items:state.pizzas.items,
    }
}

export default connect(mapStateToProps)(App);
