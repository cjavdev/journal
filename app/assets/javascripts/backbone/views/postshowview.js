Journal.Views.PostShowView = Backbone.View.extend({
  events: {
    "dblclick #title-span": "editTitle",
    "dblclick #body-span" : "editBody",
    "dblclick #post-show" : "save"
  },
  initialize: function(post) {
    this.model = post;

  },
  render: function () {
    var that = this;
    var renderedContent = JST['backbone/templates/postshowview']({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },
  editTitle: function (event) {
    console.log("double clicked title");

    var input = $("<input>").
        attr("type", "text").
        attr("name", "post[title]").
        attr("id", "title").
        val(this.model.escape("title"));

    this.$el.find("h1").html(input);
  },
  editBody: function (event){
    var input = $("<input>").
        attr("type", "text").
        attr("name", "post[body]").
        attr("id", "body").
        val(this.model.escape("body"));

    this.$el.find("p").html(input);

    console.log("double clicked body");
  },
  save: function (event) {
    var that = this;
    if(event.target == event.currentTarget) {
      console.log("updating");
      this.model.save(this.$el.find("form").serializeJSON(), {
        success: function () {
          that.render();
        }
      });
    }
  }
});