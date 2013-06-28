GistApp.Routers.Gists = Backbone.Router.extend({

	initialize: function ($rootEl, collection) {
		this.$rootEl = $rootEl;
		this.collection = collection;
	},

	routes: {
		"": "index",
		"gists/:id": "show"
	},

	index: function () {
		var view = new GistApp.Views.GistsIndex({
			collection: this.collection
		});

		this.$rootEl.html(view.render().$el);
	},

	show: function (id) {
		var gist = this.collection.get(id);
		var view = new GistApp.Views.GistShow({
			model: gist
		});
		this.$rootEl.html(view.render().$el);
	}
});