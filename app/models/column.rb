class Column < ApplicationRecord
  validates :name, presence: true
  belongs_to :board
  has_many :cards
end
