json.extract! review, :id, :rating, :body, :course_id, :reviewer_id, :created_at
json.author do 
    json.partial! "api/users/info", user: review.author
end 
