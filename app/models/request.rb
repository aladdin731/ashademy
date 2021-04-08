class Request < ApplicationRecord
    STATUS_STATES = %w(APPROVED DENIED PENDING).freeze
    after_initialize :assign_pending_status
    validates :end_time, :start_time, :status, presence:true 
    validates :status, inclusion: STATUS_STATES
    
    belongs_to :course 
    belongs_to :sender,
        foreign_key: :mentee_id,
        class_name: 'User'
    
    has_one :receiver,
        through: :course,
        source: :instructor
    
    
    private

    def assign_pending_status
        self.status ||= 'PENDING'
    end

end
