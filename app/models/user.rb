# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)
#  password_digest :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :password, :username, :favorite_gists_ids
  attr_reader :password

  validates :username, :password_digest, :presence => true
  validates :password, :length => { :minimum => 3 }

  has_many :gists
  has_many :favorites
  has_many :favorite_gists, through: :favorites, source: :gist

  def password
    @password || self.password_digest
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def verify_password(password)
    BCrypt::Password.new(self.password_digest) == password
  end
end
