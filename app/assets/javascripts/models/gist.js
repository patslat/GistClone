GistApp.Models.Gist = Backbone.Model.extend({

	parse: function (response) {
		var favorite = response.favorite
		response.favorite = new GistApp.Models.Favorite(favorite);
		return response;
	},

	toJSON: function () {
		var clone = _.clone(this.attributes)
		clone.favorite = []
		return clone;
	}

});
