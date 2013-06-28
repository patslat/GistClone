GistApp.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],


	render: function () {
		var renderedTemplate = this.template({
			gists: this.collection
		});
		this.$el.html(renderedTemplate);
		return this;
	}

});
