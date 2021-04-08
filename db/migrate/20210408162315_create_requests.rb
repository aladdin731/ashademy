class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.integer :course_id, null:false 
      t.integer :mentee_id, null:false 
      t.date :start_time, null:false 
      t.date :end_time, null:false 
      t.string :status, null:false 

      t.timestamps
    end
    add_index :requests, :course_id
    add_index :requests, :mentee_id 
  end
end
