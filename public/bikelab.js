(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */

var totalDistanceComponent = require('./views/distance');

var renderComponent = function(model) {
  React.renderComponent(
    totalDistanceComponent(
      {data:model}
    ),
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

},{"./views/distance":2}],2:[function(require,module,exports){
/** @jsx React.DOM */

var totalDistanceComponent = React.createClass({displayName: 'totalDistanceComponent',
  componentDidMount: function() {
    console.log(this.props.data);
  },

  render: function() {
    return (
      React.DOM.div( {className:"total-distance"}, 
        "Total distance component"
      )
    );
  }
});

module.exports = totalDistanceComponent;

},{}]},{},[1,2])