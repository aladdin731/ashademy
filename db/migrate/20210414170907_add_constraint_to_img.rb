class AddConstraintToImg < ActiveRecord::Migration[5.2]
  def change
    change_column_null :courses, :image_url, false 
  end
end
