class Api::V1::BoardsController < ApplicationController 
    def index
        boards = Board.all
        render json: boards
    end 
    
    def show
        board = Board.find(params[:id])
        render json: BoardSerializer.new(board).as_json
    end

    def create
        board = Board.new(title: params[:title])
        if board.save
            render json: board, status: :created
        else
            render json: board.errors, status: :unprocessable_entity
        end
    end
end
