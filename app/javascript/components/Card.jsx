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

    handleChangeCardName = (event) => {
        let newCardName = prompt('Please, input new card title', 'New title name')
        console.log(newCardName)
        if (!newCardName) {
            alert('Invalid title!')
        } else if (newCardName = "") {
            alert('Invalid title!') 
        } else if (newCardName)
            this.props.handleChangeCardName(this.props.card_id, newCardName)
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
                <button 
                    className = "delete_button" onClick={this.handleDelete}>
                </button>
                <button
                    className = "submit_button" onClick={this.handleChangeCardName}> 
                </button>
            </div>  
        );
    }
}
 
export default Card;