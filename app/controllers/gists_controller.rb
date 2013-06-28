class GistsController < ApplicationController

  def index
    @gists = Gist.all
    render :json => @gists
  end
end
