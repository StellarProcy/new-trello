import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (event) => {
        this.props.cardDelete(this.props.card_id)
    }

    handleMove = (event) => {
        if (event.target.value === "default") {
            return
        }
        this.props.handleMove(this.props.card_id, parseInt(event.target.value))
    }

    handleChangeCardName = (event) => {
        let newCardName = prompt('Please, input new card title', 'New title name')
        if (!newCardName) {
            alert('Invalid title!')
        } else if (newCardName === "") {
            alert('Invalid title!') 
        } else if (newCardName) {
            console.log(`Changing title to ${newCardName}`)
            this.props.handleChangeCardName(this.props.card_id, newCardName)
        }
    }

    render() { 
        let optionItems = this.props.allColumns.map((column) => 
            <option key={column.id} value={column.id}>{column.name}</option>)
        return (
            <div className = "card">
                <h4 id = "card-font">{this.props.title}</h4>
                <select onChange={this.handleMove} defaultValue="default">
                    <option key="default" value="default">Move to column:</option>
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