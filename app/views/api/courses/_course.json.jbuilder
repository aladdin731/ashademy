json.extract! course, :id, :course_name, :description, :course_type, :image_url, :mentor_id
json.received_requestsIds course.requests.pluck(:id) || []
json.reviewIds course.reviews.pluck(:id) || []
json.average_rating course.average_rating 


