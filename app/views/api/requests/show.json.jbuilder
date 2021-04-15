json.request do 
    json.partial! "api/requests/request", request: @request
    json.sender @request.sender.username
    json.receiver @request.receiver.username 
end


json.sender do 
    json.partial! "api/users/user", user: @request.sender 
end 


json.receiver do 
    json.partial! "api/users/user", user: @request.receiver
end 

json.course do 
    json.extract! @request.course, :id, :course_name, :description, :course_type, :image_url, :mentor_id
    json.reviewIds @request.course.reviews.pluck(:id) || []
end 

