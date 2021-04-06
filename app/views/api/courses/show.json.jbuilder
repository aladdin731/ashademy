json.course do 
    json.extract! @course, :id, :course_name, :description, :course_type, :image_url, :mentor_id
end

json.tags do 
  @course.tags.each do |tag|
    json.set! tag.id do
        json.extract! tag, :id, :tag_name  
    end
  end
end