class Api::V1::CardsController < ApplicationController
  def create
    card = Card.new(title: params[:title], column_id: params[:column_id])
      if card.save
          render json: card, status: :created
      else
          render json: card.errors, status: :unprocessable_entity
      end
  end

  def index
    cards = Card.all 
    render json: cards
  end

  def show
    card = Card.find(params[:id])
    render json: card
  end

  def update
    card = Card.find(params[:id])
    if(params.has_key?(:title))
      card.update(title: params[:title])
    elsif(params.has_key?(:column_id))
      card.update(column_id: params[:column_id])
    end
  end

  def destroy
    card = Card.find(params[:id])
    card.destroy
  end
end
