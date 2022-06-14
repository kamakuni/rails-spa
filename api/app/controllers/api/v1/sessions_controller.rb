class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    session[:user_id] = user.id
    render session[:user_id]
    #session[:user_id] = user.id
  end

  def destory

  end
end
