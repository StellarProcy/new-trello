class Card < ApplicationRecord
  validates :title, presence: true
  belongs_to :column
end
