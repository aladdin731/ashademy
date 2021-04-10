json.course do 
    json.partial! "api/courses/course", course: @course 
end


if @course.tags.length != 0 
  json.tags do 
    @course.tags.each do |tag| 
      json.set! tag.id do 
        json.extract! tag, :id, :tag_name
      end
    end
  end
else
  json.tags ({})
end


json.instructor do 
  json.partial! "api/users/user", user: @course.instructor
end 


if @course.requests.length != 0 
  json.received_requests do 
    @course.requests.each do |request| 
      json.set! request.id do 
        json.partial! "api/requests/request", request: request 
      end
    end
  end
else
  json.received_requests ({})
end

if @course.reviews.length != 0 
  json.reviews do 
    @course.reviews.each do |review| 
      json.set! review.id do 
        json.partial! '/api/reviews/review', review: review
        json.author do
          json.partial! '/api/users/info', user: review.author
        end
      end
    end
  end
else
  json.reviews ({})
end




