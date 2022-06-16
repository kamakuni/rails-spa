class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password]) then
      session[:user_id] = user.id
      render json: {:status => "SUCCESS"} 
    else
      render status:500, json: {:status => "ERROR"}
    end
    #session[:user_id] = user.id
  end

  def destory

  end
end
