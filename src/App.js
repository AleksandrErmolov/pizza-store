import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Routes, Route} from "react-router-dom";
import React from 'react';


function App() {
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
