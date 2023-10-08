class EventsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  
  def index
    @user = current_user
  end
  
end
