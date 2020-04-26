class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at, :updated_at

  has_many :columns
  has_many :cards
end
