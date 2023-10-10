require 'rails_helper'
RSpec.describe User, type: :model do

  before do
    @user = FactoryBot.build(:user)
  end

  describe 'ユーザー新規登録' do
    context 'ユーザー新規登録できるとき' do
      it '全ての項目が入力されていると登録できる' do
      expect(@user).to be_valid
      end
    end

    context 'ユーザー新規登録できないとき' do
      it 'nicknameが空では登録できない' do
        @user.nickname = '' 
        @user.valid?
        expect(@user.errors.full_messages).to include("ニックネームを入力してください")
      end

      it 'nicknameが半角文字では登録できない' do
        @user.nickname = '' 
        @user.valid?
        expect(@user.errors.full_messages).to include("ニックネームは全角文字で入力してください")
      end
      
      it 'nicknameが英字では登録できない' do
        @user.nickname = '' 
        @user.valid?
        expect(@user.errors.full_messages).to include("ニックネームは全角文字で入力してください")
      end

      it 'emailが空では登録できない' do
        @user.email = '' 
        @user.valid?
        expect(@user.errors.full_messages).to include("Eメールを入力してください")
      end

      it 'emailは@を含まないと登録できない' do
        @user.email = 'mail'
        @user.valid?
        expect(@user.errors.full_messages).to include("Eメールは不正な値です")
      end

      it "重複したemailの場合は登録ができない" do
        @user.save
        another_user = FactoryBot.build(:user)
        another_user.email = @user.email
        another_user.valid?
        expect(another_user.errors.full_messages).to include("Eメールはすでに存在します")
      end

      it 'passwordが空では登録できない' do
        @user.password = ''
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードを入力してください") 
      end
      it "passwordが5文字以下では登録ができない" do
        @user.password = '00000'
        @user.password_confirmation = @user.password
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードは6文字以上で入力してください")
      end
      it "passwordが確認用と一致しない場合は登録ができない" do
        @user.password = 'pa1ss2wo3rd4'
        @user.password_confirmation = 'pass12word34'
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワード（確認用）とパスワードの入力が一致しません")
      end
  
      it "passwordが英字のみでは登録できない" do
        @user.password = 'aaaaaa'
        @user.password_confirmation = 'aaaaaa'
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードは文字と数字の両方を含めてください")
      end
      it "passwordが数字のみでは登録できない" do
        @user.password ='111111'
        @user.password_confirmation = '111111'
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードは文字と数字の両方を含めてください")
      end
      it "passwordが全角文字では登録できない" do
        @user.password = 'ああああああ'
        @user.password_confirmation = 'ああああああ'
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードは文字と数字の両方を含めてください")
      end
  
    end
  end
end
