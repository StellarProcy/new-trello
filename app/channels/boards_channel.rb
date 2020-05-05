class BoardsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "boards_channel"
  end

  def unsubscribed
  end
end
