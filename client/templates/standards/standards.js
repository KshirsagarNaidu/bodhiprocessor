Template.standardsCard.helpers({
  truncateSubjects : function(max, array) {
    var result = { "truncatedSubjects" : _.first(array, max)};
    return result;
  }
});
