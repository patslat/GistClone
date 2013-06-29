class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id
  has_one :favorite
end
