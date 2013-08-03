# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130803101642) do

  create_table "matches", :force => true do |t|
    t.integer  "radiant_team_id"
    t.integer  "dire_team_id"
    t.integer  "status"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.integer  "game_url_id"
  end

  add_index "matches", ["dire_team_id"], :name => "index_matches_on_dire_team_id"
  add_index "matches", ["radiant_team_id", "dire_team_id"], :name => "index_matches_on_radiant_team_id_and_dire_team_id", :unique => true
  add_index "matches", ["radiant_team_id"], :name => "index_matches_on_radiant_team_id"

  create_table "teams", :force => true do |t|
    t.string   "name"
    t.string   "tag"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "result"
  end

end
