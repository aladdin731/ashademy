json.extract! course, :id, :course_name, :description, :course_type, :image_url, :mentor_id
json.received_requestsIds course.requests.pluck(:id) || []