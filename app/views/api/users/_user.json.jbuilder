json.extract! user, :id, :username, :image_url
json.courseIds user.courses.pluck(:id) || []
json.received_coursesIds user.requested_courses.pluck(:id) || []
json.requestIds user.requests.pluck(:id) || []
json.received_requestsIds user.received_requests.pluck(:id) || []