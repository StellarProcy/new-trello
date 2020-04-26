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
                            value={this.state.newName}
                            onChange={this.handleChange} />
                </label>
                <input className = "submit_button" type="submit" value="Create" />
            </form> 
          </div>   
      );
  }
}
 
export default ColumnForm;