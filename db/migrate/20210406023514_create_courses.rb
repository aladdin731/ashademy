class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string "course_name", null: false
      t.text "description", null: false
      t.string "course_type", null: false
      t.string "image_url"
      t.integer "mentor_id", null: false
    end
    add_index :courses, :mentor_id
  end
end
