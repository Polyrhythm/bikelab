/** @jsx React.DOM */

var totalDistanceComponent = React.createClass({
  componentDidMount: function() {
    console.log(this.props.data);
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
