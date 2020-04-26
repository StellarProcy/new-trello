class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :title
      t.string :description
      t.integer :position
      t.references :column, null: false, foreign_key: true

      t.timestamps
    end
  end
end
