Quiz = new Mongo.Collection("quiz");
Quiz.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
