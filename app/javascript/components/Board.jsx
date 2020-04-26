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
    }

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = async () => {
        const response = await DataClient.get_board(this.state.board_id);
        let board = await response.data;
        this.setState({board})
        console.log(board)
    }

    handleColumnSubmit = async (event, newColumnName) => {
        let response = await DataClient.createColumn({
            name: newColumnName,
            board_id: this.state.board_id
        })
        let data = response.data
        this.setState({
            board: {
                ...this.state.board,
                columns: [...this.state.board.columns, data]
            }
        })
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

    handleCardSubmit = async (column_id, newCardName) => {
        let response = await DataClient.createCard({
            title: newCardName,
            column_id: column_id,
        })
        let data = response.data
        this.setState({
            board: {
                ...this.state.board,
                cards: [...this.state.board.cards, data]
            }
        })
    }

    handleCardDelete = async (key) => {
        let response = await DataClient.deleteCard(key)
        if (response.status === 204) {
            let new_cards = this.state.board.cards.filter(card => card.id != key)
            this.setState({
                board: {
                    ...this.state.board,
                    cards: new_cards
                }
            })
        }
    }

    handleCardMove = async (card_id, new_column_id) => {
        console.log(`column has changing: ${card_id} moving to ${new_column_id}`);
        let new_cards = this.state.board.cards;
        console.log(new_cards)
        new_cards.forEach(element => {
            console.log(element)
            if (element.id === card_id) {
                console.log('GOT IT!')
                element.column_id = new_column_id
            }
        });
        console.log(new_cards)
        this.setState({
            board: {
                ...this.state.board,
                cards: new_cards
            }
        })
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