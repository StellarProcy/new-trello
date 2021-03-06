import React, { Component } from 'react';

import DataClient from './../servises/data_client';
import Column from './Column'
import { render } from 'react-dom';
import ColumnForm from './ColumnForm';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            board: null,
            board_id: props.match.params.id
        };
    };

    componentDidMount = () => {
        this.props.cable.subscriptions.create({
            channel: 'BoardsChannel',
            board: this.state.board_id,
        }, {
            received: (data) => {
                this.setState({board: data})
            },
        });
        this.fetchData();
    };

    fetchUpdate = (data) => {
    };

    fetchData = async () => {
        const response = await DataClient.get_board(this.state.board_id);
        let board = await response.data;
        this.setState({board})
    };

    handleColumnSubmit = async (event, new_column_name) => {
        let response = await DataClient.createColumn({
            name: new_column_name,
            board_id: this.state.board_id
        })
        let data = response.data
    }

    handleColumnDelete = async (column_id) => {
        let response = await DataClient.deleteColumn(column_id)
        if (response.status === 204) {
            let new_columns = this.state.board.columns.filter(column => column.id != column_id)
            this.setState({
                board: {
                    ...this.state.board,
                    columns: new_columns,
                }
            })
        }   
    }

    handleCardSubmit = async (column_id, new_card_name) => {
        let response = await DataClient.createCard({
            title: new_card_name,
            column_id: column_id,
        })
        let data = response.data
    }

    handleChangeCardName = async (card_id, new_card_name) => {
        let response = await DataClient.changeCardName(card_id, new_card_name)
        if (response.status === 204) {
            let new_cards = this.state.board.cards;
            new_cards.forEach(element => {
                if (element.id === card_id) {
                    element.title = new_card_name
                }
            });
            this.setState({
                board: {
                    ...this.state.board,
                    cards: new_cards
                }
            })
        }
    }

    handleCardDelete = async (card_id) => {
        let response = await DataClient.deleteCard(card_id)
        if (response.status === 204) {
            let new_cards = this.state.board.cards.filter(card => card.id != card_id)
            this.setState({
                board: {
                    ...this.state.board,
                    cards: new_cards
                }
            })
        }
    }

    handleCardMove = async (card_id, new_column_id) => {
        let response = await DataClient.cardMove(card_id, new_column_id)
        if (response.status === 204) {
            let new_cards = this.state.board.cards;
            new_cards.forEach(element => {
                if (element.id === card_id) {
                    element.column_id = new_column_id
                }
            });
            this.setState({
                board: {
                    ...this.state.board,
                    cards: new_cards
                }
            })
        }
    }

    render(){
        let board = this.state.board
        return(
            board ? 
                (
                    <div className = "board">    
                        <h2 id = "board-title-font">{board.title}</h2>
                        <ColumnForm 
                            handleSubmit = {this.handleColumnSubmit}
                        />
                        <div className="columns">
                            {board.columns.map((column) => <Column 
                                key={column.id}
                                column_id={column.id}
                                name={column.name}
                                cards={board.cards.filter(card => card.column_id === column.id)}
                                handleCardMove={this.handleCardMove}
                                handleCardSubmit={this.handleCardSubmit}
                                handleCardDelete={this.handleCardDelete}
                                handleChangeCardName={this.handleChangeCardName}
                                handleColumnDelete={this.handleColumnDelete}
                                allColumns={board.columns.filter(column => column.board_id === board.id)}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <p id = "card-font">Loading...</p>
                )        
        )
    }
}

export default Board;