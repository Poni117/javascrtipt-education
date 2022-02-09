import React from "react";

export default class Test extends React.Component {

    constructor(){
        console.log('constructor');
        super()
        this.state = {id: 0};
    }

    componentDidMount(){
        console.log('mounted');
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('updated');
        
    }

    componentWillUnmount(){
        console.log('unmount');

    }

    updateState = () =>{
        let counter = this.state.id;
        counter ++;
        
        this.setState({id: counter});
    }

    render(){
        console.log('render');
        return  <div>
          <button style={{width: 100, height: 30}} onClick={this.updateState}>{this.state.id}</button>
        </div> 
    }
}