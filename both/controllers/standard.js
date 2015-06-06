// controller for template that displays the standards/s resources (eg: courses, quizes, etc...)
StandardController = AppController.extend({
  path: "/std/:standard",
  waitOn: function() {
    return Meteor.subscribe('standard', this.params.standard);
  },
  data: function(){
    return standards.findOne({'standard' : this.params.standard });
  }
});
