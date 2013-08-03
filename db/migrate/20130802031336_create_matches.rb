class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :radiant_team_id
      t.integer :dire_team_id
      t.integer :status

      t.timestamps
    end
    add_index :matches, [:radiant_team_id, :dire_team_id], unique: true
    add_index :matches, :radiant_team_id
    add_index :matches, :dire_team_id
  end
end
