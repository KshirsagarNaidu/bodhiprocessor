// this controller manages the template that lists all the available standards
// StandardsController = AppController.extend({
//   template: 'standards',
//   path: '/std',
//   waitOn : function() {
//     console.log('there');
//     return Meteor.subscribe('allStandards');
//   },
//   data : function() {
//     console.log('hi');
//     return Standards.find();
//   }
// });
StandardsController = AppController.extend({
  template: 'standards',
  data: function(){
    var data = { "standards" : Standards.find() };
    return data;
  },
  waitOn: function() {
    // Wait for the tags and standards to be available
    return this.subscribe('allStandards');
  }
});
