class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render :index 
    end
    
    def create 
         @review = Review.new(review_params)
         if @review.save
            render :show 
         else
            render json: @review.errors.full_messages, status: 422 
         end

    end

    private 
    def review_params
        params.require(:review).permit(:course_id, :body, :rating, :reviewer_id)
    end
end
