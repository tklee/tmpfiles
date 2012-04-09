(function ($) {


   Vote = Backbone.Model.extend({
     upvotedby: null

   });

   Votes = Backbone.Collection.extend({

     initialize: function (models, options) {
       this.bind("add", options.view.increaseVotes);

     },



   });

   AppView2 = Backbone.View.extend({

     el: $("body"),
     initialize: function () {

       this.votes = new Votes( null, { view: this });

     },

     events: {
       "click #upvote-button": "showPrompt",
     },
     

     showPrompt: function () {
       var vote_model = new Vote({ upvotedby: "user2" });
       this.votes.add( vote_model );

     }
     increaseVotes: function (model) {

       $("#vote-count").append("<li>" + model.get('upvotedby') + "</li>");
       //possibly change the append to something like a "change" function
     }
  });
  
  var appview2 = new AppView2;

})(jQuery);


