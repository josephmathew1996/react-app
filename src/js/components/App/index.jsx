import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Pages/Home';

export default  class App extends React.Component {
    render() {
        return (
           <div>
               <BrowserRouter>
               <Route exact path="/" component={Home} />
               </BrowserRouter>
           </div>
        )
    }
}


