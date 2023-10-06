class Event < ApplicationRecord
  has_many_attached :photos
  has_many :photos
  belongs_to :user
end
