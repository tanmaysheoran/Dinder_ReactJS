import React, { Component } from 'react';

class AddPerson extends Component {

    state = {
        name: '',
        age: ''
    }
    
    hello = "Hello";

    onNameChange(event){
        console.log(this.hello);
        // this.setState({name: event.target.value })
    }

    onAgeChange(event){
        console.log(this.hello);
        // this.setState({age: event.target.value })
    }

    render() {
        return (
            <div className="AddPerson">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.onNameChange}
                    value={this.state.name}    
                />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={this.onAgeChange}
                    value={this.state.age}
                />
                <button>Add Person</button>
            </div>);
    }
}

export default AddPerson;
