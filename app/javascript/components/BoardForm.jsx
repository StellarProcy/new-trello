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
                        Create new board:
                        <input type="text"
                                value={this.state.newName}
                                onChange={this.handleChange} />
                    </label>
                    <input className = "submit_button" type="submit" value="Create board" />
                </form>   
            </div> 
        );
    }
}
 
export default BoardForm;