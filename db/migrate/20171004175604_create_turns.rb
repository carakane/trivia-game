class CreateTurns < ActiveRecord::Migration[5.1]
  def change
    create_table :turns do |t|
			t.integer :value
			t.boolean :correct?
			t.integer :game_id
      t.timestamps
    end
  end
end
