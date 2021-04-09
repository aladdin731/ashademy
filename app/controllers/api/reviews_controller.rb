class Api::ReviewsController < ApplicationController
    def create 
         @review = current_user.reviews.new(review_params)
         if @review.save
            render :show 
         else
            render json: @request.errors.full_messages, status: 422 
         end

    end

    private 
    def review_params
        params.require(:review).permit(:course_id, :body, :rating)
    end
end
