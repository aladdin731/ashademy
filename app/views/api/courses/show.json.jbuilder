json.course do 
    json.extract! @course, :id, :course_name, :description, :course_type, :image_url, :mentor_id
    json.received_requestsIds @course.requests.pluck(:id) || []
end


if @course.tags.length != 0 
  json.tags do 
    @course.tags.each do |tag| 
      json.set! tag.id do 
        json.extract! tag, :id, :tag_name
      end
    end
  end
else
  json.tags ({})
end


json.instructor do 
  json.partial! "api/users/user", user: @course.instructor
end 


if @course.requests.length != 0 
  json.received_requests do 
    @course.requests.each do |request| 
      json.set! request.id do 
        json.partial! "api/requests/request", request: request 
      end
    end
  end
else
  json.received_requests ({})
end


