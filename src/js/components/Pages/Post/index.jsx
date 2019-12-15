import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props);
        console.log("props",this.props);
    }
    render() {
        return (
            <div>
                post specific page
            </div>
        )
    }
}
