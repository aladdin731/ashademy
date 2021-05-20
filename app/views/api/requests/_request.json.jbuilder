json.extract! request, :id, :course_id, :mentee_id, :start_time, :end_time, :status 
json.sender do 
    json.partial! "api/users/info", user: request.sender
end 
json.receiver do 
    json.partial! "api/users/info", user: request.receiver
end 
json.course do 
    json.partial! "api/courses/course", course: request.course
end 