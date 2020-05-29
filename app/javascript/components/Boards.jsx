import React, { Component } from 'react';
import BoardInfo from './BoardInfo';
import BoardForm from './BoardForm';

import DataClient from './../servises/data_client';

class Boards extends Component{
    constructor(props){
        super(props)
        this.state = {
            boards: []
        }
    }

    componentDidMount = () => {
        this.fetchBoards();
    };

    fetchBoards = async () => {
        const data = await fetch(
            '/api/v1/boards'
        );
        let boards = await data.json();
        this.setState({boards})
    }

    handleSubmit = async (event, newName) => {
        let response = await DataClient.createBoard({title: newName})
        let data = response.data
        this.setState({boards: [...this.state.boards, data]})
    }

    render(){
        return (
            <div className = "dashboards-panel">
                <BoardForm handleSubmit={this.handleSubmit} />
                <div className = "boards-grid">
                    {this.state.boards.map((board) => 
                        <BoardInfo 
                        key={board.id}
                        id={board.id}
                        name={board.title}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Boards