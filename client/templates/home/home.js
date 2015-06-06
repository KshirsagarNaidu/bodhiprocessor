Template.home.rendered = function() {

};

Template.home.helpers({
  projectName: function(){
    return Meteor.settings.public.name;
  }
});
