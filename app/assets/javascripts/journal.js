Journal = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($sidebar, $content) {
    var that = this;
    var posts = new Journal.Collections.Posts();
    posts.fetch({success: function(){
      that.installSidebar($sidebar, posts);
      new Journal.Routers.JournalRouter($content, posts);
      Backbone.history.start();
    }});
  },
  installSidebar: function ($sidebar, posts) {
    var view = new Journal.Views.PostsListView(posts);
    $sidebar.html(view.render().$el);
  }
};
