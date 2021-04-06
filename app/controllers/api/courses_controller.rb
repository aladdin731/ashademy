class Api::CoursesController < ApplicationController
    def index 
        @courses = Course.all 
        render :index 
    end


    def create 
        @course = course.new(course_params)
        if @course.save 
            if !Tag.pluck(:tag_name).any?{|tag_name| tag_name == tag_params[:tag_1]}
                tag1 = Tag.create!(tag_name: tag_params[:tag_1])
                CourseTag.create!(course_id: @course.id, tag_id: tag1.id)
            else
                CourseTag.create!(course_id: @course.id, tag_id: Tag.find_by(tag_name: tag_params[:tag_1]).id)
            end
            if !Tag.pluck(:tag_name).any?{|tag_name| tag_name == tag_params[:tag_2]}
                tag2 = Tag.create!(tag_name: tag_params[:tag_2])
                CourseTag.create!(course_id: @course.id, tag_id: tag2.id)
            else
                CourseTag.create!(course_id: @course.id, tag_id: Tag.find_by(tag_name: tag_params[:tag_2]).id)
            end
            if !Tag.pluck(:tag_name).any?{|tag_name| tag_name == tag_params[:tag_3]}
                tag3 = Tag.create!(tag_name: tag_params[:tag_3])
                CourseTag.create!(course_id: @course.id, tag_id: tag3.id)
            else
                CourseTag.create!(course_id: @course.id, tag_id: Tag.find_by(tag_name: tag_params[:tag_3]).id)
            end
            render :show
        else
            render json: @course.errors.full_messages, status: 404
        end
    end


    def show 
        @course = course.find(params[:id])
        render :show
    end

    private
    def tag_params 
        params.require(:tag).permit(:tag_1, :tag_2, :tag_3)
    end

    def course_params
        params.require(:course).permit(:course_name, :description, :type, :mentor_id, :image_url)
    end

end
