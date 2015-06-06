Meteor.publish("allStandards", function(){
  return Standards.find();
});
