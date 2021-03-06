class Api::V1::ColumnsController < ApplicationController
  def create
      column = Column.new(name: params[:name], board_id: params[:board_id])
      if column.save
          render json: column, status: :created
      else
          render json: column.errors, status: :unprocessable_entity
      end
      board = Board.find(column.board_id)
      ActionCable.server.broadcast("board_#{column.board_id}", BoardSerializer.new(board).as_json)
  end

  def index
    columns = Column.all
    render json: columns
  end

  def show 
    column = Column.find(params[:id])
    render json: column
  end

  def destroy
    column = Column.find(params[:id])
    column.destroy
    board = Board.find(column.board_id)
    ActionCable.server.broadcast("board_#{column.board_id}", BoardSerializer.new(board).as_json)
  end
end
