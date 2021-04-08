class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence:true 
    validates :username, :session_token, uniqueness: true 
    validates :password, length:{minimum: 6, allow_nil: true}

    attr_reader :password 
    after_initialize :ensure_session_token 

    has_many :courses,
        foreign_key: :mentor_id,
        class_name: 'Course'
    
    has_many :requests,
        foreign_key: :mentee_id,
        class_name: 'Request'

    has_many :received_requests,
        through: :courses,
        source: :requests
    
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
