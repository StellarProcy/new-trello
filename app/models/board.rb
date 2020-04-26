class Board < ApplicationRecord
    # include Hashid::Rails
    has_many :columns
    has_many :cards, through: :columns
end