import React, {Component} from 'react';

class Lifecycles extends Component {
    constructor(){
        super();
        console.log('constructor!');
    }
    componentDidMount() {
        console.log('componentDidMount!');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate!');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate!', nextProps);
        return nextProps.text !== this.props
    }
    render() {
        console.log('render!');
        return (<>render</>)

    }

}