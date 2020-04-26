class ColumnSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :name, :position, :created_at

  has_many :cards
end
