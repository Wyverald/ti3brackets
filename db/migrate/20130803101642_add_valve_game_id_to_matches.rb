class AddValveGameIdToMatches < ActiveRecord::Migration
  def change
    add_column :matches, :game_url_id, :integer
    add_column :teams, :result, :integer
  end
end
