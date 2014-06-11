exports.getRides = function(req, res) {
  console.log('lol');
  res.setHeader('Content-type', 'application/json');
  res.json({
    rideOne: 'one',
    rideTwo: 'two'
  });
};
