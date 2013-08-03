class MatchesController < ApplicationController
  def index
    # Group A teams
    # LGD, iNv.MUFC, Fnatic, DK, dignitas, Zenith, Na`Vi, mouz
    @team_ids_a = [15, 497529, 350190, 350190, 7, 142, 2, 36, 26]
    @teams_a = Team.find(*@team_ids_a)
    
    # Group B teams
    # Liquid, VP, TongFu, Orange, iG, Alliance, LGD.int, Rsnake
    @team_ids_b = [2163, 40, 20, 416900, 5, 111474, 77666, 496774]
    @teams_b = Team.find(*@team_ids_b)

    @all_matches = Match.all

    @matches_a = get_matches @team_ids_a
    @matches_b = get_matches @team_ids_b

    (@teams_a + @teams_b).each do |team|
      team.wins = @all_matches.count do |match|
        match.radiant_team_id == team.id && match.status == 2 ||
        match.dire_team_id == team.id && match.status == 3
      end
      team.losses = @all_matches.count do |match|
        match.radiant_team_id == team.id && match.status == 3 ||
        match.dire_team_id == team.id && match.status == 2
      end
    end

    @last_update = Match.order(:updated_at).last.updated_at
  end

  protected
  def get_matches team_ids
    matches = {}
    team_ids.each do |team_id|
      matches[team_id] = { team_id => :same }
    end
    p team_ids
    @all_matches.each do |match|
      p match
      if match.radiant_team_id.in? team_ids
        matches[match.radiant_team_id][match.dire_team_id] = match
      end
    end
    matches
  end
end
