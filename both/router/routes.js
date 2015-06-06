Router.route('/', {
  name: 'home'
});

Router.route('/dashboard');

Router.route('tag/:tag', {
  name: 'taggedCourses'
});

Router.route('course/:_id', {
  name: 'course'
});

Router.route('course/:_id/info', {
  name: 'courseInfo'
});

Router.route('/singleresourcepage', {
  name: 'testsingleResourcePage'
});

Router.route('/singleresourcepage/info', {
  name: 'testcourseInfo'
});

Router.route('license', {
  name: 'licenseQuestions'
});

Router.map(function() {
  // learn route lists all the courses available
  this.route('learn', {
    path: '/learn',
    controller: 'LearnController'
  });
  // teach route alls user to add a course
  this.route('teach', {
    path: '/teach',
    controller: 'TeachController'
  });
  // show list of available standards
  this.route('standards', {
    path: '/std',
    controller: 'StandardsController'
  });
  // show specific standard resources
  this.route('standard', {
    path: '/std/:standard'
  });
  // show the available courses and other information about a subject taught under a standard
  this.route("standardSubject", {
    path: '/std/:standard/sub/:subject',
    controller: 'ShowSubjectForStandardController'
  });
  this.route("questionPaperForSubjectByYear");
  this.route("courseForstandardSubject");
  this.route("standard12", {
    path: '/std/xii'
  });
  this.route("standard10", {
    path: '/std/x'
  });
});

Router.onAfterAction(function() {
  document.title = Meteor.settings.public.name + this.route.getName();
});
