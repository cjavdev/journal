Journal.Routers.JournalRouter = Backbone.Router.extend({

  initialize: function($rootEl, posts) {
    this.$rootEl = $rootEl;
    this.posts = posts;
    var that = this;
    this.listenTo(this.posts, "specialThing", function(id) {
      that.navigate("#/posts/" + id);
    });
  },

  routes: {
    "" : "newPostView",
    "posts/:id" : "postShowView",
    "new" : "newPostView"
  },
  // postsListView: function () {
  //   var view = new Journal.Views.PostsListView(this.posts);
  //   this.$rootEl.html(view.render().$el);
  // },

  postShowView: function (id) {
    var that = this;
    var post = this.posts.get(id);
    var view = new Journal.Views.PostShowView(post);
    that.$rootEl.html(view.render().$el);
  },

  newPostView: function () {
    var that = this;
    var post = new Journal.Models.Post();
    var view = new Journal.Views.NewPostView(post, this.posts);
    that.$rootEl.html(view.render().$el);
  }
});