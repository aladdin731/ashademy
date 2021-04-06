class Course < ApplicationRecord
    TYPES = [
        'Frontend',
        'Backend',
        'Fullstack',
        'Big Data',
        'Project',
        'Resume',
        'Leetcode',
        'Interview',
        'OOD',
        'System Design',
    ].sort.freeze

    validates :course_name, :description, :course_type, presence:true 
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


end
