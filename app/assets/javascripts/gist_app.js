window.GistApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var that = this;
		this.gists = new GistApp.Collections.Gists();
		this.$rootEl = $("#content")
		this.gists.fetch({
			success: function () {
		    new GistApp.Routers.Gists(that.$rootEl, that.gists);
				Backbone.history.start();
			}
		})

  }
};

$(document).ready(function(){
  GistApp.initialize();

});