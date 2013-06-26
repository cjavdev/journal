Journal.Routers.JournalRouter = Backbone.Router.extend({
  routes: {
    "" : "postsListView",
    "/posts/:id" : "postShowView"
  },
  postsListView: function () {
    console.log("in photolist view route");
    var col = new Journal.Collections.Posts();
    // col.create({title: "test", body: "body" });
    col.fetch({success: function(){
      var view = new Journal.Views.PostsListView(col);
      $('body').html(view.render().$el);
    }});
  },
  postShowView: function (id) {

  }
});