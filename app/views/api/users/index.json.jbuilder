
  @users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
      json.courseIds []
    end
  end





