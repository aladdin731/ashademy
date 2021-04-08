json.request do 
    json.partial! "api/requests/request", request: @request
end


json.sender do 
    json.partial! "api/users/user", user: @request.sender 
end 


json.receiver do 
    json.partial! "api/users/user", user: @request.receiver
end 

