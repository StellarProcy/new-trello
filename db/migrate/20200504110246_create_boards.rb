class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :title
      t.timestamps
    end
  end
end
