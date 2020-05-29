import React, { Component } from 'react';

class BoardForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            newName: ''
        }
    }

    handleChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(event, this.state.newName)
        this.setState({newName: ''})
    }

    render() {
        return (
            <div className = "create-board-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Create new board:</h2>
                        <input type="text"
                            required minLength = "1" 
                            maxLength = "25"
                            value={this.state.newName}
                            id="new_board"
                            onChange={this.handleChange} />
                    </label>
                    <input className = "submit_button" type="submit" value="Create board" />
                </form>   
            </div> 
        );
    }
}
 
export default BoardForm;