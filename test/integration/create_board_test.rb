require 'test_helper'
require 'capybara/rails'
require 'capybara/minitest'

class CreateBoard < ActiveSupport::TestCase
  test "Board empty title" do
    board = Board.new
    assert_not board.save, "Saved the board w/o a title"
  end
end
