class Team < ActiveRecord::Base
  attr_accessible :name, :tag, :id, :result
  attr_accessor :wins, :losses
  has_many :matches_as_radiant, class_name: "Match", foreign_key: "radiant_team_id", inverse_of: :radiant_team
  has_many :matches_as_dire, class_name: "Match", foreign_key: "dire_team_id", inverse_of: :dire_team

  def cls
    tag.downcase.gsub /[^a-z]/, ''
  end

  def matches
    matches_as_radiant + matches_as_dire
  end

  def wiki_link
    case tag
    when 'DK'; "http://wiki.teamliquid.net/dota2/Team_DK"
    else "http://wiki.teamliquid.net/dota2/#{tag}"
    end
  end

  # result
  # 0/nil - TBD
  # 1 - UB
  # 2 - LB
end
