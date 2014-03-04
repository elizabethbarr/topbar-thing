// Main.View is responsible for instantiationg
// the TopBarView and ???

var MainView = Backbone.View.extend({

  className: 'container',

  initialize: function(options){

    window.user = new User();
    user.fetch();

    setInterval(function(){
      user.fetch();
    },  5000);

    $('body').prepend(this.el)
    this.render();
  },

  render: function(){
    new TopBarView({model: user});

  }

});
