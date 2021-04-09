class Review < ApplicationRecord
    validates :rating, inclusion: { in: (1..5) }
    validates :body, presence: true 

    belongs_to :course,
        foreign_key: :course_id,
        class_name: 'Course'

    belongs_to :author,
        foreign_key: :reviewer_id
        class_name: 'User'
end
