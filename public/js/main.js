/** @jsx React.DOM */

var totalDistanceComponent = require('./views/distance');

var renderComponent = function(model) {
  React.renderComponent(
    <totalDistanceComponent data={model}/>,
    $('.app')[0]
  );
};

var requestRides = function(userId, token) {
  var url = '/api/' + token + '/user/' + userId + '/rides';

  $.ajax({
    url: url,
    success: function(data) {
      renderComponent(data);
    },
    error: function(err) {
      console.error(err);
    }
  });
};

var init = function() {
  var userId = '1683758';
  var token = 'bacd23e02a540a947a0b5394f8dd2742';

  requestRides(userId, token);
};

$(document).ready(function() {
  init();
});
