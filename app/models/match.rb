class Match < ActiveRecord::Base
  attr_accessible :dire_team_id, :radiant_team_id, :status, :id, :game_url_id
  belongs_to :radiant_team, class_name: "Team", inverse_of: :matches_as_radiant
  belongs_to :dire_team, class_name: "Team", inverse_of: :matches_as_dire

  def spectate_link
    if game_url_id.nil?
      # "dota2://matchid=#{id}"
      "http://www.dota2.com/international/prelims/"
    else
      "http://www.dota2.com/international/game/#{game_url_id}"
    end
  end

  # status
  # 0/nil - not played
  # 1 - live
  # 2 - radiant win
  # 3 - dire win
end
