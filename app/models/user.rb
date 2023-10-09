class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

       with_options presence: true do
              validates :nickname, format: { with: /\A[ぁ-んァ-ン一-龥々ー]/, message: 'は全角文字で入力してください' }
              validates :password, format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i, message: 'は文字と数字の両方を含めてください' }
       end

       has_many :photos
       has_many :events
       has_one_attached :image

       
end
