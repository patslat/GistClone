GistApp.Views.GistShow = Backbone.View.extend({

	intialize: function(){
		listenTo(this.model, 'change', this.render);

	},

	template: JST['gists/show'],

	events: {
		'click #favorite': 'favorite',
		'click #unfavorite': 'unfavorite'
	},

	render: function(){
		var renderedTemplate = this.template({
			gist: this.model
		});

		this.$el.html(renderedTemplate);

		return this;
	},

	favorite: function(event){
		var that = this;
		$.ajax({
			url: 'gists/' + this.model.id + '/favorite',
			type: 'post',
			success: function(data){
				var favorite = new GistApp.Models.Favorite(data);
				that.model.set('favorite', favorite);
				console.log(event.target)
				$(event.target).parent().children().toggleClass('favorited');
			},
			error: function(){
			}

		});

	},

	unfavorite: function(event){
		var that = this;
			$.ajax({

				url: 'gists/' + this.model.id + '/favorite',
				type: 'delete',
				success: function(){
					$(event.target).parent().children().toggleClass('favorited');
					that.model.set('favorite', null);
				},
				error: function(){
				}

			});

		},


});