TeachController = AppController.extend({
  path: '/teach',
  template: 'teach',
  data: {

  },
  waitOn: function() {
    // Wait for the tags and standards to be available
    return [
      this.subscribe('tags'),
      this.subscribe('allStandards')
    ];
  }
});
