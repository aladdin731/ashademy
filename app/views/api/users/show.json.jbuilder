json.user do 
    json.partial! "api/users/user", user: @user
end 

if @user.courses.length != 0 
  json.courses do 
    @user.courses.each do |course| 
      json.set! course.id do 
        json.partial! "api/courses/course", course: course 
      end
    end
  end
else
  json.courses ({})
end

if @user.requested_courses.length != 0 
  json.requested_courses do 
    @user.requested_courses.each do |course| 
      json.set! course.id do 
        json.partial! "api/courses/course", course: course 
      end
    end
  end
else
  json.requested_courses ({})
end

if @user.requests.length != 0 
  json.requests do 
    @user.requests.each do |request| 
      json.set! request.id do 
        json.partial! "api/users/info", user: request.receiver 
        json.partial! "api/requests/request", request: request
      end
    end
  end
else
  json.requests ({})
end

if @user.received_requests.length != 0 
  json.received_requests do 
    @user.received_requests.each do |received_request| 
      json.set! received_request.id do 
        json.partial! "api/users/info", user: received_request.sender   
        json.partial! "api/requests/request", request: received_request
      end
    end
  end
else
  json.received_requests ({})
end







