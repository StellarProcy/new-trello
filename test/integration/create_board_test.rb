require 'test_helper'
require 'capybara/rails'
require 'capybara/minitest'

class CreateBoard < ActionDispatch::IntegrationTest
  test "BoardTest" do
    visit root_path
    assert_content "Create new board:"

    fill_in('new_board', with: 'Test-board')
    click_button 'Create board'
    assert_content "Test-board"

    click_on 'Test-board'
    fill_in('new_column', with: 'Test-column')
    click_button 'Create column'
    assert_content "Test-column"

    click_button 'Delete column'
    fill_in('new_column', with: 'Test-column')
    click_button 'Create column'
    fill_in('new_card', with: 'Test-card')
    click_button 'Create card'
    assert_content "Test-card"

    click_button 'delete_card_button'
    fill_in('new_card', with: 'TEST-CARD')
    click_button 'Create card'
    click_button 'submit_change_name_button'
    page.driver.browser.switch_to.alert.accept
    assert_content "New title name"

    fill_in('new_column', with: 'Test-column2')
    click_button 'Create column'
    select 'Test-column2', from: 'choosing_column'
    select 'Test-column', from: 'choosing_column'
    assert_content "Test-column2"
  end
end