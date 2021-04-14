class RemoveConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tags, :tag_name, true 
  end
end
