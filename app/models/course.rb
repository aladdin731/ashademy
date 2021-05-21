class Course < ApplicationRecord
    TYPES = [
        'Frontend',
        'Backend',
        'Fullstack',
        'Data',
        'Resume',
        'Leetcode',
        'Interview',
        'OOD',
        'System Design',
    ].sort.freeze

    validates :course_name, :description, :course_type, :image_url, presence:true 
    validates :course_name, uniqueness:true 
    validates :course_type, inclusion: { in: TYPES }

    belongs_to :instructor,
        foreign_key: :mentor_id,
        class_name: 'User'

    has_many :course_tags,
        foreign_key: :course_id,
        class_name: 'CourseTag'

    has_many :tags,
        through: :course_tags,
        source: :tag 
    
    has_many :requests,
        foreign_key: :course_id,
        class_name: 'Request',
        dependent: :destroy

    has_many :reviews,
        foreign_key: :course_id,
        class_name: 'Review'
    
    def average_rating
        self.reviews.length > 0 ?  self.reviews.average(:rating) : 0;
    end


end
