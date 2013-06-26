Journal.Views.PostsListView = Backbone.View.extend({

  events: {
    "click button": "deletePost"
  },

  initialize: function(posts) {
    var that = this;
    that.collection = posts;
    var renderedCallback = that.render.bind(that);
    that.collection.on('add', renderedCallback);
    that.collection.on('change', renderedCallback);
    that.collection.on('remove', renderedCallback);
  },

  render: function () {
    var that = this;

    var renderedContent = JST['backbone/templates/postslistview'] ({
      posts: that.collection
    });
    that.$el.html(renderedContent);
    return that;
  },

  deletePost: function (event){
    console.log("delete!!!");
    console.log(event);
    var that = this;
    var id = $(event.target).attr("data-id");
    that.collection.remove(id);

  },
});