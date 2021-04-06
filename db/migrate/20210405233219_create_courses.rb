class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :course_name, null: false 
      t.text :description, null: false 
      t.string :type, null: false 
      t.string :image_url
      t.integer :mentor_id, null: false 

      t.timestamps
    end

  end
end
