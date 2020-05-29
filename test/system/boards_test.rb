require "application_system_test_case"

class BoardsTest < ApplicationSystemTestCase
  test 'visiting the index' do
    visit root_path

    assert_selector "h2", text: 'Create new board:'
  end

  test 'can create boards' do
    visit root_path
    fill_in('new_board', with: 'Test-board')
    click_on 'Create board'
    click_on 'Test-board'

    assert_selector "h2", text: 'Test-board'
  end

  test 'can create column' do
    visit root_path
    fill_in('new_board', with: 'Test-board')
    click_on 'Create board'
    click_on 'Test-board'
    fill_in 'new_column', with: 'Test-column'
    click_on 'Create column'

    assert_selector "h2", text: "Test-column"
  end

  test 'can delete column' do
    visit root_path
    fill_in('new_board', with: 'Test-board')
    click_on 'Create board'
    click_on 'Test-board'
    fill_in 'new_column', with: 'Test-column'
    click_on 'Create column'
    click_button 'Delete Column'

    assert_selector "h2", text: "test-board"
  end

  test 'can create card' do
    visit root_path
    fill_in('new_board', with: 'Test-board')
    click_on 'Create board'
    click_on 'Test-board'
    fill_in 'new_column', with: 'Test-column'
    click_on 'Create column'
    fill_in('new_card', with: 'Test-card')
    click_button 'Create card'

    assert_selector "h4", text: "Test-card"
  end

  test 'can rename card' do
    visit root_path
    fill_in('new_board', with: 'Test-board')
    click_on 'Create board'
    click_on "Test-board"
    fill_in 'new_column', with: 'Test-column'
    click_on 'Create column'
    fill_in('new_card', with: 'Test-card')
    click_button 'Create card'
    click_button 'submit_change_name_button'
    page.driver.browser.switch_to.alert.accept
    
    assert_selector "h4", text: "New title name"
  end

  test 'can move card between columns' do
    visit root_path
    fill_in('new_board', with: 'Test-board')
    click_on 'Create board'
    click_on "Test-board"
    fill_in 'new_column', with: 'Test-column'
    click_on 'Create column'
    fill_in('new_card', with: 'Test-card')
    click_button 'Create card'
    fill_in 'new_column', with: 'Test-column2'
    click_on 'Create column'
    select 'Test-column2', from: 'choosing_column'
    select 'Test-column', from: 'choosing_column'
    click_button 'submit_change_name_button'
    page.driver.browser.switch_to.alert.accept

    assert_selector "h4", text: "New title name"
  end

  test 'can delete card' do
    visit root_path
    fill_in('new_board', with: 'Test-board')
    click_on 'Create board'
    click_on "Test-board"
    fill_in 'new_column', with: 'Test-column'
    click_on 'Create column'
    fill_in('new_card', with: 'Test-card')
    click_button 'Create card'
    click_button 'Delete card'

    assert_selector "h2", text: 'Test-column'
  end


end
