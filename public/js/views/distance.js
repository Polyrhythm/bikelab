/** @jsx React.DOM */

var totalDistanceComponent = React.createClass({
  componentWillMount: function() {
    console.log(this.props.model);
  },

  render: function() {
    return (
      <div className="total-distance">
        Total distance component
      </div>
    );
  }
});

module.exports = totalDistanceComponent;
