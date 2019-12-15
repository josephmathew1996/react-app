import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Post from '../Pages/Post';

export default  class App extends React.Component {
    render() {
        return (
           <div>
               <BrowserRouter>
               <Route exact path="/" component={Home} />
               <Route exact path="/post/:id" component={Post} />
               </BrowserRouter>
           </div>
        )
    }
}


