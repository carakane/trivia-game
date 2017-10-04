class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
			t.string :intials
			t.integer :turn_count, default: 0
			t.integer :score
      t.timestamps
    end
  end
end
