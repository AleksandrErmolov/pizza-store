import {Header} from "./components";
import {Home, Cart} from "./pages";
import {connect, useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
import {setPizzas as setPizzasAction} from "./redux/action/pizzas"
import store from "./redux/store";


class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
                this.props.setPizzas(data.pizzas)
        });
    }


    render() {
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
    return {
        items:state.pizzas.items,
    }
}

const MapDispatchToProps = dispatch => {
return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
}

}

export default connect(mapStateToProps, MapDispatchToProps )(App);
