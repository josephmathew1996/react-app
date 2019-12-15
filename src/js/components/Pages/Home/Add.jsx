import React, { Component } from 'react'

export default class Add extends Component {
    // constructor(props){
    //     super(props);
    // }
    constructor(props) {
        super(props);
        console.log("constructor()*******")
    }
    componentDidMount() {
        console.log("componentDidMount()**********")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()**********",nextProps, nextState)
        return false
    }
    componentDidUpdate(prevProps, prevStat)
    {
        console.log("shouldComponentUpdate()**********",prevProps, prevStat)
    }
    render() {
        console.log("render()*******")
        return (
            <div>
               <form onSubmit={(e) => this.props.handleSubmit(e)}>
               <label>Add title</label>
                    <input type="text"  onChange={(e) => this.props.handleChange(e,'title')}></input>
                   <label>Add author</label>
                    <input type="text"  onChange={(e) => this.props.handleChange(e,'author')}></input>
               <button>Submit</button>
               </form>
            </div>
        )
    }
}
