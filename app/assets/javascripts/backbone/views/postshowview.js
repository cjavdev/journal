Journal.Views.PostShowView = Backbone.View.extend({
  initialize: function(post) {
    this.model = post
  },
  render: function () {
    var that = this;
    var renderedContent = JST['backbone/templates/postshowview']({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
});