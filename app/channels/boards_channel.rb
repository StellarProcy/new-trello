class BoardsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "board_#{params[:board]}"
  end

  def received(data)
    # just ignoring it!
  end

  def unsubscribed
  end
end
