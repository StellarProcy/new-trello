class Board < ApplicationRecord
    validates :title, presence: true
    has_many :columns
    has_many :cards, through: :columns
end