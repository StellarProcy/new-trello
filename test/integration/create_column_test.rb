require 'test_helper'
require 'capybara/rails'
require 'capybara/minitest'

class CreateColumn < ActiveSupport::TestCase
  test "Column empty title" do
    column = Column.new
    assert_not column.save, "Saved the column w/o a title"
  end
end
