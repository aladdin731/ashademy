json.extract! user, :id, :username, :image_url
json.courseIds user.courses.pluck(:id) || []
json.requestIds user.requests.pluck(:id) || []
json.received_requestsIds user.received_requests.pluck(:id) || []

if user.received_requests.length != 0 
  json.received_requests do 
    user.received_requests.each do |rr| 
      json.set! rr.id do 
        json.extract! rr, :id, :course_id
      end
    end
  end
else
  json.received_requests ({})
end