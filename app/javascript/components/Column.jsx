import React, { Component } from 'react';

import Card from './Card';
import CardForm from './CardForm'
import { render } from 'react-dom';
import DataClient from './../servises/data_client';

class Column extends Component {
    constructor(props){
        super(props);
    }

    handleCardSubmit = async (event, newCardName) => {
        this.props.handleCardSubmit(this.props.column_id, newCardName);
    }

    handleDelete = (event) => {
        this.props.handleColumnDelete(this.props.column_id)
        console.log(this.props)
    }

    render(){
        const all_columns_to_move = this.props.allColumns
            .filter(column => column.id !== this.props.column_id)
        return(
            <div className = "column">    
                <h2 id = "title-font">{this.props.name}</h2>
                <CardForm 
                    handleSubmit = {this.handleCardSubmit}
                />
                <div className="cards">
                    {this.props.cards.map((card) => <Card 
                        key={card.id}
                        card_id={card.id}
                        column_id={this.props.id}
                        title={card.title}
                        handleMove={this.props.handleCardMove}
                        allColumns={all_columns_to_move}
                        cardDelete={this.props.handleCardDelete}
                        handleChangeCardName={this.props.handleChangeCardName}
                        />
                    )
                    }
                </div>
                    <button className = "delete_button" onClick={this.handleDelete} id = "Delete column">
                    Delete Column
                    </button>   
            </div>    
        )
    }
}

export default Column;