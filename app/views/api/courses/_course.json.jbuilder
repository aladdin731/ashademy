json.extract! course, :id, :course_name, :description, :course_type, :image_url, :mentor_id
json.reviewIds course.reviews.pluck(:id) || []
json.requestIds course.requests.pluck(:id) || []
json.average_rating course.average_rating 

if course.tags.length != 0 
  json.tags do 
    course.tags.each do |tag| 
      json.set! tag.id do 
        json.extract! tag, :id, :tag_name
      end
    end
  end
else
  json.tags ({})
end

json.instructor do 
    json.partial! "api/users/info", user: course.instructor
end 



