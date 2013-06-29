GistApp.Collections.Favorites = Backbone.Collection.extend({

  model: GistApp.Models.Favorite,
	url: "gists/" + this.gist_id + '/favorite'

});
