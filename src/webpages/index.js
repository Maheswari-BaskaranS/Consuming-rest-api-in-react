import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './home';
import User from './user';
const Webpages = () => {
    return(
        <Routes>
            <Route exact path="/" element= { <Home/> } />
            <Route path = "/user/:id" element = { <User/> } />
        </Routes>
    );
};
export default Webpages;