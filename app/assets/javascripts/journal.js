Journal = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function () {

    var col = new Journal.Collections.Posts();
    col.create({title: "test", body: "body" });
    var view = new Journal.Views.PostsListView(col);
    $('body').html(view.render().$el);

    new Journal.Routers.JournalRouter($('body'));
    Backbone.history.start();
  }

}
//
$(function(){
  new Journal.Routers.JournalRouter($('body'));
  Backbone.history.start()
});