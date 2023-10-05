class UsersController < ApplicationController

  def show
    @nickname = current_user.nickname
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit, status: :unprocessable_entity
    end
  end


  private
  def user_params
    params.require(:user).permit(:nickname, :email, :password)
  end

end
