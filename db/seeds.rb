User.create(:username => "patrick", :password => "123" )

Gist.create(:user_id => 1, :title => "hello")
Gist.create(:user_id => 1, :title => "patrick")
Gist.create(:user_id => 1, :title => "how")
Gist.create(:user_id => 1, :title => "are")
Gist.create(:user_id => 1, :title => "you")
Gist.create(:user_id => 1, :title => "sincerely")
Gist.create(:user_id => 1, :title => "sol")

4.times do |n|
  Favorite.create(:user_id => 1, :gist_id => n)
end