import React, { Component } from 'react';

class Counter extends Component {
    /*state = {
        value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
    };
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }
    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>
        { this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)}
     </ul>;
    }*/
    render() { 
        return <div>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button>
        <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>-</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        {/* this.state.tags.length === 0 && 'Please create a new tag!' */}
        {/* this.renderTags() */}
        </div>;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? "0" : count;
    }
}
 
export default Counter;