class FavoritesController < ApplicationController

  def index
    @favorite_gists = current_user.favorite_gists
    render :json => @favorite_gists
  end

  def create
    @favorite = current_user.favorites.create({ gist_id: params[:gist_id] })
    @favorite.save
    render :json => @favorite
  end

  def destroy
    @favorite = Favorite.find_by_gist_id(params[:gist_id])
    @favorite.destroy

    render :json => nil
  end
end
