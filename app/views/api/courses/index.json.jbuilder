@courses.each do |course|
  json.set! course.id do
    json.extract! course, :id, :course_name, :description, :type, :image_url, :mentor_id
  end
end