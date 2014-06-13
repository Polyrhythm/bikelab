/** @jsx React.DOM */

var totalDistanceComponent = require('./views/distance');

var renderComponent = function(model) {
  React.renderComponent(
    <totalDistanceComponent
      data={model}
    />,
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
  var token = '7yB05YjPVp1o9S1SZ1CbknGPKlHyvQab';

  requestRides(userId, token);
};

$(document).ready(function() {
  init();
});
