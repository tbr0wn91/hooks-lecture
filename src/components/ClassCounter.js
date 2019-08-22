import React, {useState, Component } from 'react';
export default class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state={
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        const { counter } = this.state;
        return (
            <div className='counter'>
                <h1>{ counter }</h1>
                <div>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}






