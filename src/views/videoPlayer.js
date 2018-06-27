var VideoPlayerView = Backbone.View.extend({
  

  initialize: function() {
    
    this.id = this.collection.models[0].attributes.id;
    this.titles = this.collection.models[0].attributes.snippet.title;
    this.descriptions = this.collection.models[0].attributes.snippet.description;
    this.render();  
  },
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template({
      titles: this.titles, 
      descriptions: this.descriptions, 
      id: this.id
      
    }));
    
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
