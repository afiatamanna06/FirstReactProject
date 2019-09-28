import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };
    /*constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }
    /*renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>
        { this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)}
     </ul>;
    }*/
    render() { 
        return <div>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
        {/* this.state.tags.length === 0 && 'Please create a new tag!' */}
        {/* this.renderTags() */}
        </div>;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;