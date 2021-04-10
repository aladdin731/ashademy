class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence:true 
    validates :username, :session_token, uniqueness: true 
    validates :password, length:{minimum: 6, allow_nil: true}

    attr_reader :password 
    after_initialize :ensure_session_token, :ensure_profile 

    def ensure_profile
        self.image_url ||= "http://5b0988e595225.cdn.sohucs.com/images/20190420/2e40ad9c68e7497284e2e4f9e910c1f0.jpeg"
    end

    has_many :courses,
        foreign_key: :mentor_id,
        class_name: 'Course'
    
    
    has_many :requests,
        foreign_key: :mentee_id,
        class_name: 'Request'

    has_many :requested_courses,
        through: :requests,
        source: :course 

    has_many :received_requests,
        through: :courses,
        source: :requests
    
    has_many :reviews,
        foreign_key: :reviewer_id,
        class_name: 'Review'
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
        nil 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save 
        self.session_token
    end




end
