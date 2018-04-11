class CreatePersonages < ActiveRecord::Migration[5.1]
  def change
    create_table :personages do |t|

      t.timestamps
      t.string :name
      t.integer :weight
      t.integer :height
      t.string :image
      t.string :types
    end
  end
end
