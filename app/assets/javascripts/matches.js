$(function () {
  $('.group-table-rectangle').on('mouseenter', 'th.team', function (evt) {
    var team = $(this).data('team');
    $('th.team-' + team).addClass('team-highlight');
    $('td.match-' + team + '-win').addClass('match-highlight-win');
    $('td.match-' + team + '-loss').addClass('match-highlight-loss');
  }).on('mouseleave', 'th.team', function (evt) {
    var team = $(this).data('team');
    $('th.team-' + team).removeClass('team-highlight');
    $('td.match-' + team + '-win').removeClass('match-highlight-win');
    $('td.match-' + team + '-loss').removeClass('match-highlight-loss');
  }).on('mouseenter', 'td.match:not(.match-na)', function (evt) {
    var radiant = $(this).data('radiant'), dire = $(this).data('dire');
    $('th.team-' + radiant).addClass('team-highlight');
    $('th.team-' + dire).addClass('team-highlight');
    $('td.match-' + radiant + '.match-' + dire).addClass('match-highlight');
  }).on('mouseleave', 'td.match:not(.match-na)', function (evt) {
    var radiant = $(this).data('radiant'), dire = $(this).data('dire');
    $('th.team-' + radiant).removeClass('team-highlight');
    $('th.team-' + dire).removeClass('team-highlight');
    $('td.match-' + radiant + '.match-' + dire).removeClass('match-highlight');
  });

  $('.group-table-triangle').on('mouseenter', 'th.team', function (evt) {
    var team = $(this).data('team');
    $('th.team-' + team).addClass('team-highlight');
    $('td[data-radiant=' + team + '].match-2-0').addClass('match-highlight-win');
    $('td[data-dire=' + team + '].match-0-2').addClass('match-highlight-win');
    $('td[data-radiant=' + team + '].match-0-2').addClass('match-highlight-loss');
    $('td[data-dire=' + team + '].match-2-0').addClass('match-highlight-loss');
    $('td.match-' + team + '.match-1-1').addClass('match-highlight-tie');
    $('td.match-' + team).filter('.match-1-0 .match-0-1 .match-0-0').addClass('match-highlight');
  }).on('mouseleave', 'th.team', function (evt) {
    var team = $(this).data('team');
    $('th.team-' + team).removeClass('team-highlight');
    $('td[data-radiant=' + team + '].match-2-0').removeClass('match-highlight-win');
    $('td[data-dire=' + team + '].match-0-2').removeClass('match-highlight-win');
    $('td[data-radiant=' + team + '].match-0-2').removeClass('match-highlight-loss');
    $('td[data-dire=' + team + '].match-2-0').removeClass('match-highlight-loss');
    $('td.match-' + team + '.match-1-1').removeClass('match-highlight-tie');
    $('td.match-' + team).filter('.match-1-0 .match-0-1 .match-0-0').removeClass('match-highlight');
  }).on('mouseenter', 'td.match:not(.match-na)', function (evt) {
    var radiant = $(this).data('radiant'), dire = $(this).data('dire');
    var radiantName = $('th.team-' + radiant).addClass('team-highlight').eq(0).text();
    var direName = $('th.team-' + dire).addClass('team-highlight').eq(0).text();

    // add overlay
    $('.matchup-overlay').fadeOut(100, function () { $(this).remove(); });
    $('<div class="matchup-overlay" data-radiant="' + radiant + '" data-dire="' + dire + '"></div>').html(
      '<div class="matchup-overlay-team1-score">' + $(this).data('radiant-score') + '</div>' +
      '<div class="matchup-overlay-team1-name">' + radiantName + '</div>' +
      '<div class="matchup-overlay-team2-score">' + $(this).data('dire-score') + '</div>' +
      '<div class="matchup-overlay-team2-name">' + direName + '</div>' +
      '<div class="matchup-overlay-game-links">' +
        '<strong>G1: </strong>' +
          ($(this).data('match1-class') == 'TBA' ? 'TBA' :
            '<a href="' + $(this).data('match1-url') + '"' +
            ($(this).data('match1-class') == 'Live' ? ' class="live"' : '') +
            '>' + $(this).data('match1-class') + '</a>') +
          ' | ' +
        '<strong>G2: </strong>' +
          ($(this).data('match2-class') == 'TBA' ? 'TBA' :
            '<a href="' + $(this).data('match2-url') + '"' +
            ($(this).data('match2-class') == 'Live' ? ' class="live"' : '') +
            '>' + $(this).data('match2-class') + '</a>') +
      '</div>').hide().appendTo('body')
      .css("top", $(this).offset().top - 14)
      .css("left", $(this).offset().left - 35)
      .fadeIn(100);
  });
  $('body').on('mouseleave', '.matchup-overlay', function (evt) {
    var radiant = $(this).data('radiant'), dire = $(this).data('dire');
    $('th.team-' + radiant).removeClass('team-highlight');
    $('th.team-' + dire).removeClass('team-highlight');
    $(this).fadeOut(100, function () { $(this).remove(); });
  });
});

