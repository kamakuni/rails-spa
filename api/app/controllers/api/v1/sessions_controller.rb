class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { status: 'OK' }
    else
      render status: 500, json: { status: 'ERROR' }
    end
  end

  def destory
    session.destory(:user_id)
  end
end
