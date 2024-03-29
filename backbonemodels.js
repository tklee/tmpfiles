(function ($) {
  var client = require('bitcoin');
  tempvar2 = 0;
  
  Friend = Backbone.Model.extend({
    //Create a model to hold friend atribute
    name: null
  });
  
  Friends = Backbone.Collection.extend({
    //This is our Friends collection and holds our Friend models
    initialize: function (models, options) {
      this.bind("add", options.view.addFriendLi);
      //Listen for new additions to the collection and call a view function if so
      //this.bind("add", options.view.increaseCounter);
    }
  });
  
//  AppView = Backbone.View.extend({
//    el: $("body"),
//    initialize: function () {
//      this.friends = new Friends( null, { view: this });
//      //Create a friends collection when the view is initialized.
//      //Pass it a reference to this view to create a connection between the two
//    },
//    events: {
//      "click #add-friend":  "showPrompt",
//    },
//    showPrompt: function () {
//      var friend_name = prompt("Who is your friend?");
//      var friend_model = new Friend({ name: friend_name });
//      //Add a new friend model to our friend collection
//      this.friends.add( friend_model );
//    },
//    addFriendLi: function (model) {
//      //The parameter passed is a reference to the model that was added
//      $("#friends-list").append("<li>" + model.get('name') + "</li>");
//      //Use .get to receive attributes of the model
//    }
//  });
  
//  var appview = new AppView;



  Vote = Backbone.Model.extend({
     upvotedby: null

   });

   Votes = Backbone.Collection.extend({
     initialize: function (models, options) {
       this.bind("add", options.view.increaseVotes);

     }

     //howmany: this.length



   });
  Diff = Backbone.Model.extend({
     di: null

   });

   Diffs = Backbone.Collection.extend({
     initialize: function (models, options) {
       this.bind("add", options.view.increaseDiff);

     }

     //howmany: this.length



   });

   AppView2 = Backbone.View.extend({
     //tempvar: 0,
     el: $("body"),
     initialize: function () {
       this.friends = new Friends( null, { view: this });
       //this.tempvar = 0;

       this.votes = new Votes( null, { view: this });
      // this.tempvar = this.votes.length;
       this.diffs = new Diffs( null, { view: this });
 //      for (var i = 0; i < 5; i++) {
 //        listArticle();
 //      }


     },

     events: {    
      "click #add-friend":  "showPrompt",
      "click #upvote-button": "showPrompt2",
      "click #diff-button": "showPrompt3",
     },
     
     //increaseCounter: function () {
       //tempvar2 = tempvar2 + 1;
     //}

//     listArticle: function () {
//       $("#article-list").append("<li> HotArticle </li>");
//
//     }

     showPrompt3: function () {
       var diff_model = new Diff({ di: client.getDifficulty() });
       this.diffs.add( diff_model );


     },
     
     showPrompt2: function () {
       var vote_model = new Vote({ upvotedby: 'user2' });
       this.votes.add( vote_model );
     },

     //findLength: function() {
     //  return this.votes.length;

     //}
     showPrompt: function () {
       //var vote_model = new Vote({ upvotedby: 'user2' });
       //this.votes.add( vote_model );

       var friend_name = prompt("Who is your friend?");
       var friend_model = new Friend({ name: friend_name });
       //Add a new friend model to our friend collection
       this.friends.add( friend_model );
     },

     increaseDiff: function (model) {
       $("#diff-count").append("<li>" + model.get('di') + "</li>");


     },
     
     increaseVotes: function (model) {
       tempvar2 = tempvar2 + 1;

      // if (tempvar2 > 3) { $("#vote-count").remove("<li></li>"); }

//       $("#vote-count").add("#vote-count");
//
//       if (tempvar2 > 3) { $("#vote-count").remove("<li></li>"); }
//
      if (tempvar2 < 6) {  $("#vote-count").append("<li>" + tempvar2 + "</li>");  }

      else {
//        $("#vote-count").append("<ul id=\"vote count\"><li>" + tempvar2 + "</li></ul>");
//        $("#vote-count").append("<li>" + tempvar2 + "</li>");
        $("#vote-count").replaceWith("<li>" + tempvar2 + "</li>");
      
        $("#vote-count").append("<ul id=\"vote-count\"><li>" + tempvar2 + "</li></ul>");
      }
      
       //possibly change the append to something like a "change" function
     },


    addFriendLi: function (model) {
      //The parameter passed is a reference to the model that was added
      $("#friends-list").append("<li>" + model.get('name') + "</li>");
      //Use .get to receive attributes of the model
    }


     //increaseVotes: function (collection) {
     //$("#vote-count").append("<li>" + collection.length + "</li>");
  });
  
  var appview2 = new AppView2;

})(jQuery);
