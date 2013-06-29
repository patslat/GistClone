GistApp.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],

	events: {
		"click #gist-link": "show"
	},

	render: function () {
		var renderedTemplate = this.template({
			gists: this.collection
		});
		this.$el.html(renderedTemplate);
		return this;
	},

	show: function (event) {
		var id = $(event.target).attr("data-id");
		var gist = this.collection.get(id);
		var view = new GistApp.Views.GistShow({
			model: gist
		});
		$(event.target).parent().html(view.render().$el)
	}

});
