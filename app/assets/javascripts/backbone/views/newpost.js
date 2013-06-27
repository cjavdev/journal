Journal.Views.NewPostView = Backbone.View.extend({
  initialize: function(post, posts) {
    this.model = post;
    this.collection = posts;
  },
  render: function () {
    var that = this;
    var renderedContent = JST['backbone/templates/newpost']({post: this.model});

    that.$el.html(renderedContent);
    return that;
  },
  events: {
    "submit form": "submitForm"
  },
  submitForm: function (event) {
    var that = this;
    event.preventDefault();
    this.collection.add(this.model);
    this.model.save($(event.target).serializeJSON(), {
    success: function(response, model , request) {
      that.collection.trigger("specialThing", model.id);
    },
    error: function(model, response, request) {
      that.$el.find(".errors").text(response.responseText);
    }})
  }
});