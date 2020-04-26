import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (event) => {
        this.props.cardDelete(this.props.card_id)
    }

    handleMove = (event) => {
        this.props.handleMove(this.props.card_id, parseInt(event.target.value))
    }

    render() { 
        let optionItems = this.props.allColumns.map((column) => 
            <option key={column.id} value={column.id}>{column.name}</option>)
        return (
            <div className = "card">
                <h4 id = "card-font">{this.props.title}</h4>
                <select onChange = {this.handleMove}>
                    {optionItems}
                </select>
                <button className = "delete_button" onClick={this.handleDelete}>
                </button>
            </div>  
        );
    }
}
 
export default Card;