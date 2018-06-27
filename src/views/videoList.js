var VideoListView = Backbone.View.extend({
  
  // events: {
  //   'click': 'clicked'
  // },
  
  // clicked: function() {
  //   console.log('clicked');
  // },
  
  initialize: function() {
  },

  render: function() {

    this.$el.children().detach();
    this.$el.html(this.template());
    
    new VideoListEntryView({
      el: this.$('.a'),
      model: this.collection[0] 
    }).render();
    
    new VideoListEntryView({
      el: this.$('.b'),
      model: this.collection[1] 
    }).render();
    
    new VideoListEntryView({
      el: this.$('.c'),
      model: this.collection[2] 
    }).render();
     
    new VideoListEntryView({
      el: this.$('.d'),
      model: this.collection[3] 
    }).render();
     
    new VideoListEntryView({
      el: this.$('.e'),
      model: this.collection[4] 
    }).render();
    
    return this;    
  },

  template: templateURL('src/templates/videoList.html')

});



// this.collection.each(this.renderVideo, this);
//     return this;


// renderVideo: function(video) {
  //   this.$('.video-list').append(
  //     new VideoListEntryView({
  //       model: video
  //     }).render().el
  //   );
  // },
