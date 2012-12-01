class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      add_column :users, :latitude,  :float #you can change the name, see wiki
      add_column :users, :longitude, :float #you can change the name, see wiki
      t.timestamps
    end
  end
end
