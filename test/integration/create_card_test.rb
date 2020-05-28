require 'test_helper'
require 'capybara/rails'
require 'capybara/minitest'

class CreateCard < ActiveSupport::TestCase
  test "Card empty title" do
    card = Card.new
    assert_not card.save, "Saved the card w/o a title"
  end
end
