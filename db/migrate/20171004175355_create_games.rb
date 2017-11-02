class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
			t.string :initials
      t.integer :score
      t.integer :likes, default: 0      
      t.timestamps
    end
  end
end
