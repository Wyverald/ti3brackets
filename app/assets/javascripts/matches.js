$(function () {
  $('table').on('mouseenter', 'th.team', function (evt) {
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
  })
})();

