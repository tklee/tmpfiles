
(function ($) {
  
  Friend = Backbone.Model.extend({
    //Create a model to hold friend atribute
    name: null
  });
  
  Friends = Backbone.Collection.extend({
    //This is our Friends collection and holds our Friend models
    initialize: function (models, options) {
      this.bind("add", options.view.addFriendLi);
      //Listen for new additions to the collection and call a view function if so
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



   });

   AppView2 = Backbone.View.extend({

     el: $("body"),
     initialize: function () {
       this.friends = new Friends( null, { view: this });

       this.votes = new Votes( null, { view: this });

     },

     events: {    
      "click #add-friend":  "showPrompt",
      "click #upvote-button": "showPrompt2",
     },
     
     showPrompt2: function () {
       var vote_model = new Vote({ upvotedby: 'user2' });
       this.votes.add( vote_model );
     },


     showPrompt: function () {
       //var vote_model = new Vote({ upvotedby: 'user2' });
       //this.votes.add( vote_model );

       var friend_name = prompt("Who is your friend?");
       var friend_model = new Friend({ name: friend_name });
       //Add a new friend model to our friend collection
       this.friends.add( friend_model );
     },
     increaseVotes: function (model) {

       $("#vote-count").append("<li>" + model.get('upvotedby') + "</li>");
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
