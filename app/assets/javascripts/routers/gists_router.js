GistApp.Routers.Gists = Backbone.Router.extend({

	initialize: function ($rootEl, collection) {
		this.$rootEl = $rootEl;
		this.collection = collection;
	},

	routes: {
		"": "index"
	},

	index: function () {
		var view = new GistApp.Views.GistsIndex({
			collection: this.collection
		});

		this.$rootEl.html(view.render().$el);
	},

});