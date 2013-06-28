GistApp.Views.GistShow = Backbone.View.extend({

	template: JST['gists/show'],

	render: function(){
		var renderedTemplate = this.template({
			gist: this.model
		});

		this.$el.html(renderedTemplate);
		return this;
	}

});