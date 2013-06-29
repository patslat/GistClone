class GistsController < ApplicationController

  def index
    @gists = current_user.gists.includes(:favorite)
    render :json => @gists.to_json(:include => :favorite)
  end
end
