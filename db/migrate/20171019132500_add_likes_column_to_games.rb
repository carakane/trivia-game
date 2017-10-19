class AddLikesColumnToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :likes, :integer, default: 0
  end
end
