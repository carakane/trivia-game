class DropTurns < ActiveRecord::Migration[5.1]
  def change
    drop_table :turns
  end
end
