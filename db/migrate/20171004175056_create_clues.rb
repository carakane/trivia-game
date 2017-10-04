class CreateClues < ActiveRecord::Migration[5.1]
  def change
    create_table :clues do |t|
			t.string :value
			t.string :category
			t.string :clue
			t.string :answer
      t.timestamps
    end
  end
end
