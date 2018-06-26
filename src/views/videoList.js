var VideoListView = Backbone.View.extend({
  
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    console.log(this.collection);
    new VideoListEntryView({
      
      el: this.$('.video-list'),
      model: window.exampleVideoData[4]
    }).render();
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
