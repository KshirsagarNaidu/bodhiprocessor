Meteor.startup(function() {
  if (Standards.find().count() === 0) {
    console.log("Adding default standards.");
    var defaultstandards = [{
        "standard": "xii",
        "title": "XII",
        "longTitle": "12th Standard",
        "subjects": [{
          "subject": "mathematics",
          "title": "Mathematics"
        }, {
          "subject": "physics",
          "title": "Physics"
        }, {
          "subject": "chemistry",
          "title": "Chemistry"
        }, {
          "subject": "biology",
          "title": "Biology"
        }, {
          "subject": "business-studies",
          "title": "Business Studies"
        }, {
          "subject": "computer-science",
          "title": "Computer Science"
        }, {
          "subject": "economics",
          "title": "Economics"
        }]
      }, {
        "standard": "x",
        "title": "X",
        "longTitle": "10th Standard",
        "subjects": [{
          "subject": "mathematics",
          "title": "Mathematics"
        }, {
          "subject": "physics",
          "title": "Physics"
        }, {
          "subject": "chemistry",
          "title": "Chemistry"
        }, {
          "subject": "biology",
          "title": "Biology"
        }, {
          "subject": "english",
          "title": "English"
        }, {
          "subject": "hindi",
          "title": "Hindi"
        }, {
          "subject": "social-studies",
          "title": "Social Studies"
        }]
      }

    ];

    // Add default courses
    _.each(defaultstandards, function(standard) {
      console.log("Adding course:", standard.title);
      Standards.insert(standard);
    })
  }
});
