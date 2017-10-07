class DropTurnsFromGames < ActiveRecord::Migration[5.1]
  def change
    remove_column :games, :turn_count
  end
end
