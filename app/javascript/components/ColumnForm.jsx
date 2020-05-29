import React, { Component } from 'react';

class ColumnForm extends Component {
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
          <div className = "create-new-column">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Create new column:
                    <input  type="text"
                        required minLength = "1" 
                        maxLength = "25"
                        value={this.state.newName}
                        id='new_column'
                        onChange={this.handleChange} />
                </label>
                <input className = "submit_button" type="submit" value="Create column" />
            </form> 
          </div>   
      );
  }
}
 
export default ColumnForm;