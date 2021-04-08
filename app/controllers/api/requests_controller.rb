class Api::RequestsController < ApplicationController

    def index
        @requests = Request.all 
        render :index 
    end
    
    def create
        @request = Request.new(request_params)
        if @request.save 
            render :show
        else
            render @request.errors.full_messages
        end
    end

    def update
        @request = Request.find(params[:id])
        if @request.update_attributes(request_params)
            render :show
        else 
            render json: @request.errors.full_messages, status: 404
        end
    end

    

  private 
  def request_params
    params.require(:request).permit(:course_id, :start_time, :end_time, :status, :mentee_id)
  end
end
