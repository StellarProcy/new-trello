import React, { Component } from 'react';
import Column from './Column';

class DropdownColumnList extends Component {
    constructor() {
        super();
        this.state = {
            columns: [],
        };
    }

  componentDidMount() {
    let initialColumns = [];
    fetch('api/v1/columns')
      .then(response => {
          return response.json();
      }).then(data => {
      initialColumns = data.results.map((column) => {
          return column
      });
      console.log(initialColumns)
      this.setState({
          columns: initialColumns,
      });
    });
  }

  render(){
    return (
      <Column state={this.state}/>
    );
  }
}
  
export default DropdownColumnList;

ReactDOM.render(<DropdownColumnList/>, document.getElementById('dropdown-column-list'));
  