json.user do 
    json.partial! "api/users/user", user: @user
end 

if @user.courses.length != 0 
  json.courses do 
    @user.courses.each do |course| 
      json.set! course.id do 
        json.extract! course, :id, :course_name, :image_url 
      end
    end
  end
else
  json.courses ({})
end





