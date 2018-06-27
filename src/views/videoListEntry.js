var VideoListEntryView = Backbone.View.extend({
  
  events: {
    
    'click .video-list-entry-title': 'select'
  },
  
  select: function() {
    //VideoPlayerView   
    console.log('clicked');
  },
  
  
  initialize: function() {
    $el:'.video-list-entry-title';
    
    // $('.video-list-entry-title').on('click', function() {  
    //   console.log('clicked');
    // });
    
    
    this.thumbnail = this.model.attributes.snippet.thumbnails.default.url;
    this.title = this.model.attributes.snippet.title;
    this.description = this.model.attributes.snippet.description;
    this.render();    
  },
  
  render: function() {
    
    this.$el.html(this.template({
      title: this.title, 
      description: this.description, 
      thumbnail: this.thumbnail
    }));
    
    return this;
    
   
    // this.$el.html(this.template({ title :this.model.attributes.snippet.title,
    //   description :this.model.attributes.snippet.description,
    //   thumbnail :this.model.attributes.snippet.thumbnails.default.url}));
    // //this.$el.html(this.template({ thumbnail :this.model.attributes.snippet.thumbnail}));
    // return this;
    // this.$el.html(this.template(this.model.attributes));
    // return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

// video-list-entry media
//   media-left
//   media-object
// video-list-entry-title
// video-list-entry-detail